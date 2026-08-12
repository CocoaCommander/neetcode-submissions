class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        let res: number[][] = [[1]];

        for (let i = 0; i < numRows - 1; i++) {
            let paddedRow: number[] = [0, ...res[res.length - 1], 0];
            let rowToBuild: number[] = [];
            for (let j = 0; j < res[res.length - 1].length + 1; j++) {
                rowToBuild.push(paddedRow[j] + paddedRow[j + 1]);
            }
            res.push(rowToBuild);
        }
        return res;
    }
}
