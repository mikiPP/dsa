class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (this.adjacencyList[key]) {
      return;
    }
    this.adjacencyList[key] = [];
  }

  addEdge(firstVertex, secondVertex) {
    const firstVertexValue = this.adjacencyList[firstVertex];
    const secondVertexValue = this.adjacencyList[secondVertex];

    if (!firstVertexValue || !secondVertexValue) {
      return;
    }

    firstVertexValue.push(secondVertex);
    secondVertexValue.push(firstVertex);
  }

  removeEdge(firstVertex, secondVertex) {
    const firstVertexValue = this.adjacencyList[firstVertex];
    const secondVertexValue = this.adjacencyList[secondVertex];

    if (!firstVertexValue || !secondVertexValue) {
      return;
    }

    this.adjacencyList[firstVertex] = firstVertexValue.filter(
      (element) => element !== secondVertex,
    );
    this.adjacencyList[secondVertex] = secondVertexValue.filter(
      (element) => element !== firstVertex,
    );
  }

  removeVertex(vertex) {
    const vertexToUpdate = this.adjacencyList[vertex];
    for (let i = 0; i < vertexToUpdate.length; i++) {
      this.removeEdge(vertex, vertexToUpdate[i]);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirst(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
      }

      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        const neighborVertex = this.adjacencyList[vertex][i];
        if (!visited[neighborVertex]) {
          dfs(neighborVertex);
        }
      }
    };

    dfs(start);

    return result;
  }
  breadthFirst(start) {
    const result = [];
    const visited = {};
    const queue = [start];

    while (queue.length) {
      const current = queue.shift();
      result.push(current);
      visited[current] = true;

      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('E');
graph.addVertex('D');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('E', 'D');
graph.addEdge('F', 'D');
graph.addEdge('E', 'F');

console.log(graph.breadthFirst('A'));
