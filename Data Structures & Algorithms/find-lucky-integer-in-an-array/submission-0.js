class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let counts = new Array(500).fill(0);
        let max = -1;
        for (let i = 0; i < arr.length; i++) {
            counts[arr[i]]++;
        }

        for (let j = 1; j < counts.length; j++) {
            if (counts[j] === j) {
                max = Math.max(max, j);
            }
        }

        return max;
    }
}
