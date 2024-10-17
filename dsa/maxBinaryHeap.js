class MaxBinaryHeap {
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

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (parentIndex >= 0 && value > this.values[parentIndex]) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }

    return this;
  }

  extractMax() {
    const max = this.values[0];
    const lastItemValue = this.values.pop();
    const length = this.values.length;

    if (this.values.length === 0) {
      return max;
    }
    let index = 0;
    this.values[index] = lastItemValue;
    let leftIndex = this.getChildLeftIndex(index);
    let swapIndex = 0;

    while (swapIndex !== null) {
      swapIndex = null;

      if (leftIndex < length) {
        const leftChild = this.values[leftIndex];
        if (leftChild > lastItemValue) {
          swapIndex = leftIndex;
        }
      }

      const rightIndex = leftIndex + 1;
      if (rightIndex < length) {
        const rightChild = this.values[rightIndex];
        if (
          (swapIndex === null && rightChild > lastItemValue) ||
          (swapIndex !== null && rightChild > this.values[leftIndex])
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex !== null) {
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = lastItemValue;
      }

      index = swapIndex;
      leftIndex = this.getChildLeftIndex(index);
    }
    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(22);
heap.insert(33);
heap.insert(55);

console.log(heap);
