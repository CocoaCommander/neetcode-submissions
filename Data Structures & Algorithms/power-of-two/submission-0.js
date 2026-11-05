class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n) {
        const TWO = 2;
        let val = 1;
        while (val * TWO <= n) {
            val = val * TWO;
        }

        return val === n;
    }
}
