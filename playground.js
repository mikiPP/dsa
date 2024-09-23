class MaxHeap {
  constructor() {
    this.heap = [];
  }

  add(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

function runningMedian(a) {
  const result = [];
  const lowerHalf = new MaxHeap();
  const upperHalf = new MinHeap();

  for (let i = 0; i < a.length; i++) {
    const num = a[i];
    if (lowerHalf.size() === 0 || num <= lowerHalf.peek()) {
      lowerHalf.add(num);
    } else {
      upperHalf.add(num);
    }

    if (lowerHalf.size() > upperHalf.size() + 1) {
      upperHalf.add(lowerHalf.remove());
    } else if (upperHalf.size() > lowerHalf.size()) {
      lowerHalf.add(upperHalf.remove());
    }

    if (lowerHalf.size() === upperHalf.size()) {
      result.push((lowerHalf.peek() + upperHalf.peek()) / 2);
    } else {
      result.push(lowerHalf.peek());
    }
  }

  return result;
}

function runningMedian(a) {
  const result = [];
  const heap = new Heap();

  for (let i = 0; i < a.length; i++) {
    heap.add(a[i]);
    result.push(heap.getMedian());
  }

  return result;
}
