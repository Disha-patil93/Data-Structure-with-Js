class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      let newNode = new Node(data);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
  
      while (current) {
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    search(data) {
      let current = this.root;
  
      while (current) {
        if (data === current.data) {
          return current;
        } else if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
     preOrder(root) {
      if (!root) return;
      console.log(root.data);
      preOrder(root.left);
      preOrder(root.right);
  }
  
  }
  
  let bst = new BinarySearchTree();
  
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(7);
  bst.insert(12);
  bst.insert(20);
  bst.insert(100);
  bst.preOrder();
  console.log(bst.search(15));
  console.log(bst.search(100));
  