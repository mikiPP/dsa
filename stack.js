class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const previousFirst = this.first;
      this.first = newNode;
      this.first.next = previousFirst;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    if (this.size === 1) {
      this.last = null;
    }

    const temp = this.first;
    this.first = temp.next;

    this.size--;
    return temp.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
