class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numsSet = new Set<number>();
        for (let i = 0; i < nums.length; i++) {
            numsSet.add(nums[i]);
        }

        return numsSet.size !== nums.length;
    }
}
