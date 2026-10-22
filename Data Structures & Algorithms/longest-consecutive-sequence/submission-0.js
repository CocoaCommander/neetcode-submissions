class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            let startVal = nums[i];
            if (!set.has(startVal - 1)) {
                let seqLen = 1;
                while(set.has(startVal + 1)) {
                    seqLen++;
                    startVal++;
                }
                res = Math.max(res, seqLen);
            }
        }
        return res;
    }
}
