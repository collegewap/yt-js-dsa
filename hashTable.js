console.clear()

class HashTable {
    constructor(length) {
        this.table = new Array(length)
        this.length = length
    }

    hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i)

        }

        return hash % this.length

    }

    set(key, value) {
        const hash = this.hash(key)
        this.table[hash] = value
    }

    get(key) {
        const hash = this.hash(key)
        return this.table[hash]

    }

    remove(key) {
        const hash = this.hash(key)
        this.table[hash] = undefined
    }

    display() {
        console.log("----------------")
        for (let i = 0; i < this.table.length; i++) {
            const element = this.table[i];
            if (element) {
                console.log(i, element)
            }

        }
        console.log("----------------")
    }
}

const fruits = new HashTable(10)

fruits.set("apple", "red")
fruits.set("guava", "green")
fruits.set("lemon", "bright yellow")
fruits.set("melon", "pale orange")
console.log(fruits.get("apple"))

fruits.display()

fruits.remove("apple")


fruits.display()

console.log(fruits.get("lemon"))

