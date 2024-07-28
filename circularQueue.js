console.clear()

class CircularQueue {
    constructor(size) {
        this.size = size
        this.items = new Array(size)
        this.currentSize = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty() {
        if (this.currentSize === 0) {
            return true
        }
        return false
    }

    isFull() {
        if (this.currentSize === this.size) {
            return true
        }
        return false
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is full")
        } else {
            this.rear = (this.rear + 1) % this.size
            this.items[this.rear] = item
            this.currentSize += 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        const item = this.items[this.front]

        this.items[this.front] = null
        this.front = this.front + 1
        this.currentSize -= 1
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item

    }

    print() {
        const elements = []
        console.log({ rear: this.rear, front: this.front })
        for (let i = this.front; i != this.rear; i = (i + 1) % this.size) {

            const element = this.items[i];
            elements.push(element)

        }
        elements.push(this.items[this.rear])

        console.log("Queue:=>", elements.join(", "))


    }
}

const queue = new CircularQueue(6)

queue.enqueue(10)

queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)

queue.print()

console.log("Dequeued:", queue.dequeue())

console.log("Dequeued:", queue.dequeue())

queue.print()

queue.enqueue(70)
queue.print()
