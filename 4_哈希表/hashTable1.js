//链地址法哈希表的实现

/*设计哈希函数：
  1.将字符串转换为数字：hashcode
  2.将大数字的hashcode压缩到一定范围内
*/
function hashFn(str, size) {
  let hashCode = 0
  // 霍纳算法
  for (let i = 0; i < str.length; i++) {
    const uniCode = str.charCodeAt(i)  //获取字符的unicode编码
    //常用的作为幂底数的质数：31，37，41
    hashCode = 37 * hashCode + uniCode
  }
  // console.log(hashCode, "hashCode")
  //取余操作（在java中是与运算）
  return hashCode % size
}
// console.log(hashFn("yyh", 7))

//判断质数
function isPrime(num) {
  const temp = parseInt(Math.sqrt(num))
  for (let i = 2; i < temp; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}



//链地址法
class HashTable {
  LOAD_FACTOR = 0.75
  storage = []
  count = 0 //线性表用length，哈希表用count
  limit = 7 //总大小

  hashFn(str, size) {
    let hashCode = 0
    // 霍纳算法
    for (let i = 0; i < str.length; i++) {
      const uniCode = str.charCodeAt(i)  //获取字符的unicode编码
      //常用的作为幂底数的质数：31，37，41
      hashCode = 37 * hashCode + uniCode
    }
    // console.log(hashCode, "hashCode")
    //取余操作（在java中是与运算）
    return hashCode % size
  }
  //放入/修改元素
  put(key, value) {
    const index = this.hashFn(key, this.limit)
    !this.storage[index] && (this.storage[index] = []) //每一个位置对应一个链表，此处用数组代替
    const bucket = this.storage[index]
    //判断是新增还是修改
    let edited = false
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value  //每一个链表节点存储一个数组或对象：[key,value] || {key,value}
        edited = true
        break
      }
    }
    //是新增
    if (!edited) {
      bucket.push([key, value])
      this.count++
      if (this.count > this.limit * this.LOAD_FACTOR) {
        this.resize(this.getPrime(this.limit + 1, "increase"))
      }
    }

  }
  //获取
  get(key) {
    const index = this.hashFn(key, this.limit)
    const bucket = this.storage[index]
    if (!bucket) { return false }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]
      }
    }
    return false
  }
  //删除
  remove(key) {
    const index = this.hashFn(key, this.limit)
    const bucket = this.storage[index]
    if (!bucket) { return false }
    for (let i = 0; i < bucket.length; i++) {
      let item = bucket[i]
      if (item[0] === key) {
        bucket.splice(i, 1)
        this.count--
        if (this.limit > 7 && this.count < this.count * 0.25) {
          this.resize(Math.floor(this.getPrime(this.limit - 1, "decrease")))
        }
        return item[1]
      }
    }
    return false
  }
  //扩容或缩小
  resize(newLimit) {
    const oldStorage = this.storage
    this.storage = []
    this.count = 0
    console.log(newLimit, "newLimit")
    this.limit = newLimit
    oldStorage.forEach(bucket => {
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          this.put(bucket[i][0], bucket[i][1])
        }
      }
    })
  }
  getPrime(num, type) {
    switch (type) {
      case "decrease":
        while (!isPrime(num)) {
          num--
        }
        break
      default:
        while (!isPrime(num)) {
          num++
        }
    }
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.size()
  }
}


const hashTable = new HashTable()
hashTable.put("age", 18)
hashTable.put("yyh", 20)
hashTable.put("aaa", 20)
hashTable.put("btt", 20)
hashTable.put("ccc", 20)
hashTable.put("dgh", 20)
console.log(hashTable)
hashTable.put("mmm", 20)
hashTable.put("nmk", 20)
hashTable.put("nii", 20)
hashTable.put("oip", 20)


// console.log(hashTable.storage)

console.log(hashTable.get("age"))

