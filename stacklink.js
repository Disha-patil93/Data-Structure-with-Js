class Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
    }
  }
  
  class StackUsingLinked {
    constructor() {
      this.top = null;
    }
  
    push(data) {
      let newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    pop() {
      if (this.top === null) {
        return "Stack is empty.";
      }
      let item = this.top.data;
      this.top = this.top.next;
      return item;
    }
  
    peek() {
      if (this.top === null) {
        return "Stack is empty.";
      }
      return this.top.data;
    }
    printStack() {
      let current = this.top;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  let stack = new StackUsingLinked();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log("Element List after pushing in stack: ")
  stack.printStack();
  console.log("Element that popped in stack: ")
  console.log(stack.pop()); 
  console.log("Element that peeked in stack: ")
  console.log(stack.peek()); 
  