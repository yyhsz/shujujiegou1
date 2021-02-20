class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
//节点内只存一个数字吗？
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    const newNode = new Node(key)
    if (this.root === null) { //空树
      this.root = newNode
    } else { //递归
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (newNode.key > node.key) { //右侧
      node.right === null ? (node.right = newNode) : this.insertNode(node.right, newNode)
    } else { //左侧
      node.left === null ? (node.left = newNode) : this.insertNode(node.left, newNode)
    }
  }
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.key)
      node.left !== null && this.preOrderTraversal(node.left)
      node.right !== null && this.preOrderTraversal(node.right)
    } else {
      return false
    }
    // return node
  }
  inOrderTraversal(node) {
    if (node !== null) {
      // debugger
      node.left !== null && this.inOrderTraversal(node.left)
      console.log(node.key)
      node.right !== null && this.inOrderTraversal(node.right)
    } else {
      return false
    }
  }
  //找最小，搜索二叉树的最小在最左边的节点
  get min() {
    if (this.root === null) return "空树"
    else {
      let node = this.root
      while (node.left !== null) {
        node = node.left
      }
      return node.key
    }
  }
  //找最大，搜索二叉树的最大值在最右侧
  get max() {
    if (this.root === null) return "空树"
    else {
      let node = this.root
      while (node.right !== null) {
        node = node.right
      }
      return node.key
    }
  }
  //在树中查找一个键，如果对应节点存在，则返回true，如果不存在返回false
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else if (key === node.key) {
      return true
    }
    return false
  }

  //不使用递归实现查找,由于是二叉搜索树，实现起来简单
  search2(key) {
    let node = this.root
    //找到就返回，与删除操作中的查找不同
    while (node !== null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return node
      }
    }
    return false
  }
  //删除指定节点
  remove(key) {
    let current = this.root, parent = null, isLeftChild = true
    //找不到才返回，跟查找逻辑不同
    while (current.key !== key) {
      parent = current
      if (key > current.key) {
        isLeftChild = false
        current = current.right
      } else {
        isLeftChild = true
        current = current.left
      }
      if (current === null) return false
    }

    //current是叶子节点
    if (current.right === null && current.left === null) {
      if (current === this.root) {//是根节点
        this.root = null
      } else {
        isLeftChild ? (parent.left = null) : (parent.right = null)
      }
    }
    //current只有一个子节点
    if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      } else {
        isLeftChild ? (parent.left = current.left) : (parent.right = current.left)
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.left
      } else {
        isLeftChild ? (parent.left = current.right) : (parent.right = current.right)
      }
    }
    //current有两个子节点
    else {
      let successor = this.getSuccessor(current)
      if (this.root === current) {
        this.root = successor
      } else {
        isLeftChild ? (parent.left = successor) : (parent.right = successor)
      }
      successor.left = current.left
      successor.right = current.right
    }
    return true
  }
  //找到后继:右子树中最小的那个
  getSuccessor(delNode) {
    let successorParent = delNode, successor = delNode.right
    while (successor.left !== null) {
      successorParent = successor
      successor = successor.left
    }
    if (successor.right !== null) { //后继节点左侧不可能有节点，但右侧可能有
      successorParent.left = successor.right
    }
    return successor
  }
  //找到前驱
}





const bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(15)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(19)


bst.remove(15)

bst.preOrderTraversal(bst.root)
console.log(bst)

// bst.inOrderTraversal(bst.root)

// console.log(bst.min)

// console.log(bst.max)
// console.log(bst.search2(12))