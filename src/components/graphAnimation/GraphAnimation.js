import Canvas from "../canvas/Canvas.js";
import { useEffect, useState } from "react";
import "./GraphAnimation.css";

const PROBABILITY = 0.2;
const vw = window.screen.width;
const vh = window.screen.height;
const ROWGAP = 30;
const COLGAP = 18;
const LINEWIDTH = 3;


class Vertex {
    constructor(neighbours, x, y) {
        this.neighbours = neighbours;
        this.x = x;
        this.y = y;
    }

    static radius = 2;
}


class Edge {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
        this.color = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = [];
        this.numChoices = vertices.length;
    }
}

class RandomGraph extends Graph {
    constructor(vertices) {
        super(vertices);
        this.generateEdges(PROBABILITY);
    }

    generateEdges(p) {
        this.edges = [];
        this.vertices.forEach(vertex => {
            var neighbours = vertex.neighbours;
            neighbours.forEach(neighbour => {
                if (p > Math.random()) {
                    this.edges.push(new Edge(vertex, neighbour));
                }
            });
        });
    }

    changeEdge() {
        var numEdges = this.edges.length;

        var popIndex = Math.floor(Math.random() * numEdges);
        this.edges.splice(popIndex, 1);
        var v1 = this.vertices[Math.floor(Math.random() * this.numChoices)];
        var v2 = v1.neighbours[Math.floor(Math.random() * v1.neighbours.length)]
        this.edges.push(new Edge(v1, v2)); 
    }

    changeEdges(n) {
        for (var i = 0; i < n; i++) {
            this.changeEdge();
        }
    }
}

const GraphAnimation = () => {
    const [dimensions, setDimensions] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setDimensions({
            width: window.screen.width,
            height: window.screen.height,
          });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    var vertices = [];
    var rows = Math.floor(vw / ROWGAP);
    var cols = Math.floor(vh / COLGAP);
    for (var i = -1; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            vertices.push(new Vertex([], i * ROWGAP, j * COLGAP))
        }
    }
    vertices.forEach(vertex => {
        if (vertex.x / ROWGAP - 1 > 0 && vertex.x / ROWGAP + 1 < rows && vertex.y / COLGAP - 1 > 0 && vertex.y / COLGAP + 1 < cols) {
            vertex.neighbours.push(vertices[(vertex.x / ROWGAP) * cols + vertex.y / COLGAP]);
            vertex.neighbours.push(vertices[(vertex.x / ROWGAP + 1) * cols + vertex.y / COLGAP - 1]);
            vertex.neighbours.push(vertices[(vertex.x / ROWGAP + 2) * cols + vertex.y / COLGAP]);
            vertex.neighbours.push(vertices[(vertex.x / ROWGAP + 1) * cols + vertex.y / COLGAP + 1]);
        }
        if (vertex.x / ROWGAP - 1 > 0) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / ROWGAP) * cols + vertex.y / COLGAP]))
                vertex.neighbours.push(vertices[(vertex.x / ROWGAP) * cols + vertex.y / COLGAP]);
        }
        if (vertex.x / ROWGAP + 1 < rows) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / ROWGAP + 2) * cols + vertex.y / COLGAP]))
                vertex.neighbours.push(vertices[(vertex.x / ROWGAP + 2) * cols + vertex.y / COLGAP]);
        }
        if (vertex.y / COLGAP - 1 > 0) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / ROWGAP + 1) * cols + vertex.y / COLGAP - 1]))
                vertex.neighbours.push(vertices[(vertex.x / ROWGAP + 1) * cols + vertex.y / COLGAP - 1]);
        }
        if (vertex.y / COLGAP + 1 < cols) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / ROWGAP + 1) * cols + vertex.y / COLGAP + 1]))
                vertex.neighbours.push(vertices[(vertex.x / ROWGAP + 1) * cols + vertex.y / COLGAP + 1]);
        }
    })

    var graph = new RandomGraph(vertices);

    return (
        <Canvas draw={draw} graph={graph} />
    );
}

function draw(ctx, graph) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //ctx.strokeStyle = "#E59500"
    ctx.lineWidth = LINEWIDTH;
    graph.edges.forEach((edge) => {
        if (edge.v2 === null) {
            throw Error;
        }
        ctx.beginPath();
        ctx.moveTo(edge.v1.x, edge.v1.y);
        ctx.lineTo(edge.v2.x, edge.v2.y);
        ctx.strokeStyle = `rgb(${edge.color[0]}, ${edge.color[1]}, ${edge.color[2]})`;
        ctx.stroke()
    });

    // draw the vertices
    drawVertices(ctx, graph.vertices);
}

function drawVertices(ctx, vertices) {
    ctx.fillStyle = "green";
    ctx.globalAlpha = 0.5;
    vertices.forEach((vertex) => {
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, Vertex.radius, 0, 2 * Math.PI);
        ctx.fill();
    });

    ctx.beginPath();
    ctx.arc(100, 100, Vertex.radius, 0, 2 * Math.PI);
    ctx.fill();
}

export default GraphAnimation;