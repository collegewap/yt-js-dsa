console.clear()

function mergeSort(arr) {
    if (arr.length <= 1) {
        // console.log(arr)
        return arr
    }
    const mid = Math.floor(arr.length / 2)

    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))



    const returnArray = []

    while (left.length !== 0 && right.length !== 0) {
        if (left[0] < right[0]) {
            returnArray.push(left.shift())
        } else {
            returnArray.push(right.shift())
        }
    }

    if (left.length > 0) {
        returnArray.push(...left)
    } else {
        returnArray.push(...right)

    }
    console.log(returnArray)
    return returnArray
}

const arr = [8, 4, 3, 1, 6, 7, 2, 5]
console.log(mergeSort(arr))

// O(n logn)