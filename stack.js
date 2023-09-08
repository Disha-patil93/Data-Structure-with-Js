class Stack {
    constructor() {
      this.stack = [];
    }
    push(data) {
      this.stack.push(data);
    }
    pop() {
      if (this.stack.length === 0) {
        return "Stack is empty.";
      }
      return this.stack.pop();
    }
    peek() {
      if (this.stack.length === 0) {
        return "Stack is empty.";
      }
      return this.stack[this.stack.length - 1];
    }
    printStack() {
      for (let i = this.stack.length - 1; i >= 0; i--) {
        console.log(this.stack[i]);
      }
    }
  }
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log("Element List after pushing in stack: ")
  stack.printStack();
  console.log("Element that popped in stack: ")
  console.log(stack.pop()); 
  console.log("Element that peeked in stack: ")
  console.log(stack.peek()); 
  