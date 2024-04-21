console.clear()
function fibonacci(n) {
    const series = [0, 1]

    for (let index = 2; index < n; index++) {
        series[index] = series[index - 1] + series[index - 2]

    }
    return series

}

console.log(fibonacci(5))
console.log(fibonacci(10))

// O(n)