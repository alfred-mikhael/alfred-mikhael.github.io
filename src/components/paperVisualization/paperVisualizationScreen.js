
import Footer from "../footer/footer.js"
import "./paperVisualizationScreen.css"

import React, {useEffect, useState} from 'react';
import {DeckGL} from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {TextLayer} from '@deck.gl/layers'
import {CollisionFilterExtension} from '@deck.gl/extensions';

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 11,
  maxZoom: 14,
  pitch: 0,
  bearing: 0
};

async function fetchAndCacheDataPoints(root_url, file_name) {
    return fetchAndCacheJson(root_url, file_name);
};

async function fetchAndCacheClusterInfo(root_url, file_name) {
    return fetchAndCacheJson(root_url, file_name);
};

async function fetchAndCacheClusterLabels(root_url, file_name) {
    return fetchAndCacheJson(root_url, file_name);
}

async function fetchAndCacheJson(root_url, file_name) {
    const cacheKey = file_name;
    const cached = window.localStorage.getItem(cacheKey);

    if (cached !== null) {
        try {
            return JSON.parse(cached);
        } catch (error) {
            // A malformed cache entry should not prevent a fresh request.
            window.localStorage.removeItem(cacheKey);
        }
    }

    const url = `${root_url.replace(/\/$/, "")}/${file_name.replace(/^\//, "")}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({password: process.env.REACT_APP_PAPER_VISUALIZATION_PASSWORD})
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ${file_name}: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    window.localStorage.setItem(cacheKey, JSON.stringify(result));
    return result;
}

export default function PaperVisualizationScreen({
    device, 
    deviceProps, 
    root_url,
    data_file_name,
    label_file_name,
    widgets
}) {
    const [hoveredPoint, setHoveredPoint] = useState(null);
    const [searchState, setSearchState] = useState({query: "", loading: false, result: ""});
    const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
    const [points, setPoints] = useState([]);
    const [clusterLabels, setClusterLabels] = useState([]);

    useEffect(() => {
        let cancelled = false;

        async function loadData() {
            if (!root_url || !data_file_name || !label_file_name) return;

            const [loadedPoints, loadedLabels] = await Promise.all([
                fetchAndCacheDataPoints(root_url, data_file_name),
                fetchAndCacheClusterLabels(root_url, label_file_name)
            ]);
            if (!cancelled) {
                setPoints(Array.isArray(loadedPoints) ? loadedPoints : []);
                setClusterLabels(Array.isArray(loadedLabels) ? loadedLabels : []);
            }
        }

        loadData();
        return () => {
            cancelled = true;
        };
    }, [root_url, data_file_name, label_file_name]);
    const xValues = points.map(point => point.x);
    const yValues = points.map(point => point.y);
    const xMin = Math.min(...xValues);
    const xRange = Math.max(...xValues) - xMin || 1;
    const yMin = Math.min(...yValues);
    const yRange = Math.max(...yValues) - yMin || 1;

    const runSearch = async query => {
        if (!query) return;

        setSearchState({query, loading: true, result: ""});

        // Placeholder for the future API query.
        await Promise.resolve();
        setSearchState({
            query,
            loading: false,
            result: "🔍 Find similar techniques"
        });
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
            longitude: matchingPoint.x,
            latitude: matchingPoint.y,
            zoom: Math.min(previous.zoom + 2, INITIAL_VIEW_STATE.maxZoom)
        }));
        runSearch(query);
    };

    const handlePointClick = info => {
        if (!info.object) return;

        const {arxiv_id, title} = info.object;
        runSearch([arxiv_id, title].filter(Boolean).join(" "));
    };

    const layers = [
        new ScatterplotLayer({
            id: "paper-points",
            data: points,
            getPosition: point => [point.x, point.y],
            getRadius: point => point.length,
            getFillColor: point => {
                const x = (point.x - xMin) / xRange;
                const y = (point.y - yMin) / yRange;
                return [
                    Math.round(255 * x),
                    Math.round(80 + 140 * y),
                    Math.round(255 * (1 - x)),
                    210
                ];
            },
            pickable: true,
            onHover: info => setHoveredPoint(
                info.object && info.object.title
                    ? {title: info.object.title, x: info.x, y: info.y}
                    : null
            ),
            onClick: handlePointClick
        }),
        new TextLayer({
            id: "paper-labels",
            data: clusterLabels,
            getPosition: label => [label.x, label.y],
            getText: label => label.label,
            getSize: label => 18,
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
                    {searchState.loading && <p>Searching…</p>}
                    {!searchState.loading && searchState.result && <p>{searchState.result}</p>}
                </div>
                    </div>
                <div className="map">
                        <DeckGL
                            device={device}
                            deviceProps={deviceProps}
                            layers={layers}
                            initialViewState={INITIAL_VIEW_STATE}
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
