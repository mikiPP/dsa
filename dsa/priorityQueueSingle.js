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

  enqueue(value) {
    this.values.push(value);

    let index = this.values.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (parentIndex >= 0 && value < this.values[parentIndex]) {
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
    const length = this.values.length;

    let index = 0;
    this.values[index] = lastItem;
    let leftIndex = this.getChildLeftIndex(index);
    let swapIndex = index;

    while (swapIndex !== null) {
      swapIndex = null;

      if (leftIndex < length) {
        const leftChild = this.values[leftIndex];
        if (leftChild < lastItem) {
          swapIndex = leftIndex;
        }
      }

      const rightIndex = leftIndex + 1;
      if (rightIndex < length) {
        const rightChild = this.values[rightIndex];
        if (
          (swapIndex === null && rightChild < lastItem) ||
          (swapIndex !== null && rightChild < this.values[leftIndex])
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
