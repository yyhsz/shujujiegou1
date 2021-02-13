// 栈的数组实现
// 数组常见操作: 出栈，入栈，查看栈顶元素peek，isEmpty，size

class Stack {
  constructor() {
    this.arr = []
  }
  push(item) {
    this.arr.push(item)
  }
  pop() {
    const res = this.arr[this.arr.length - 1]
    this.arr.pop()
    return res
  }
  peek() {
    return this.arr[this.arr.length - 1]
  }
  isEmpty() {
    return this.arr.length === 0
  }
  size() {
    return this.arr.length
  }
}

//应用：十进制转任意进制
//自己的实现：
function convertion(num, scale = 10) {
  const stack = new Stack()

  let i = num
  for (; i > scale;) {
    stack.push(i % scale)
    i = (i - i % scale) / scale
  }
  stack.push(i)
  let res = ""
  for (let j = stack.size(); j > 0; j--) {
    res += stack.pop()
  }
  return res
}

//更好的实现
function convertion(num, scale = 10) {
  const stack = new Stack()
  while (num > 0) {
    stack.push(num % scale)
    num = Math.floor(num / scale)
  }
  let res = ""
  while (!stack.isEmpty()) {
    res += stack.pop()
  }
  return res
}

console.log(convertion(100, 8))
