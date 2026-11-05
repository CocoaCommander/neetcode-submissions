class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        for (let i = 1; i < ROWS; i++) {
            grid[i][0] += grid[i - 1][0]
        }

        for (let j = 1; j < COLS; j++) {
            grid[0][j] += grid[0][j - 1];
        }

        for (let r = 1; r < ROWS; r++) {
            for (let c = 1; c < COLS; c++) {
                grid[r][c] += Math.min(
                    grid[r - 1][c],
                    grid[r][c - 1]
                );
            }
        }

        return grid[ROWS - 1][COLS - 1];
    }
}
