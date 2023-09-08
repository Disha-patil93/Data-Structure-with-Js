class Graph1 {
    constructor() {
        this.graph = new Map();
    }

    addVertex(name) {
        if(!this.graph.has(name))
            this.graph.set(name, []);
        return;
    }

    addEdge(node1, node2) {
        this.addVertex(node1);
        this.addVertex(node2);
        const data1 = this.graph.get(node1);
        const data2 = this.graph.get(node2);
        data1.push(node2);
        data2.push(node1);
        this.graph.set(node1, data1);
        this.graph.set(node2, data2);
        return;
    }

    removeEdge(node1, node2) {
        if(this.graph.has(node1)) {
            const data1 = this.graph.get(node1);
            for(let i=0; i<data1.length; i++) {
                if(data1[i] === node2) {
                    data1.splice(i, 1);
                    break;
                }
                this.graph.set(node1, data1);
            } 
        }

        if(this.graph.has(node2)) {
            const data2 = this.graph.get(node2);
            for(let i=0; i<data2.length; i++) {
                if(data2[i] === node1) {
                    data2.splice(i, 1);
                    break;
                }
                this.graph.set(node2, data2);
            } 
        }
    }

    removeVertex(node1) {
        if(!this.graph.has(node1))  return;

        const data = this.graph.get(node1);
        for(let i=0; i<data.length; i++) {
            this.removeEdge(data[i], node1);
        }
        this.graph.delete(node1);
        return;
    }
}
let graph = new Graph1();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('A');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'C');
    console.log(graph);
    graph.removeVertex('D');
    console.log("After removing D");
    console.log(graph);
    graph.removeVertex('A');
    console.log("After removing A");
    console.log("After removing A",graph);
