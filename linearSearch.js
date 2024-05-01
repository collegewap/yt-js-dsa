console.clear()

function linearSearch(items, num) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === num) {
            return i
        }

    }
    return -1;
}

console.log(linearSearch([2, 4, 7, 5, 1], 9))

// O(n)