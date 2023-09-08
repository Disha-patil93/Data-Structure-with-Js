class node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTreeMaxMin {
    constructor() {
      this.root = null;
    }
    insert(data) {
      const newnode = new node(data);
      if (this.root == null) {
        this.root = newnode;
      } else {
        this.insertNode(this.root, newnode);
      }
    }
    insertNode(node, newnode) {
      if (newnode.data < node.data) {
        if (node.left == null) {
          node.left = newnode;
        } else {
          return this.insertNode(node.left, newnode);
        }
      } else {
        if (newnode.data > node.data) {
          if (node.right == null) {
            node.right = newnode;
          } else {
            return this.insertNode(node.right, newnode);
          }
        }
      }
    }
    getRootNode() {
      return this.root;
    }
    Min(node) {
      if (node.left == null) return node.data;
      else return this.Min(node.left);
    }
    Max(node) {
      if (node.right == null) return node.data;
      else return this.Max(node.right);
    }
  }
  let tree = new BinarySearchTreeMaxMin();
  tree.insert(43);
  tree.insert(97);
  tree.insert(66);
  tree.insert(77);
  tree.insert(87);
  console.log(tree);
  let root = tree.getRootNode();
  console.log("Minimum of tree is:" + tree.Min(root));
  console.log("Maximum of tree is:" + tree.Max(root));
  