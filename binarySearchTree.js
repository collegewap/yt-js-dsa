console.clear()

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insertNode(node, root) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(node, root.left)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(node, root.right)

            }
        }
    }

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(node, this.root)
        }
    }

    search(value, root = this.root) {
        if (root === null) {
            return false
        } else {
            if (value < root.value) {
                return this.search(value, root.left)
            } else if (value > root.value) {
                return this.search(value, root.right)

            } else {
                return true
            }
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder() {
        const queue = [this.root]
        while (queue.length !== 0) {
            const node = queue.shift()
            console.log(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    min(root = this.root) {
        if (root.left) {
            return this.min(root.left)
        } else {
            return root.value
        }
    }

    max(root = this.root) {
        if (root.right) {
            return this.max(root.right)
        } else {
            return root.value
        }
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (root.value === value) {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            } else {
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }

        } else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            root.left = this.deleteNode(root.left, value)
        }

        return root


    }

    delete(value) {
        if (this.isEmpty()) {
            return null
        } else {
            this.root = this.deleteNode(this.root, value)
        }
    }



}

const bst = new BST()
console.log(bst.isEmpty())

bst.insert(5)
bst.insert(3)
bst.insert(8)
bst.insert(1)
bst.insert(4)


console.log(bst.search(5))

console.log(bst.search(1))

console.log(bst.search(7))

console.log("===== Pre order ====")
bst.preOrder()
console.log("===== In order ====")
bst.inOrder()

console.log("===== Post order ====")
bst.postOrder()


console.log("===== Level order ====")
bst.levelOrder()

console.log("Min:", bst.min())
console.log("Max:", bst.max())


bst.insert(7)
bst.insert(10)

console.log("===== Level order ====")
bst.levelOrder()

bst.delete(1)
console.log("===== Level order ====")
bst.levelOrder()


bst.delete(5)
console.log("===== Level order ====")
bst.levelOrder()

