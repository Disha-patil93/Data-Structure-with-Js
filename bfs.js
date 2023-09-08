class BFSGraph {
    // Constructor
    constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
    }
    // Function to add an edge into the graph
    addEdge(v, w) {
    // Add w to v's list.
    this.adj[v].push(w);
    }
    // prints BFS traversal from a given source s
    BFS(s) {
    // Mark all the vertices as not visited(By default
    // set as false)
    let visited = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
    visited[i] = false;
    }
    // Create a queue for BFS
    let queue = [];
    // Mark the current node as visited and enqueue it
    visited[s] = true;
    queue.push(s);
    while (queue.length > 0) {
    // Dequeue a vertex from queue and print it
    s = queue[0];
    console.log(s + " ");
    queue.shift();
    // Get all adjacent vertices of the dequeued
    // vertex s. If a adjacent has not been visited,
    // then mark it visited and enqueue it
    this.adj[s].forEach((adjacent, i) => {
    if (!visited[adjacent]) {
    visited[adjacent] = true;
    queue.push(adjacent);
    }
    });
    }
    }
    }
    // Create a graph given in the above diagram
    g = new BFSGraph(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
    console.log(
    "Following is Breadth First Traversal " + "(starting from vertex 1)<br>");
    g.BFS(1);
