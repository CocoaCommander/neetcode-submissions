class Solution {
    /**
     * @param {number[][]} grid1
     * @param {number[][]} grid2
     * @returns {number}
     */
    countSubIslands(grid1, grid2) {
        let subIsl = 0;
        const ROWS = grid1.length;
        const COLS = grid1[0].length;

        const DIRECTIONS = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        let isOutOfBounds = (r, c) => {
            return (r < 0 || c < 0 || r >= ROWS || c >= COLS);
        }

        let calcSubIsl = (row, col) => {
            let stack = [];
            stack.push([row, col]);
            let isSub = true;

            // mark as seen in grid2
            grid2[row][col] = 0;
            if (grid1[row][col] === 0) {
                isSub = false;
            }

            while(stack.length !== 0) {
                // coord = [row, col]
                let coord = stack.pop();

                for (let i = 0; i < DIRECTIONS.length; i++) {
                    let newRow = coord[0] + DIRECTIONS[i][0];
                    let newCol = coord[1] + DIRECTIONS[i][1];

                    if (isOutOfBounds(newRow, newCol)) {
                        continue;
                    }

                    if (grid2[newRow][newCol] === 1) {
                        grid2[newRow][newCol] = 0;
                        if (grid1[newRow][newCol] === 0) {
                            isSub = false;
                        }
                        stack.push([newRow, newCol]);
                    }
                }
            }

            // Island and subisland fully explored, no discrepancies
            return isSub;
        }


        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid2[r][c] === 1 && calcSubIsl(r, c)) {
                    subIsl++;
                }
            }
        }

        return subIsl;
    }
}