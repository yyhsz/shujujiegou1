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
    // if (pos < 0 || pos > this.length - 1) return false

    // let currentNode = this.head
    // while (pos > 0) {
    //   currentNode = currentNode.next
    //   pos--
    // }
    // currentNode.ele = ele

    //更简单的方法
    const res = this.removeAt(pos)
    this.insert(pos, ele)
    return res
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


class DoublyNode extends Node {
  constructor(ele) {
    super(ele)
    this.pre = null
  }

}

//双向链表常用方法与单向链表相同，部分方法需要重写
class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }
  append(ele) {
    const node = new DoublyNode(ele)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.pre = this.tail
      this.tail = node
    }
    this.length++
  }
  insert(pos, ele) {
    //越界判断
    if (pos < 0 || pos > this.length) return false

    const node = new DoublyNode(ele)
    //由于tail节点的存在，考虑的情况跟单向链表有所不同
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else if (pos === 0) {
      node.next = this.head
      this.head.pre = node
      this.head = node
    } else if (pos === this.length) {
      node.pre = this.tail
      this.tail.next = node
      this.tail = node
    } else {
      let currentNode = this.head, i = 0
      while (i < pos) {
        currentNode = currentNode.next
        i++
      }
      //先让新节点链接两个旧节点,再断开旧节点
      node.next = currentNode
      node.pre = currentNode.pre
      currentNode.pre.next = node
      currentNode.pre = node
    }
    this.length++
  }
  removeAt(pos) {
    //越界判断
    if (pos < 0 || pos > this.length - 1) return false

    let currentNode = this.head
    if (this.length === 1) { //length===1，pos一定为0
      this.head = null
      this.tail = null
    } else if (pos === 0) {
      this.head = this.head.next
      this.head.pre = null
    } else if (pos === this.length - 1) {
      currentNode = this.tail
      this.tail = this.tail.pre
      this.tail.next = null
    } else {
      let i = 0
      while (i < pos) {
        currentNode = currentNode.next
        console.log(currentNode, "currentNode")
        i++
        console.log(i)
      }
      currentNode.next.pre = currentNode.pre
      currentNode.pre.next = currentNode.next
    }
    this.length--
    return currentNode
  }
}

const dbLinkedList = new DoublyLinkedList()

dbLinkedList.append("aaa")
dbLinkedList.append("bbb")
dbLinkedList.append("ccc")

dbLinkedList.insert(0, "yyh")
dbLinkedList.insert(3, "bgt")

// dbLinkedList.removeAt(3)
dbLinkedList.remove("yyh")
console.log(dbLinkedList)