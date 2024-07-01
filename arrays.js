console.clear()

const arr = [1, 2, 3, 4, "hello"]


arr.push(5)

const removed = arr.pop()

console.log({ removed })

arr.unshift(0)

const shifted = arr.shift()

console.log({ shifted })

for (const item of arr) {
    console.log(item)
}

const slicedArray = arr.slice(1, 3)

console.log({ arr, slicedArray })


const spliced = arr.splice(2, 3, 6)

console.log({ arr, spliced })

console.clear()

const arr2 = [1, 2, 3, 4, 5]

arr2.forEach((item) => {
    console.log({ item })

})

for (const item of arr2) {
    console.log({ item })
    if (item === 2) {
        break;
    }

}


const result = arr2.map(item => {
    return item + 1
})

console.log({ result })

const filtered = arr2.filter(item => {
    if (item % 2 !== 0) {
        return true;
    } else {
        return false
    }
})

console.log({ filtered })

const sum = arr2.reduce((prev, curr) => {
    return prev + curr
}, 0)

console.log({ sum, arr2 })

const item = arr2.find(item => {
    console.log({item})
    return item === 3 })

console.log({ item })

const itemIndex = arr2.findIndex(item => {
    console.log({item})
    return item === 3 })

console.log({ itemIndex })


console.clear()

const arr3 = [1, 2, 3, 4, 5]

console.log(arr3.at(-5),arr3[-1])




