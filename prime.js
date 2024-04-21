console.clear()

function isPrime(n) {
    // 2 to n-1

    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false
        }

    }
    return true
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(7))
console.log(Math.sqrt(48))

// O(n)

// product = a*b  

// 48 = 8*6
