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
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
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

    append(value) {
        const node = new Node(value)
        let prev = this.head
        while (prev.next !== null) {
            prev = prev.next
        }
        prev.next = node
        this.size++
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value)
        } else if (index > this.size) {
            console.log("Invalid index")
        }

        else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next

            }

            node.next = prev.next
            prev.next = node

            this.size++
        }
    }

    removeAtIndex(index) {
        if (index === 0) {
            const removedNode = this.head
            this.head = removedNode.next

            // this.head = this.head.next

            this.size--
            return removedNode.value
        } else if (index >= this.size) {
            console.log("Invalid index")
            return null
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next

            }
            const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return removedNode.value
        }
    }

    removeValue(value) {
        if (value === this.head.value) {
            const removedNode = this.head
            this.head = removedNode.next
            this.size--
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        let curr = this.head
        for (let i = 0; i < this.size; i++) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head

        while (curr !== null) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

}

const linkedList = new LinkedList()
console.log("Is Empty", linkedList.isEmpty())

console.log("Size:", linkedList.getSize())

linkedList.prepend(40)

linkedList.print()

linkedList.prepend(30)
linkedList.prepend(20)

linkedList.print()

console.log("Size:", linkedList.getSize())

linkedList.append(50)

linkedList.print()

linkedList.insert(2, 35)

linkedList.print()

linkedList.insert(0, 10)
linkedList.print()

linkedList.insert(10, 10)


linkedList.insert(6, 60)
linkedList.print()


linkedList.removeAtIndex(0)
linkedList.print()

linkedList.removeAtIndex(3)
linkedList.print()

linkedList.removeValue(20)

linkedList.print()


linkedList.removeValue(50)

linkedList.print()

linkedList.removeValue(51)

linkedList.print()

console.log(linkedList.search(50))

console.log(linkedList.search(35))

linkedList.append(70)


linkedList.append(80)

linkedList.print()

linkedList.reverse()
linkedList.print()


