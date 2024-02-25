//Adjacency Matrix
const matrix = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0],
];

// Adjacency List
const adjList = {
	A: ['B'],
	B: ['A', 'C'],
	C: ['B'],
};

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
		return;
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
		if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
		return;
	}

	hasEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
			return false;
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}

	removeEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
			console.log('Invalid vertices');
			return false;
		}
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
		return true;
	}

	removeVertex1(vertex) {
		if (!this.adjacencyList[vertex]) {
			console.log('Invalid Vertex!');
			return;
		}
		delete this.adjacencyList[vertex];
		for (const vt in this.adjacencyList) {
			this.adjacencyList[vt].delete(vertex);
		}
		return;
	}

	removeVertex2(vertex) {
		if (!this.adjacencyList[vertex]) {
			console.log('Invalid Vertex!');
			return;
		}
		for (const vt in this.adjacencyList) {
			this.removeEdge(vt, vertex);
		}
		delete this.adjacencyList[vertex];
		return;
	}

	display() {
		for (const vertex in this.adjacencyList) {
			console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
		}
	}
}

const graph = new Graph();
graph.addEdge('A', 'B');
graph.addVertex('C');
graph.addEdge('B', 'C');
graph.addEdge('A', 'D');
// graph.display();
graph.removeVertex2('B');
// graph.removeEdge('A', 'D');
graph.display();
// console.log(graph.hasEdge('B', 'C'));
