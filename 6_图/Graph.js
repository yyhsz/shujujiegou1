class Graph {
  //存储顶点，边
  vertex = []
  edges = {}
  //添加顶点
  addVertex(v) {
    if (!this.vertex.find(v1 => v1 === v)) {
      this.vertex.push(v)
      this.edges[v] = []
    }
  }
  //添加边
  addEdge(v1, v2) {//无向边v1->v2 v2->v1
    if (!this.vertex.find(v => v === v1)) return false //没有该顶点
    this.edges[v1].push(v2)
    // console.log(this.edges)
    this.edges[v2].push(v1)
  }
  //
  toString() {
    Object.keys(this.edges).forEach(v => {
      let str = v + "->"
      this.edges[v].forEach(edge => {
        str += edge + " "
      })
      console.log(str)
    })
  }
  //为了遍历初始化颜色
  initColor() {
    const colors = {}
    this.vertex.forEach(v => { colors[v] = "white" })
    return colors
  }
}
const g = new Graph()
const vertexs = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
vertexs.forEach(v => g.addVertex(v))
// g.addVertex("A")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("A", "D")
g.addEdge("C", "D")
g.addEdge("C", "G")
g.addEdge("D", "G")
g.addEdge("D", "H")
g.addEdge("B", "E")
g.addEdge("B", "F")
g.addEdge("E", "I")

g.toString()
g.initColor()

console.log(g.initColor())
console.log(g)