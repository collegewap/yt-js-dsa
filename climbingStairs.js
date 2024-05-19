console.clear()
const ways = {

}

let calls = 0
function climbStairs(n) {
    calls++;
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }

    let nMinusOne, nMinusTwo;

    if (ways[n - 1]) {
        nMinusOne = ways[n - 1]
    } else {
        nMinusOne = climbStairs(n - 1)
        ways[n - 1] = nMinusOne
    }

    if (ways[n - 2]) {
        nMinusTwo = ways[n - 2]
    } else {
        nMinusTwo = climbStairs(n - 2)
        ways[n - 2] = nMinusTwo
    }

    return nMinusOne + nMinusTwo
}

console.log(climbStairs(8))

console.log({ calls })

// 1,1,1 | 1,2 | 2,1

// 1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1, | 2,2

// O(2^n)

// O(n)


function climbStairsIterative(n) {
    const ways = []
    ways[1] = 1
    ways[2] = 2
    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }
    return ways[n]
}

console.log(climbStairsIterative(5))

// O(n)
