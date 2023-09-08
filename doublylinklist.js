class Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    insertTail(data) {
      let newNode = new Node(data);
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
      this.tail = newNode;
      if (!this.head) {
        this.head = newNode;
      }
    }
    deleteTail() {
      if (this.tail === null) {
        return;
      }
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
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
  let dl = new DoublyLinkedList();
  dl.insertTail(1);
  dl.insertTail(2);
  dl.insertTail(3);
  console.log("List after Inserting from  the tail node:");
  dl.printList();
  dl.deleteTail();
  console.log("List after deleting from the tail node:");
  dl.printList();  
  