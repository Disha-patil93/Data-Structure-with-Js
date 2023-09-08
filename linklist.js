class Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    insertFront(data) {
      let newNode = new Node(data);
      if (this.head) {
        this.head.prev = newNode;
        newNode.next = this.head;
      }
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    }
    deleteFront() {
      if (this.head === null) {
        return;
      }
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      else {
        this.tail = null;
      }
    }
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  let ll = new LinkedList();
  ll.insertFront(1);
  ll.insertFront(2);
  ll.insertFront(3);
  
  console.log("List after inserting from the front node:");
  ll.printList();
  ll.deleteFront();
  console.log("List after deleting from the front node:");
  ll.printList();
  