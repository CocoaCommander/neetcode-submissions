class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2);
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
        }

        for (let j = nums.length; j < ans.length; j++) {
            ans[j] = nums[j - nums.length];
        }

        return ans;
    }
}
