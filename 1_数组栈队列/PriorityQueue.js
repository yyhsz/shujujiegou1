class QueueElement {
  constructor(ele, priority) {
    this.ele = ele
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.items = []
  }
  enqueue(ele, priority) {
    new QueueElement(ele, priority)
    let added = false
    if (this.items.length === 0) {
      this.items.push(new QueueElement(ele, priority))
    } else {
      for (let i = 0; i < this.items.length - 1; i++) {
        if (this.items[i].priority > priority) {
          this.items.splice(i, 0, new QueueElement(ele, priority))
          added = true
          break
        }
      }
      !added && this.items.push(new QueueElement(ele, priority))
    }
  }
}
module.exports = { PriorityQueue }