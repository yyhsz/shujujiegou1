## 整数反转

错误：无法判断是否溢出

```
var reverse = function(x) {
  let str = (x).toString().includes('-')?(x).toString().slice(1):(x).toString()
  let arr = [...str]
  for(let i = 0;i<str.length-1;i++){
    let x = arr[str.length-2-i]
    arr.splice(str.length-2-i,1)
    arr.push(x)
  }
  if(arr[0] === 0){
    str = arr.splice(0,1)
  }else{
    str = arr.join('')
  }
  if((x).toString().includes('-')){
    return -parseInt(str)
  }else{
    return parseInt(str)
  }
};
```



## 两数相加

![image-20200925183547028](C:\Users\yyh\AppData\Roaming\Typora\typora-user-images\image-20200925183547028.png)

以上是链表定义

```
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(0)
  let temp = res
  let added = 0  //进位符
  while (l1 || l2) {
    let sum = (l1?l1.val : 0)+(l2?l2.val : 0)+added
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    added = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  added && (temp.next = new ListNode(added))//考虑到跳出循环还要进位的情况
  return res.next  //头节点没有值
};
```

## 两数之和

```
function sum(nums, target) {
  let arr = {}
  for(let i=0;i<nums.length;i++){
    let value = target - nums[i]
    if(arr[value]===undefined){
      arr[nums[i]] = i
    }else{
      return [arr[value],i]
    }
  }
}
```



## 最长回文子串

动态规划实现

思路：在一个回文子串的两边有相同的字符这个新字符一定也是回文子串