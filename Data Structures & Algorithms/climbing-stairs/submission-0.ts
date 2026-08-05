class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n === 0) {
            return 0;
        }

        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 2;
        }

        let prev: number = 1;
        let curr: number = 2;

        for (let i = 2; i < n; i++) {
            curr = curr + prev;
            prev = curr - prev;
        }

        return curr;
    }
}
