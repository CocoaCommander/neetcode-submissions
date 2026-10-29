class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let numIslands = 0;

        let bfs = (row, col) => {
            let q = new Queue();
            q.push([row, col]);
            grid[row][col] = '0';
            while (!q.isEmpty()) {
                // n = [row, col]
                let [row, col] = q.pop();
                // for all neighbors of [row, col] where row +- 1 is between 0 and grid.length and col +- 1 is between 0 and grid[row.length, if neighbor is 1, add it to the queue (searchable node), then add node to seen (regardless of 1 or 0 so we can save on exploring nodes already considered)

                // up
                if (row - 1 >= 0 && grid[row - 1][col] === '1') {
                    q.push([row - 1, col]);
                    grid[row - 1][col] = '0';
                }

                // down
                if (row + 1 < grid.length && grid[row + 1][col] === '1') {
                    q.push([row + 1, col]);
                    grid[row + 1][col] = '0';
                }

                // left
                if (col - 1 >= 0 && grid[row][col - 1] === '1') {
                    q.push([row, col - 1]);
                    grid[row][col - 1] = '0';
                }
                
                // right
                if (col + 1 < grid[0].length && grid[row][col + 1] === '1') {
                    q.push([row, col + 1]);
                    grid[row][col + 1] = '0';
                }
            }
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                    bfs(i, j);
                    numIslands++;
                }
            }
        }

        return numIslands;
    }
}
