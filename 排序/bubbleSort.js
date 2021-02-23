function bubbleSort(arr, sort = "descend") {
  // if (sort === "descend") { //降序
  //   return arr.reduce((res, cur, i) => {
  //     // console.log(res, "res")
  //     if (res.length === 0) {
  //       res.push(cur)
  //     } else {
  //       res[i - 1] > cur ? res.push(cur) : res.unshift(cur)
  //     }
  //     return res
  //   }, [])
  // } else {
  //   return arr.reduce((res, cur, i) => {
  //     if (res.length === 0) {
  //       res.push(cur)
  //     } else {
  //       res[i - 1] < cur ? res.push(cur) : res.unshift(cur)
  //     }
  //     return res
  //   }, [])
  // }
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      // console.log(arr[i], arr[i + 1])
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i; j < arr.length - 1; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       const temp = arr[j]
  //       arr[j] = arr[j + 1]
  //       arr[j + 1] = temp
  //     }
  //   }
  // }
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < i; j++) {

  //   }
  // }
  return arr
}
console.log(bubbleSort([3, 2, 1, 8, 4, 32, 11], "ascend"))

