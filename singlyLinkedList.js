class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let lastValue = null;

    while (current.next) {
      lastValue = current;
      current = lastValue.next;
    }

    lastValue.next = null;
    this.tail = lastValue;
    this.length--;

    if (current === this.head) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(value, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(value, index) {
    if (index < 0 && index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);

    const previousNext = previousNode.next;
    newNode.next = previousNext;
    previousNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 && index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop(value);
    }

    const previousNode = this.get(index - 1);
    const nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;
    this.length--;

    return nodeToRemove;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let previous = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(3);
list.push(2);
list.push(4);

console.log(list);

list.reverse();

console.log(list);
