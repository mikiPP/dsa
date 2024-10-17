class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newValue = new QNode(value);

    if (!this.first) {
      this.first = newValue;
      this.last = newValue;
    } else {
      this.last.next = newValue;
      this.last = newValue;
    }

    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }

    const previousFirst = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = previousFirst.next;
    this.size--;

    return previousFirst;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let node = this.root;

    const findNodePlace = (newNode, node) => {
      if (newNode.value === node.value) {
        return undefined;
      }

      if (node.value < value) {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        return findNodePlace(newNode, node.right);
      } else {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        return findNodePlace(newNode, node.left);
      }
    };

    return findNodePlace(newNode, node);
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }
    let node = this.root;

    const findNode = (value, currentNode) => {
      if (!currentNode) {
        return undefined;
      }

      if (value === currentNode.value) {
        return currentNode;
      }

      if (currentNode.value < value) {
        return findNode(value, currentNode.right);
      } else {
        return findNode(value, currentNode.left);
      }
    };

    return findNode(value, node);
  }

  // For depper trees
  bfs() {
    if (!this.root) {
      return undefined;
    }

    const queue = new Queue();
    queue.enqueue(this.root);
    const result = [];

    while (queue.size) {
      const node = queue.dequeue();
      result.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    return result;
  }

  // For wider trees also this allows to create the tree again
  dfsPreOrder() {
    if (!this.root) {
      return undefined;
    }

    const result = [];

    function addVisited(node, visited) {
      visited.push(node.value);

      if (node.left) {
        addVisited(node.left, visited);
      }

      if (node.right) {
        addVisited(node.right, visited);
      }
    }

    addVisited(this.root, result);

    return result;
  }

  dfsPostOrder() {
    if (!this.root) {
      return undefined;
    }

    const result = [];

    function addVisited(node, visited) {
      if (node.left) {
        addVisited(node.left, visited);
      }

      if (node.right) {
        addVisited(node.right, visited);
      }
      visited.push(node.value);
    }

    addVisited(this.root, result);

    return result;
  }

  dfsInOrder() {
    if (!this.root) {
      return undefined;
    }

    const result = [];

    function addVisited(node, visited) {
      if (node.left) {
        addVisited(node.left, visited);
      }

      visited.push(node.value);

      if (node.right) {
        addVisited(node.right, visited);
      }
    }

    addVisited(this.root, result);

    return result;
  }

  size() {
    function traverse(node) {
      if (node === null) {
        return -1;
      }

      const leftHeight = traverse(node.left);
      const rightHeight = traverse(node.right);

      return 1 + Math.max(leftHeight, rightHeight);
    }

    return traverse(this.root);
  }
}

class QNode {
  constructor({ value, left, right }) {
    this.value = value;
    this.next = null;
    this.left = left;
    this.right = right;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree();
tree.insert(3);
tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.insert(9);
tree.insert(12);
tree.insert(11);
tree.insert(15);
tree.insert(17);

console.log(tree.size());
