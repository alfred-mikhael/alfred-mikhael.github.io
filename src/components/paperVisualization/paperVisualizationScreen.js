import { useEffect, useState } from "react";
import Footer from "../footer/footer.js"
import Plot from 'react-plotly.js';
import "./paperVisualizationScreen.css"

const CACHE_KEY = "plotData";
const CACHE_TIME_KEY = "plotDataTimestamp";
const ONE_DAY = 1000 * 60 * 60 * 24;

export default function PaperVisualizationScreen() {
    let format = [{"x": [1,2,3], "y":[4,5,6], "type": "scatter", "mode": "markers", "marker": {"color": "red"}}];

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cached = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

        const isCacheValid = cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < ONE_DAY;

        if (isCacheValid) {
            setData(JSON.parse(cached));
            setLoading(false);
            return;
        }
        async function fetchPlotData() {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            await sleep(3000); // simulate 3 second API delay

            localStorage.setItem(CACHE_KEY, JSON.stringify(format));
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
            setData(format);
            setLoading(false);
            // try {
            //     const response = await fetch(API_ENDPOINT);
            //     const result = await response.json();

            //     localStorage.setItem(CACHE_KEY, JSON.stringify(result));
            //     localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());

            //     setData(result);
            // } catch (err) {
            //     console.error("Failed to fetch data:", err);
            // } finally {
            //     setLoading(false);
            // }
        }
        fetchPlotData();
    }, []);

    var pageContent = loading ? <div> LOADING </div> : <Plot 
        data={format} 
        layout={ {autosize: true, title: {text: 'A Fancy Plot'}, paper_bgcolor:'rgb(239, 235, 221)'}} 
        useResizeHandler={true} 
    />

    return (
        <div className="paper-visualization-page">
            <div className="paper-visualization-page-content">
                {pageContent}
            </div>
            <Footer />
        </div>
    );
}