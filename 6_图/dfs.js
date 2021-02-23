//深度优先搜索实现
//深度优先搜索类似于树的先序遍历
class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    this.items.push(item)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {

  }
}
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
  //为了遍历,初始化状态
  initState() {
    const colors = {}
    this.vertex.forEach(v => { colors[v] = false })
    return colors
  }
  // 深度优先,递归实现
  dfs(v, state, handler) { //接收初始化顶点
    if (!v) return false //没有初始点
    // const state = this.initColor()
    state[v] = true
    handler(v)
    this.edges[v].forEach(v1 => {
      if (state[v1] === false) {
        this.dfs(v1, state, handler)
      }
    })
  }
}
const g = new Graph()
const vertexs = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
vertexs.forEach(v => g.addVertex(v))

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
g.dfs(g.vertex[0], g.initState(), (v) => { console.log(v) })