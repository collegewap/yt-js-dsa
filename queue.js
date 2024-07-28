class Queue {
    constructor() {
        this.items = []
        this.rear = 0
        this.front = 0
    }

    isEmpty() {
        return this.front === this.rear;
    }

    enqueue(item) {
        this.items.push(item)
        this.rear++
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item

        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            const item = this.items[this.front]
            return item

        }

    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            const contents = []
            let index = this.front;
            while (index < this.rear) {
                contents.push(this.items[index])
                index++
            }
            console.log(contents)
        }
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()

console.log(queue.dequeue())

console.log(queue.peek())

queue.print()
