class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length);
        let suffix = new Array(nums.length);
        let res = new Array(nums.length);
        // calc prefix arr [1,2,4,6] -> [1,2,8,48]
        prefix[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i] * prefix[i - 1];
        }

        // calc suffix arr [1,2,4,6] -> [48,48,24,6]
        suffix[nums.length - 1] = nums[nums.length - 1];
        for (let j = nums.length - 2; j >= 0; j--) {
            suffix[j] = nums[j] * suffix[j + 1];
        }
        res[0] = suffix[1];
        for (let k = 1; k < nums.length - 1; k++) {
            res[k] = prefix[k - 1] * suffix[k + 1];
        }
        res[nums.length - 1] = prefix[nums.length - 2];
        return res;
    }
}
