console.clear()
function factorial(n) {
    let f = 1
    for (let i = 1; i <= n; i++) {
        f = f * i
    }
    return f
}
console.log(factorial(3))
console.log(factorial(4))

// Complexity O(n)