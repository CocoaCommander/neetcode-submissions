class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let numToIdx = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (numToIdx.has(complement)) {
                return [numToIdx.get(complement), i];
            }
            numToIdx.set(nums[i], i);
        }
    }
}
