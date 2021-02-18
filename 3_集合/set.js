//（基于对象实现）
//集合常用方法 add remove has clear
class Set {
  items = {}


  has(value) {
    return this.items.hasOwnProperty(value)
  }
  add(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }
  remove(value) {
    if (!this.has(value)) return false
    delete this.items[value]
  }
  clear() {
    this.items = {}
  }
  get size() {
    return Object.keys(this.items).length
  }
}
const set1 = new Set()
set1.add(111)
// set1.remove(111)
console.log(set1.has(111))
console.log(set1)

//求并集
function union(set1, set2) {
  const set3 = new Set()
  Object.values(set1.items).forEach(item => {
    set3.add(item)
  })
  Object.values(set2.items).forEach(item => { //add方法已经判断当前item是否已存在于集合中
    set3.add(item)
  })
  return set3
}
//求交集
function intersection(set1, set2) {
  const set3 = new Set()
  Object.values(set1.items).forEach(item => {
    set2.has(item) && set3.add(item)
  })
  return set3
}
//求差集
function difference(set1, set2) {
  const set3 = new Set()
  Object.values(set1.items).forEach(item => {
    !set2.has(item) && set3.add(item)
  })
  return set3
}
//求子集
function isSubSet(set1, set2) {//验证set2是否为set1的子集
  //  const arr  = Object.values(set1.items)
  //  for(let i=0)
  Object.values(set2.items).forEach(item => {
    if (!set1.has(item)) return false
  })
  return true
}