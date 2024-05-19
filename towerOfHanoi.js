function towerOfHanoi(n, from, to, using) {
    if (n === 1) {
        console.log(`Move from ${from} to ${to}`)
    }

    if (n === 2) {
        console.log(`Move from ${from} to ${using}`)
        console.log(`Move from ${from} to ${to}`)
        console.log(`Move from ${using} to ${to}`)
    }

    if (n > 2) {
        towerOfHanoi(n - 1, from, using, to)
        towerOfHanoi(1, from, to, using)
        towerOfHanoi(n - 1, using, to, from)
    }
}

towerOfHanoi(2, "A", "C", "B")

// O(2^n)