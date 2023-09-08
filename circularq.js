class CircularQueue {
    constructor(size) {
      this.queue = new Array(size);
      this.size = size;
      this.head = -1;
      this.tail = -1;
    }
  
    enqueue(item) {
      if ((this.tail + 1) % this.size === this.head) {
        return "Queue is full.";
      }
      if (this.head === -1) {
        this.head = 0;
      }
      this.tail = (this.tail + 1) % this.size;
      this.queue[this.tail] = item;
    }
  
    dequeue() {
      if (this.head === -1) {
        return "Queue is empty.";
      }
      let item = this.queue[this.head];
      this.queue[this.head] = undefined;
      if (this.head === this.tail) {
        this.head = -1;
        this.tail = -1;
      } else {
        this.head = (this.head + 1) % this.size;
      }
      return item;
    }
  
    peek() {
      if (this.head === -1) {
        return "Queue is empty.";
      }
      return this.queue[this.head];
    }
  
    front() {
      return this.queue[this.head];
    }
    displayQueue() {
      let i;
      if (this.head <= this.tail) {
          for (i = this.head; i <= this.tail; i++) {
              console.log(this.queue[i]);
          }
      } else {
          for (i = this.head; i < this.size; i++) {
              console.log(this.queue[i]);
          }
          for (i = 0; i <= this.tail; i++) {
              console.log(this.queue[i]);
          }
      }
    }
  }
  
  let circularQueue = new CircularQueue(5);
  
  circularQueue.enqueue(1);
  circularQueue.enqueue(2);
  circularQueue.enqueue(3);
  circularQueue.enqueue(4);
  circularQueue.enqueue(5);
  console.log("After enqueue Operation: ")
  console.log(circularQueue.displayQueue());
  console.log("After dequeue Operation: ");
  console.log(circularQueue.dequeue());
  console.log("After peek Operation: ");
  console.log(circularQueue.peek());
  console.log("After front Operation: ");
  console.log(circularQueue.front());
  
  