//深度优先搜索实现
//深度优先搜索
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
  //为了遍历初始化颜色
  initColor() {
    const colors = {}
    this.vertex.forEach(v => { colors[v] = "white" })
    return colors
  }
  // 深度优先
  dfs(initV, handler) { //接收初始化顶点
    if (!initV) return false //没有初始点
    const colors = this.initColor()
    const queue = new Queue()
    //入队的时候置灰
    queue.enqueue(initV)
    colors[initV] = "grey"
    //
    while (!queue.isEmpty()) {
      const v = queue.dequeue()
      this.edges[v].forEach(v1 => {
        if (colors[v1] === "white") { //只有白色才能入队，避免重复入队
          colors[v1] = "grey" && queue.enqueue(v1)
        }
      })
      //访问处理v
      handler(v)
      colors[v] = "black"
    }
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
// g.dfs(g.vertex[0], (v) => { console.log(v) })