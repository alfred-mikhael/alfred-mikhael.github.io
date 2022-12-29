import Canvas from "../canvas/Canvas.js";

const PROBABILITY = 0.1;

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
        // this.color = [Math.floor(Math.random() * 225 + 30), Math.floor(Math.random() * 225 + 30), Math.floor(Math.random() * 225 + 30)];
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = [];
    }
}

class RandomGraph extends Graph {
    constructor(vertices) {
        super(vertices);
        this.generateEdges(PROBABILITY);
    }

    generateEdges(p) {
        this.edges = [];
        // var toAdd = p * this.vertices.length * 4;
        // for (var i = 0; i < toAdd; i++) {
        //     var index = Math.floor(Math.random() * (this.vertices.length - 1));
        //     var v1 = this.vertices[index];
        //     var subindex = Math.floor(Math.random() * (v1.neighbours.length - 1));
        //     this.edges.push(new Edge(v1, v1.neighbours[subindex]));
        // }
        this.vertices.forEach(vertex => {
            var neighbours = vertex.neighbours;
            neighbours.forEach(neighbour => {
                if (p > Math.random()) {
                    this.edges.push(new Edge(vertex, neighbour));
                }
            });
        });
    }
}

const GraphAnimation = () => {
    var vertices = [];
    for (var i = -1; i < 50; i++) {
        for (var j = 0; j < 16; j++) {
            vertices.push(new Vertex([], i * 50, j * 20))
        }
    }
    vertices.forEach(vertex => {
        if (vertex.x / 50 - 1 > 0 && vertex.x / 50 + 1 < 50 && vertex.y / 20 - 1 > 0 && vertex.y / 20 + 1 < 16) {
            vertex.neighbours.push(vertices[(vertex.x / 50) * 16 + vertex.y/20]);
            vertex.neighbours.push(vertices[(vertex.x / 50 + 1) * 16 + vertex.y/20 - 1]);
            vertex.neighbours.push(vertices[(vertex.x / 50 + 2) * 16 + vertex.y/20]);
            vertex.neighbours.push(vertices[(vertex.x / 50 + 1) * 16 + vertex.y/20 + 1]);
        }
        if (vertex.x / 50 - 1 > 0) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / 50) * 16 + vertex.y/20]))
            vertex.neighbours.push(vertices[(vertex.x / 50) * 16 + vertex.y/20]);
        }
        if (vertex.x / 50 + 1 < 50) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / 50 + 2) * 16 + vertex.y/20]))
            vertex.neighbours.push(vertices[(vertex.x / 50 + 2) * 16 + vertex.y/20]);
        }
        if (vertex.y / 20 - 1 > 0) {
            if (!vertex.neighbours.includes(vertices[(vertex.x / 50 + 1) * 16 + vertex.y/20 - 1]))
            vertex.neighbours.push(vertices[(vertex.x / 50 + 1) * 16 + vertex.y/20 - 1]);
        }
    })

    var graph = new RandomGraph(vertices);

    return (
        <Canvas draw={draw} graph={graph}/>
    );
}

function draw(ctx, graph) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = "#E59500"
    graph.edges.forEach((edge) => {
        if (edge.v2 === null) {
            throw Error;
        }
        ctx.moveTo(edge.v1.x, edge.v1.y);
        ctx.lineTo(edge.v2.x, edge.v2.y);
        //ctx.strokeStyle = `rgb(${edge.color[0]}, ${edge.color[1]}, ${edge.color[2]})`;
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
        ctx.arc(vertex.x, vertex.y, Vertex.radius, 0, 2*Math.PI);
        ctx.fill();
    });

    ctx.beginPath();
    ctx.arc(100, 100, Vertex.radius, 0, 2*Math.PI);
    ctx.fill();
}

export default GraphAnimation;