console.clear();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.getSize() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  print() {
    let curr = this.head;
    const list = [];
    while (curr !== null) {
      list.push(curr.value);
      curr = curr.next;
    }
    console.log("Linked List:", list.join(" => "));
  }

  append(value) {
    const node = new Node(value);

    if (this.getSize() === 0) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  deleteFromHead() {
    let removedNode = this.head;
    if (this.getSize() === 0) {
      return null;
    } else if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;

    return removedNode.value;
  }

  deleteFromTail() {
    let removedNode = this.tail;

    if (this.getSize() === 0) {
      return null;
    } else if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return removedNode.value;
  }

  printReverse() {
    let curr = this.tail;
    const list = [];
    while (curr !== null) {
      list.push(curr.value);
      curr = curr.prev;
    }
    console.log("Linked List in reverse:", list.join(" => "));
  }
}

const linkedList = new LinkedList();

console.log("Is Empty", linkedList.isEmpty());

console.log("Size", linkedList.getSize());

linkedList.prepend(30);

linkedList.print();

linkedList.prepend(20);

linkedList.print();

linkedList.append(40);

linkedList.print();

linkedList.append(50);
linkedList.append(60);
linkedList.append(70);

linkedList.print();

linkedList.printReverse();

linkedList.print();

linkedList.deleteFromTail();

linkedList.print();

linkedList.deleteFromHead();

linkedList.print();
