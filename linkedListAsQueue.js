console.clear()

const LinkedList = require("./linkedListWithTail")

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }
    dequeue() {
        return this.list.deleteFromHead()
    }

    peek() {
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const llQueue = new LinkedListQueue()
llQueue.enqueue(10)
llQueue.enqueue(20)
llQueue.enqueue(30)

llQueue.print()

console.log(llQueue.dequeue())

llQueue.print()

console.log(llQueue.peek())
