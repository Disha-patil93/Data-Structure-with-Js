class Node {
    constructor(data = null, next = null) {
          this.data = data;
          this.next = next;
        }
  }
class LinkedList {
    constructor() {
          this.head = null;
        }
insertFront(data) {
      const newNode = new Node(data, this.head);
          this.head = newNode;
    }
deleteFront() {
  if (this.head === null) {
    return;
  }
  this.head = this.head.next;
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
console.log("list After Insert from Front:")
ll.printList();
ll.deleteFront();
console.log("List after deleting from front node:")
ll.printList();
