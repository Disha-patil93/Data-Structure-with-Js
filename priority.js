class Node {
    constructor(data, priority) {
      this.data = data;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.head = null;
    }
  
    enqueue(data, priority) {
      let newNode = new Node(data, priority);
  
      if (!this.head || priority < this.head.priority) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && current.next.priority <= priority) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    printQueue() {
      let current = this.head;
      while (current) {
        console.log(current.data, current.priority);
        current = current.next;
      }
    }
  }
  
  let pq = new PriorityQueue();
  console.log("nodes in ascending order are : ")
  pq.enqueue("A", 3);
  pq.enqueue("B", 1);
  pq.enqueue("C", 5);
  pq.enqueue("D", 6);
  pq.enqueue("E", 4);
  pq.enqueue("F", 2);
  pq.printQueue();
  