console.clear()

function printBoard(board) {
    for (const row of board) {
        console.log(JSON.stringify(row))

    }
}
function nQueens(n) {
    const board = Array.from({ length: n }).map(() => {
        return Array.from({ length: n }).fill(0)
    })
    console.log("Empty board")
    printBoard(board)

    const canPlaceQueen = (board, row, column) => {
        // Check if Queen exists in the same row to 
        // the left of current column
        for (let i = 0; i < column; i++) {
            if (board[row][i]) {
                return false
            }

        }

        // Check if Queen exists in the diagonal to the top left
        for (let i = row, j = column; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j]) {
                return false
            }
        }

        // Check if Queen exists in the diagonal to the botton left

        for (let i = row, j = column; i < board.length && j >= 0; i++, j--) {
            if (board[i][j]) {
                return false
            }
        }
        return true
    }

    const placeQeen = (board, column) => {
        if (column >= board.length) {
            return true
        }
        for (let i = 0; i < board.length; i++) {
            if (canPlaceQueen(board, i, column)) {
                board[i][column] = 1
                if (placeQeen(board, column + 1)) {
                    return true
                }
                board[i][column] = 0
            }

        }

        return false;
    }

    if (placeQeen(board, 0)) {
        console.log("Solution")
        printBoard(board)
    } else {
        console.log("No solution exists")
    }

}

nQueens(4)

// O(n!)