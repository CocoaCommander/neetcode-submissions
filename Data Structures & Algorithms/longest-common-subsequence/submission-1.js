class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const ROWS = text1.length;
        const COLS = text2.length;

        let dp = [];
        // row with +1 for base case, same w cols
        for (let i = 0; i < ROWS + 1; i++) {
            dp[i] = new Array(COLS + 1).fill(0);
        }

        for (let r = ROWS - 1; r >= 0; r--) {
            for (let c = COLS - 1; c >= 0; c--) {
                let right = dp[r][c + 1];
                let down = dp[r + 1][c];
                let diag = dp[r + 1][c + 1];

                if (text1[r] === text2[c]) {
                    // increase lcs len
                    dp[r][c] = diag + 1;
                } else {
                    dp[r][c] = Math.max(right, down);
                }
            }
        }
        return dp[0][0];
    }
}
