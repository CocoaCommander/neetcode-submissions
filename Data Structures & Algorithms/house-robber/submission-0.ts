class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
          let res: number[] = [];

          if (nums.length === 1) {
            return nums[0];
          }

          if (nums.length === 2) {
            return Math.max(nums[0], nums[1]);
          }

          res.push(nums[0]);
          res.push(Math.max(nums[0], nums[1]));

          for (let i = 2; i < nums.length; i++) {
            res.push(Math.max(nums[i] + res[i - 2], res[i - 1]));
          }

          return res.pop();
    }
}
