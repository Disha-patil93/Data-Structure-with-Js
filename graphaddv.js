class Graph {
    constructor() {
      this.vertices = {};
      this.edges = {};
    }
  
    // Add a vertex to the graph
    addVertex(vertexId) {
      this.vertices[vertexId] = {};
    }
  
    // Add an edge to the graph
    addEdge(vertexId1, vertexId2, weight) {
      // If either of the vertices are not in the graph, add them
      if (!this.vertices[vertexId1]) {
        this.addVertex(vertexId1);
      }
  
      if (!this.vertices[vertexId2]) {
        this.addVertex(vertexId2);
      }
  
      // Add the edge from vertex1 to vertex2
      this.vertices[vertexId1][vertexId2] = weight;
    }
  
    // Display the graph
    display() {
      for (let vertexId in this.vertices) {
        let edgesFromVertex = this.vertices[vertexId];
        console.log(`Vertex ${vertexId} has edges to vertices ${Object.keys(edgesFromVertex).join(', ')} with weights ${Object.values(edgesFromVertex).join(', ')}`)
      }
    }
  }
  
  // Create a new graph
  const myGraph = new Graph();
  
  // Add vertices
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  
  // Add edges
  myGraph.addEdge('A', 'B', 3);
  myGraph.addEdge('A', 'C', 5);
  myGraph.addEdge('B', 'C', 8);
  
  // Display graph
  myGraph.display();
