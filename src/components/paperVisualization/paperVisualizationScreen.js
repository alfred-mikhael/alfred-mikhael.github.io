
import Footer from "../footer/footer.js"
import "./paperVisualizationScreen.css"

import React, {useEffect, useMemo, useRef, useState} from 'react';
import Papa from 'papaparse';
import {DeckGL} from '@deck.gl/react';
import {COORDINATE_SYSTEM, OrthographicView} from '@deck.gl/core';
import {ScatterplotLayer, TextLayer} from '@deck.gl/layers';
import {CollisionFilterExtension} from '@deck.gl/extensions';

const INITIAL_VIEW_STATE = {
    target: [0, 0, 0],
    zoom: 0,
    minZoom: -20,
    maxZoom: 20
};
const PLOT_VIEW = new OrthographicView({id: 'paper-plot', flipY: false});

async function fetchCsv(root_url, file_name, requiredColumns, signal) {
    const url = `${root_url.replace(/\/$/, "")}/${file_name.replace(/^\//, "")}`;
    // Default fetch caching lets the browser honor the server's HTTP cache headers.
    const response = await fetch(url, {signal});

    if (!response.ok) {
        throw new Error(`Failed to fetch ${file_name}: ${response.status} ${response.statusText}`);
    }

    const bytes = new Uint8Array(await response.arrayBuffer());
    let csv;
    // Content-Encoding: gzip responses are already decompressed by fetch.
    if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
        if (!window.DecompressionStream) {
            throw new Error('This browser does not support gzip decompression.');
        }
        const stream = new Blob([bytes]).stream().pipeThrough(new window.DecompressionStream('gzip'));
        csv = await new Response(stream).text();
    } else {
        csv = new TextDecoder().decode(bytes);
    }

    const result = Papa.parse(csv, {
        header: true,
        delimiter: ',',
        skipEmptyLines: 'greedy',
        transformHeader: header => header.trim()
    });
    if (result.errors.length) {
        throw new Error(`Invalid CSV in ${file_name}: ${result.errors[0].message}`);
    }
    const missingColumns = requiredColumns.filter(column => !result.meta.fields?.includes(column));
    if (missingColumns.length) {
        throw new Error(`${file_name} is missing columns: ${missingColumns.join(', ')}`);
    }
    return result.data;
}

function parseNumber(value, description) {
    const number = Number(value);
    if (!value.trim() || !Number.isFinite(number)) {
        throw new Error(`Invalid ${description}: ${value}`);
    }
    return number;
}

