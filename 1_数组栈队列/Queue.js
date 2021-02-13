// 队列常见操作： 进队，出队，查询队头

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(item) {
        this.items.push(item)
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    toString() {

    }
}
// module.exports = {Queue}\

//应用：击鼓传花
// 利用队列出队入队的特性，把队列假想成一个圆环
// 当同一个元素出队后又入队的时候，圆环就闭合了
function game(nameList, num) {
    const queue = new Queue()
    nameList.forEach(item => queue.enqueue(item))
    let i = 0
    while (queue.size() > 1) {
        // 先出队
        const temp = queue.dequeue()
        i++
        //当i === num 不允许入队，该元素从队列中移除
        if (i === num) {
            i = 0
            continue
        } else {
            queue.enqueue(temp)
        }
    }
    return queue.front()
}
console.log(game(['yyh', 'bbh', 'tth'], 3))