class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let currSum = nums[0];
        let maxSum = 0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[i - 1]) {
                maxSum = Math.max(currSum, maxSum);
                currSum = nums[i];
            } else {
                currSum += nums[i];
            }
        }

        return Math.max(currSum, maxSum);
    }
}
