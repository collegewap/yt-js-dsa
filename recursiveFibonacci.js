console.clear()

function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
console.log(recursiveFibonacci(5))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(7))

