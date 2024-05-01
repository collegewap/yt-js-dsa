console.clear()

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        const curr = arr[j]
        while (curr < arr[j - 1] && j > 0) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = curr
        console.log(arr)

    }
}

const arr = [10, 5, 7, 13, 1]
insertionSort(arr)
console.log(arr)

// O(n^2)