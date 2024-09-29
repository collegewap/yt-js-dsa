console.clear()

const LinkedList = require("./linkedListWithTail")

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }
    push(value) {
        this.list.prepend(value)
    }

    pop() {
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


const llStack = new LinkedListStack()


llStack.push(10)
llStack.push(20)
llStack.push(30)
llStack.print()

console.log(llStack.pop())

llStack.print()

console.log(llStack.peek())
