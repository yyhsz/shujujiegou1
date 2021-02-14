// 链表常见操作 
// append最后插入  insert指定位置插入  get获取特定位置的项
// indexOf找到元素对应的索引  update修改某个位置的元素 removeAt移除指定位置项
// remove(ele)移除对应元素 isEmpty size
class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  append(ele) {
    const node = new Node(ele)
    if (this.length === 0) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
  }
  insert(pos, ele) { //pos从0开始
    const node = new Node(ele)
    //判断越界
    if (pos < 0 || pos > this.length) return false//此处是this.length,表示允许在链表最后插入
    //
    if (pos === this.length) { //在最后插入
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    } else if (pos === 0) { //在0位置插入
      node.next = this.head
      this.head = node
    } else { //在中间插入
      let temp = pos - 1, preNode = this.head
      while (temp > 0) {  //pos从1开始
        preNode = preNode.next
        temp--
      }
      node.next = preNode.next
      preNode.next = node
    }
    this.length++
    return true
  }
  get(pos) {
    //判断越界
    if (pos < 0 || pos > this.length - 1) return false

    let currentNode = this.head
    while (pos > 0) {
      currentNode = currentNode.next
      pos--
    }
    return currentNode
  }
  indexOf(ele) { //如果链表中没有该元素则返回-1
    let i = 0, currentNode = this.head, hasEle = false
    while (i < this.length) {
      if (currentNode.ele === ele) return i
      currentNode = currentNode.next
      i++
    }
    return -1
  }
  removeAt(pos) {
    //判断越界
    if (pos < 0 || pos > this.length - 1) return false
    //没有被引用的内存会自动回收，所以不用单独处理

    let preNode = this.head
    if (pos === 0) {
      this.head = preNode.next
      preNode.next = null
    } else { //pos从1开始
      pos--
      while (pos > 0) {
        preNode = preNode.next
        pos--
      }
      preNode.next = preNode.next.next
    }
    this.length--
  }
  update(pos, ele) {
    //判断越界
    if (pos < 0 || pos > this.length - 1) return false

    let currentNode = this.head
    while (pos > 0) {
      currentNode = currentNode.next
      pos--
    }
    currentNode.ele = ele

    //更简单的方法
    // this.removeAt(pos)
    // this.insert(pos, ele)
  }
  remove(ele) {
    // let i = 0, currentNode = this.head
    // while (i < this.length - 1) {
    //   if (currentNode.ele === ele) {
    //     this.removeAt(i)
    //     return currentNode
    //   }
    //   currentNode = currentNode.next
    //   i--
    // }
    // return false

    // 更简单的方法
    const i = this.indexOf(ele)
    if (i === -1) {
      return false
    } else {
      this.removeAt(i)
    }
  }
  isEmpty() {
    return this.length === 0
  }



}
const linkedList = new LinkedList()
linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")

linkedList.insert(0, "yyh")
linkedList.update(0, 'bbt')
// linkedList.removeAt(1)
linkedList.remove("bbt")

console.log()
console.log(linkedList)
