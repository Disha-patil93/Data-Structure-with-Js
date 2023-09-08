class ReverseStack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      this.stack.push(item);
    }
  
    pop() {
      if (this.stack.length === 0) {
        return "Stack is empty.";
      }
      return this.stack.pop();
    }
  
    reverse() {
      this.stack = this.stack.reverse();
    }
  
    printStack() {
      for (let i = 0; i < this.stack.length; i++) {
        console.log(this.stack[i]);
      }
    }
  }
  
  let stack = new ReverseStack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log("Original Stack: ")
  stack.printStack();
  
  stack.reverse();
  
  console.log("Reversed Stack: ")
  stack.printStack();
  
  