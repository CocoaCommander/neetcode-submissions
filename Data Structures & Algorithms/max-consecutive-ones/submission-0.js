class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxOnes = 0;
        let onesSeqLen = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                onesSeqLen++;
            } else {
                maxOnes = Math.max(maxOnes, onesSeqLen);
                onesSeqLen = 0;
            }
        }

        maxOnes = Math.max(maxOnes, onesSeqLen);

        return maxOnes;
    }
}
