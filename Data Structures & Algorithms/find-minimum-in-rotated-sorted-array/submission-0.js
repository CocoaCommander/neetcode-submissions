class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0; 
        let right = nums.length - 1;
        let res = nums[0];
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (nums[left] <= nums[right]) {
                res = Math.min(res, nums[left]);
                break;
            }

            res = Math.min(res, nums[mid]);

            if (nums[mid] >= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}
