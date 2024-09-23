class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (this.adjacencyList[key]) {
      return;
    }
    this.adjacencyList[key] = [];
  }

  addEdge(firstVertex, secondVertex, weight) {
    const firstVertexValue = this.adjacencyList[firstVertex];
    const secondVertexValue = this.adjacencyList[secondVertex];

    if (!firstVertexValue || !secondVertexValue) {
      return;
    }

    firstVertexValue.push({ node: secondVertex, weight });
    secondVertexValue.push({ node: firstVertex, weight });
  }

  dijkstras(start, end) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};

    Object.keys(this.adjacencyList).forEach((vertex) => {
      if (vertex === start) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
      priorityQueue.enqueue(vertex, distances[vertex]);
    });

    while (priorityQueue.values.length) {
      const { value, priority } = priorityQueue.dequeue();

      if (value === end) {
        break;
      }

      this.adjacencyList[value].forEach(({ node, weight }) => {
        const distance = priority + weight;
        if (distance < distances[node]) {
          distances[node] = distance;
          previous[value] = node;
          priorityQueue.enqueue(node, distance);
        }
      });
    }

    const path = [];
    let current = start;
    while (previous[current]) {
      path.push(current);
      current = previous[current];
    }

    path.push(end);
    return path;
  }
}
const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('E');
graph.addVertex('D');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('E', 'D', 3);
graph.addEdge('F', 'D', 1);
graph.addEdge('E', 'F', 1);
console.log(graph.dijkstras('A', 'E'));
