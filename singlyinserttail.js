class Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    insertTail(data) {
      let newNode = new Node(data);
      if (this.tail) {
          this.tail.next = newNode;
      }
      this.tail = newNode;
      if(!this.head){
          this.head = newNode;
      }
    }
    deleteTail() {
      if (this.head === null) {
        return;
      }
      if(this.head === this.tail){
          this.head = this.tail = null;
      }
      else{
          let current = this.head;
          while (current.next !== this.tail) {
              current = current.next;
          }
          current.next = null;
          this.tail = current;
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
  ll.insertTail(1);
  ll.insertTail(2);
  ll.insertTail(3);
  console.log("Original list:")
  ll.printList();
  ll.deleteTail(3);
  console.log("List after deleting the tail node:")
  ll.printList();
  