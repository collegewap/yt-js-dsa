console.clear()

const numbers = new Set([1,2,3,3,4,5])

numbers.add(6)

numbers.delete(2)
for (const item of numbers) {
    console.log(item)
}

console.log(numbers.has(4))

console.log(numbers.size)

numbers.clear()

console.log(numbers.size)
