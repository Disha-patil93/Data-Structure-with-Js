class Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    enqueue(data) {
      let newNode = new Node(data);
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      if (!this.head) {
        this.head = newNode;
      }
    }
  
    dequeue() {
      if (this.head === null) {
        return "Queue is empty.";
      }
      let item = this.head.data;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return item;
    }
  
    peek() {
      if (this.head === null) {
        return "Queue is empty.";
      }
      return this.head.data;
    }
    printQueue() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  let queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log("Element List after enqueue in queue: ")
  queue.printQueue();
  console.log("Element that dequeque in queue: ")
  console.log(queue.dequeue()); 
  console.log("Element that peeked in queue: ")
  console.log(queue.peek()); 
  