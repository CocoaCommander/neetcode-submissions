class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */

    // eg change([1, 3, 4, 5], amt = 7) = 2
    coinChange(coins: number[], amount: number): number {
        let dp: number[] = new Array(amount + 1).fill(amount + 1);
        dp[0] = 0;
        for (let i = 1; i < amount + 1; i++) {
            for (let j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
                }               
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
