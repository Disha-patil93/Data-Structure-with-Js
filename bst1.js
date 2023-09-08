class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTreeWithTransversal {
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
  
    inOrder(root) {
      if (!root) return;
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  
    preOrder(root) {
      if (!root) return;
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    
    postOrder(root) {
      if (!root) return;
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }
  
  let bst = new BinarySearchTreeWithTransversal();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(7);
  bst.insert(12);
  bst.insert(20);
  
  console.log("In-order Traversal:");
  bst.inOrder(bst.root);
  console.log("Pre-order Traversal:");
  bst.preOrder(bst.root);
  console.log("Post-order Traversal:");
  bst.postOrder(bst.root);
  