class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;
        let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

        // init dp arr
        for (let i = 0; i <= word1.length; i++) {
            dp[i][0] = i;
        }

        for (let j = 1; j <= word2.length; j++) {
            dp[0][j] = j;
        }

        for (let row = 1; row <= word1.length; row++) {
            for (let col = 1; col <= word2.length; col++) {

                if (word1.charAt(row - 1) === word2.charAt(col - 1)) {
                    dp[row][col] = dp[row - 1][col - 1];
                } else {
                    let del = dp[row - 1][col];
                    let insert = dp[row][col - 1];
                    let replace = dp[row - 1][col - 1];
                    dp[row][col] = 1 + Math.min(del, insert, replace);
                }
            }
        }

        return dp[word1.length][word2.length];
    }
}
