class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newValue = new Node(value);

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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
