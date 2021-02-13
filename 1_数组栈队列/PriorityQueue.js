// 一般 以表示优先级的数字越小 优先级越高
// 需要修改入队操作
class QueueElement {
  constructor(ele, priority) {
    this.ele = ele
    this.priority = priority
  }
}
class PriorityQueue extends Queue {
  constructor() {
    super()
    this.items = []
  }
  enqueue(ele, priority) {
    const qEle = new QueueElement(element, priority)

    let added = false
    if (this.items.length === 0) {
      this.items.push(qEle)
    } else {
      for (let i = 0; i < this.items.length - 1; i++) {
        // 最前面的优先级最高，数字最小
        if (this.items[i].priority > priority) {
          this.items.splice(i, 0, qEle)
          added = true
          break
        }
      }
      !added && this.items.push(qEle)
    }
  }
}
// module.exports = { PriorityQueue }
