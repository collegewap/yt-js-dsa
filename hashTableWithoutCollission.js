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
        const bucket = this.table[hash]
        if (bucket) {
            const existingIndex = bucket.findIndex(item => item[0] === key)
            if (existingIndex !== -1) {
                bucket[existingIndex][1] = value
            } else {
                this.table[hash].push([key, value])
            }
        } else {
            this.table[hash] = [[key, value]]
        }

    }

    get(key) {
        const hash = this.hash(key)
        const bucket = this.table[hash]

        if (bucket) {
            const existingIndex = bucket.findIndex(item => item[0] === key)
            if (existingIndex !== -1) {
                return bucket[existingIndex][1]
            }

        }
        return undefined

    }

    remove(key) {
        const hash = this.hash(key)
        const bucket = this.table[hash]

        if (bucket) {
            const existingIndex = bucket.findIndex(item => item[0] === key)
            if (existingIndex !== -1) {
                this.table[hash].splice(existingIndex, 1)
            }

        }
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

