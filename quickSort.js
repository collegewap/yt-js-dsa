console.clear()

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivot = arr.at(-1)
    const left = []
    const right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }

    }
    console.log("left", left, "pivot", pivot, "right", right)

    const sortedLeft = quickSort(left)
    const sortedRight = quickSort(right)
    return [...sortedLeft, pivot, ...sortedRight]

}

const arr = [8, 4, 3, 1, 6, 7, 11, 9, 2, 10, 5]

console.log(quickSort(arr))

// Best/Avg O(n logn)
// Worst O(n^2)