
class Node{
    constructor(data)
    {
        this.left=null;
        this.data=data;
        this.right=null;
    }
}
var root=null;
root=new Node(10);
console.log(root);
root.left=new Node(20);
root.left.left=new Node(30);
root.left.right=new Node(40);
root.right=new Node(15);
console.log(root);
