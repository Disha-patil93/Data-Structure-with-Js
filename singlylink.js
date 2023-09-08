

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor(data) {
    //create a node
    const newnode = new Node(data);
    //initialize head and tail
    this.head = newnode;
    this.tail = newnode;
    //initialize lenth
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    // adding a node to an empty linkedlist
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    // one item in list
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else {
      let temp = this.head;
      let prev = this.head;
      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.length) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null; // this will beak pointer which head is pointing
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}
const ll = new Linkedlist(2);
console.log(ll);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
ll.push(7);
ll.push(8);
ll.unshift(10);
console.log(JSON.stringify(ll));
let p = ll.pop();
let p1 = ll.shift();
console.log(JSON.stringify(ll));
console.log(p);
console.log(p1);
