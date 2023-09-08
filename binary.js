class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      let newNode = new Node(data);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let queue = [this.root];
  
      while (queue.length) {
        let current = queue.shift();
  
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          queue.push(current.left);
        }
  
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.right);
        }
      }
    }
  
    isComplete() {
      if (!this.root) return true;
      let queue = [this.root];
  
      let flag = false;
      while (queue.length) {
        let current = queue.shift();
  
        if (current.left) {
          if (flag) return false;
          queue.push(current.left);
        } else {
          flag = true;
        }
  
        if (current.right) {
          if (flag) return false;
          queue.push(current.right);
        } else {
          flag = true;
        }
      }
      return true;
    }
  
    preOrder(root) {
      if (!root) return;
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  
  let tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
  tree.insert(6);
  tree.insert(7);
  tree.insert(8);
  console.log("The Tree is complete Binary or not: ")
  console.log(tree.isComplete());
  console.log("The Preorder of tree is : ")
  tree.preOrder(tree.root);
  