export default function PaperVisualizationScreen({
    device, 
    deviceProps, 
    root_url,
    data_file_name,
    label_file_name,
    centroid_file_name,
    widgets
}) {
    const [hoveredPoint, setHoveredPoint] = useState(null);
    const [searchState, setSearchState] = useState({query: "", loading: false, result: "Not implemented right now!"});
    const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
    const [points, setPoints] = useState([]);
    const [clusterLabels, setClusterLabels] = useState([]);
    const [loadState, setLoadState] = useState({loading: true, error: ''});
    const mapRef = useRef(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadData() {
            setLoadState({loading: true, error: ''});
            setPoints([]);
            setClusterLabels([]);
            setHoveredPoint(null);
            try {
                // An empty PUBLIC_URL is valid: public files are served from the site root.
                if (typeof root_url !== 'string' || !data_file_name || !label_file_name || !centroid_file_name) {
                    throw new Error('The data URL and all three CSV filenames must be configured.');
                }
                const [coordinates, clusters, centroids] = await Promise.all([
                    fetchCsv(root_url, data_file_name, ['arxiv_id', 'title', 'umap_x', 'umap_y'], controller.signal),
                    fetchCsv(root_url, label_file_name, ['cluster_id', 'parent_cluster_id', 'size', 'label'], controller.signal),
                    fetchCsv(root_url, centroid_file_name, ['cluster_id', 'centroid'], controller.signal)
                ]);
                if (controller.signal.aborted) return;

                const loadedPoints = coordinates.map(row => {
                    const arxiv_id = row.arxiv_id.trim();
                    if (!arxiv_id) throw new Error('A paper is missing its arXiv ID.');
                    return {
                        arxiv_id,
                        title: row.title,
                        x: parseNumber(row.umap_x, `umap_x for ${arxiv_id}`),
                        y: parseNumber(row.umap_y, `umap_y for ${arxiv_id}`)
                    };
                });
                const centroidsById = new Map(centroids.map(row => {
                    const id = row.cluster_id.trim();
                    let position;
                    try {
                        position = JSON.parse(row.centroid);
                    } catch {
                        throw new Error(`Invalid centroid JSON for cluster ${id}.`);
                    }
                    if (!Array.isArray(position) || position.length !== 2 || !position.every(Number.isFinite)) {
                        throw new Error(`Cluster ${id} must have a centroid with two finite numbers.`);
                    }
                    return [id, position];
                }));
                const loadedLabels = clusters.map(row => {
                    const cluster_id = row.cluster_id.trim();
                    const position = centroidsById.get(cluster_id);
                    if (!position) throw new Error(`Missing centroid for cluster ${cluster_id}.`);
                    return {
                        cluster_id,
                        parent_cluster_id: row.parent_cluster_id.trim(),
                        size: parseNumber(row.size, `size for cluster ${cluster_id}`),
                        label: row.label,
                        x: position[0],
                        y: position[1]
                    };
                });
                setPoints(loadedPoints);
                setClusterLabels(loadedLabels);
                setLoadState({loading: false, error: ''});
            } catch (error) {
                if (!controller.signal.aborted) {
                    setLoadState({loading: false, error: error.message});
                    controller.abort();
                }
            }
        }

        loadData();
        return () => {
            controller.abort();
        };
    }, [root_url, data_file_name, label_file_name, centroid_file_name]);

    const bounds = useMemo(() => {
        if (!points.length && !clusterLabels.length) return null;
        let xMin = Infinity;
        let xMax = -Infinity;
        let yMin = Infinity;
        let yMax = -Infinity;
        for (const records of [points, clusterLabels]) {
            for (const {x, y} of records) {
                xMin = Math.min(xMin, x);
                xMax = Math.max(xMax, x);
                yMin = Math.min(yMin, y);
                yMax = Math.max(yMax, y);
            }
        }
        return {xMin, xMax, yMin, yMax, xRange: xMax - xMin || 1, yRange: yMax - yMin || 1};
    }, [points, clusterLabels]);

    useEffect(() => {
        if (!bounds || !mapRef.current) return;
        const {width, height} = mapRef.current.getBoundingClientRect();
        const zoom = Math.log2(Math.min(
            Math.max(width - 80, 1) / bounds.xRange,
            Math.max(height - 80, 1) / bounds.yRange
        ));
        setViewState({
            ...INITIAL_VIEW_STATE,
            target: [(bounds.xMin + bounds.xMax) / 2, (bounds.yMin + bounds.yMax) / 2, 0],
            zoom: Math.max(INITIAL_VIEW_STATE.minZoom, Math.min(INITIAL_VIEW_STATE.maxZoom, zoom))
        });
    }, [bounds]);

    const runSearch = async query => {
        if (!query) return;

        setSearchState({query, loading: true, result: ""});
        try {
            const url = new URL("/api/query", "https://fido.mikhaels.org");
            url.searchParams.set("arxiv_id", query);
            url.searchParams.set("k", "10");
            const response = await fetch(url);
            const results = await response.json();
            setSearchState({
                query,
                loading: false,
                result: results
            });
        } catch (error) {
            setSearchState({query, loading: false, result: error.message})
        }

    };

    const handleSearch = event => {
        if (event.key !== "Enter") return;

        const query = event.currentTarget.value.trim();
        const matchingPoint = points.find(point =>
            point.title === query || point.arxiv_id === query
        );

        if (!matchingPoint) {
            setSearchState({
                query,
                loading: false,
                result: "No exact title or arXiv ID match found."
            });
            return;
        }

        setViewState(previous => ({
            ...previous,
            target: [matchingPoint.x, matchingPoint.y, 0],
            zoom: Math.min(previous.zoom + 2, INITIAL_VIEW_STATE.maxZoom)
        }));
        runSearch(matchingPoint.arxiv_id);
    };

    const handlePointClick = info => {
        if (!info.object) return;

        // Preserve the slash in legacy IDs such as hep-th/9901001.
        const paperPath = info.object.arxiv_id.split('/').map(encodeURIComponent).join('/');
        window.open(`https://arxiv.org/abs/${paperPath}`, '_blank', 'noopener,noreferrer');
    };

    const layers = [
        new ScatterplotLayer({
            id: "paper-points",
            data: points,
            coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
            getPosition: point => [point.x, point.y],
            radiusUnits: 'pixels',
            getRadius: 3,
            getFillColor: point => {
                const x = (point.x - bounds.xMin) / bounds.xRange;
                const y = (point.y - bounds.yMin) / bounds.yRange;
                return [
                    Math.round(255 * x),
                    Math.round(80 + 140 * y),
                    Math.round(255 * (1 - x)),
                    210
                ];
            },
            pickable: true,
            onHover: info => setHoveredPoint(
                info.object
                    ? {title: info.object.title, arxiv_id: info.object.arxiv_id, x: info.x, y: info.y}
                    : null
            ),
            onClick: handlePointClick
        }),
        new TextLayer({
            id: "paper-labels",
            data: clusterLabels,
            coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
            getPosition: label => [label.x, label.y],
            getText: label => label.label,
            getSize: 18,
            characterSet: 'auto',
            getColor: [0, 0, 0],
            getBackgroundColor: [255, 255, 255, 150],
            backgroundPadding: [4, 2],
            background: true,
            collisionEnabled: true,
            getCollisionPriority: label => label.size,
            extensions: [new CollisionFilterExtension()]
        })
    ];
    function renderTooltip({x, y, title, arxiv_id}) {
        return (
            <div
                className="paper-point-tooltip"
                style={{left: x, top: y}}
            >
                {"(" + arxiv_id + ") " + title}
            </div>
        );
    }
    return (
        <div className="paper-visualization-page">
            <div className="paper-visualization-page-content">
                <div className="search-area">
                    <div className="title-area">
                        Arxiv Math and CS papers
                    </div>
                    <input
                        className="search-bar"
                        type="search"
                        placeholder="Search papers"
                        aria-label="Search papers"
                        value={searchState.query}
                        onChange={event => setSearchState(previous => ({...previous, query: event.target.value}))}
                        onKeyDown={handleSearch}
                    />
                     <div className="sidebar">
                    {loadState.loading && <p role="status">Loading papers and clusters…</p>}
                    {loadState.error && <p role="alert">Unable to load visualization: {loadState.error}</p>}
                    {!loadState.loading && !loadState.error && !points.length && <p>No papers found.</p>}
                    {searchState.loading && <p>Searching…</p>}
                    {!searchState.loading && (
                        searchState.result && typeof searchState.result === 'object' ? (
                            <ul>
                                {Object.entries(searchState.result).map(([arxiv_id, match]) => (
                                    <li key={arxiv_id}>
                                        <a
                                            href={`https://arxiv.org/abs/${arxiv_id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {arxiv_id}
                                        </a>
                                        <p>{match[0].target_passage}</p>
                                        <p>Similarity: {match[0].similarity}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{searchState.result}</p>
                        )
                    )}
                </div>
                    </div>
                <div className="map" ref={mapRef}>
                        <DeckGL
                            device={device}
                            deviceProps={deviceProps}
                            layers={layers}
                            views={PLOT_VIEW}
                            viewState={viewState}
                            onViewStateChange={({viewState: nextViewState}) => setViewState(nextViewState)}
                            controller={true}
                            widgets={widgets}
                        >
                            {hoveredPoint && renderTooltip(hoveredPoint)}
                        </DeckGL>
                </div>
            </div>
            <Footer />
        </div>
    );
}
