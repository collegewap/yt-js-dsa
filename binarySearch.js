console.clear()

function binarySearch(items, num) {
    let low = 0
    let high = items.length - 1
    let mid = Math.floor((low + high) / 2)
    while (low <= high) {
        console.log("low", low, "mid", mid, "high", high, "item", items[mid])
        if (items[mid] === num) {
            return mid
        } else if (num > items[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
        mid = Math.floor((low + high) / 2)
    }
    return -1
}

console.log(
    binarySearch([5, 8, 10, 15, 16, 21, 40, 63], 16)
)