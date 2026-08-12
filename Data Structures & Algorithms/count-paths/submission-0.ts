class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let res: number[][] = [];

        res.push(new Array(n).fill(1));
        for (let i = 1; i < m; i++) {
            let row: number[] = new Array(n).fill(0);
            row[0] = 1;
            res.push(row);
        }

        for (let j = 1; j < m; j++) {
            for (let k = 1; k < n; k++) {
                res[j][k] = res[j - 1][k] + res[j][k - 1];
            }
        }

        return res[m - 1][n - 1];
    }
}
