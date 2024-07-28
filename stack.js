
class Stack {
    constructor() {
        this.items = []
    }
    isEmpty() {
        return this.items.length === 0
    }
    push(item) {
        this.items = [...this.items, item]
        // or this.items.push(item)

    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
        } else {
            const lastItem = this.items.at(-1)
            this.items = this.items.slice(0, this.items.length - 1)
            // or const lastItem= this.items.pop()
            return lastItem
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
        } else {
            const lastItem = this.items.at(-1)
            return lastItem
        }

    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
        } else {
            for (let i = this.items.length - 1; i >= 0; i--) {
                console.log(this.items[i])

            }
        }
    }
}

const stack = new Stack()

stack.push(1)

stack.push(2)
stack.push(3)
stack.push(4)

stack.print()

console.log("Popped", stack.pop())

stack.print()


console.log("Top of stack is", stack.peek())