function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    const temp = arr[i]
    //把有序的部分找出可插入的位置
    while (j > 0 && arr[j - 1] > arr[j]) { //不知道比较次数，所以用while循环
      arr[j] = arr[j - 1]
      j--
    }
    //找到位置插入
    arr[j] = temp
  }
}