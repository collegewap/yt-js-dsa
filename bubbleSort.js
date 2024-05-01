console.clear()
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            console.log("pass", i + 1, "curr", j, "next", j + 1)
            console.log(arr)

        }


    }
}
const arr = [10, 5, 7, 13, 1]
bubbleSort(arr)
console.log(arr)

// O(n^2)
