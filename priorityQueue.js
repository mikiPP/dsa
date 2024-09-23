class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getChildLeftIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getChildRightIndex(parentIndex) {
    return this.getChildLeftIndex(parentIndex) + 1;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (parentIndex >= 0 && newNode.priority < this.values[parentIndex].priority) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }

    return this;
  }

  dequeue() {
    const min = this.values[0];
    const lastItem = this.values.pop();
    if (this.values.length === 0) {
      return min;
    }
    const lastItemValue = lastItem.priority;
    const length = this.values.length;

    let index = 0;
    this.values[index] = lastItem;
    let leftIndex = this.getChildLeftIndex(index);
    let swapIndex = index;

    while (swapIndex !== null) {
      swapIndex = null;

      if (leftIndex < length) {
        const leftChild = this.values[leftIndex].priority;
        if (leftChild < lastItemValue) {
          swapIndex = leftIndex;
        }
      }

      const rightIndex = leftIndex + 1;
      if (rightIndex < length) {
        const rightChild = this.values[rightIndex].priority;
        if (
          (swapIndex === null && rightChild < lastItemValue) ||
          (swapIndex !== null && rightChild < this.values[leftIndex].priority)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex !== null) {
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = lastItem;
      }

      index = swapIndex;
      leftIndex = this.getChildLeftIndex(index);
    }

    return min;
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
