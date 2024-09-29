console.clear()

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    print() {
        let curr = this.head
        const list = []
        while (curr !== null) {
            list.push(curr.value)
            curr = curr.next
        }
        console.log("Linked List: ", list.join(" => "))
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    deleteFromHead() {
        const removedNode = this.head
        if (this.getSize() === 0) {
            return null
        } else if (this.getSize() === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }

        this.size--
        return removedNode.value

    }

    deleteFromTail() {
        const removedNode = this.tail
        if (this.getSize() === 0) {
            return null
        } else if (this.getSize() === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }

        this.size--
        return removedNode.value
    }


}

// const linkedList = new LinkedList()
// console.log("Is Empty", linkedList.isEmpty())

// console.log("Size:", linkedList.getSize())

// linkedList.append(10)

// linkedList.append(20)

// linkedList.print()

// linkedList.prepend(5)

// linkedList.print()

// console.log(linkedList.deleteFromHead())

// linkedList.print()

// console.log(linkedList.deleteFromTail())

// linkedList.print()

module.exports = LinkedList