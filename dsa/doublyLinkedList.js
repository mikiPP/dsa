class DoublyLinkedList {
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
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const nodeToPop = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToPop.previous;
      this.tail.next = null;
      nodeToPop.prev = null;
    }

    this.length--;
    return nodeToPop;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    }

    const previousHead = this.head;
    this.head = previousHead.next;
    this.head.previous = null;
    previousHead.next = null;

    this.length--;

    return previousHead;
  }

  unshift(newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
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
    let current;

    if (index > this.length / 2) {
      current = this.tail;
      let counter = this.length - 1;

      while (counter !== index) {
        current = current.previous;
        counter--;
      }
    } else {
      current = this.head;
      let counter = 0;

      while (counter !== index) {
        current = current.next;
        counter++;
      }
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

    previousNext.previous = newNode;
    previousNode.next = newNode;
    newNode.next = previousNext;
    newNode.previous = previousNode;
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

    const nodeToRemove = this.get(index);
    const previousNode = nodeToRemove.previous;
    const nextNode = nodeToRemove.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    nodeToRemove.previous = null;
    nodeToRemove.next = null;

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
      current.previous = next;
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
    this.previous = null;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

list.reverse();

console.log(list);
