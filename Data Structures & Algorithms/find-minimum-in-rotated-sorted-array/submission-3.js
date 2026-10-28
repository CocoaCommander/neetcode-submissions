class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0; 
        let right = nums.length - 1;

        if (nums[left] <= nums[right]) {
            return nums[left];
        } else {
            while (left <= right) {
                let mid = Math.floor((right + left) / 2);

                if (nums[mid - 1] >= nums[mid]) {
                    return nums[mid];
                }

                if (nums[mid] > nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }
}
