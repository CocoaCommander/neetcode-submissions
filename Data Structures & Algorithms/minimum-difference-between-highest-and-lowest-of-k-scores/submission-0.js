class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let min = 0;
        let max = k - 1;
        let minDiff = Infinity;

        while (max < nums.length) {
            let currMin = nums[max] - nums[min];
            minDiff = Math.min(minDiff, currMin);
            min++;
            max++;
        }

        return minDiff;
    }
}
