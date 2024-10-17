function countConnectedComponents(matrix) {
  const n = matrix.length;
  const visited = new Array(n).fill(false);
  let groupCount = 0;

  function dfs(node) {
    visited[node] = true;

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (matrix[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      groupCount++;
      dfs(i);
    }
  }

  return groupCount;
}

const adjacencyMatrix = [
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];

const test2 = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
];

console.log(countConnectedComponents(adjacencyMatrix));
console.log(countConnectedComponents(test2));
