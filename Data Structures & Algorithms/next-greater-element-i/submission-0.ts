class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let res = new Array(nums1.length).fill(-1);
        let map = new Map<number, number>(nums1.map((num, i) => [num, i]));
        let stack = new Array<number>();

        for (let i = 0; i < nums2.length; i++) {
            let val = nums2[i];
            while (stack.length > 0 && val > stack[stack.length - 1]) {
                let stackVal = stack.pop();
                let resIdx = map.get(stackVal);
                res[resIdx] = val;
            }
            if (map.has(val)) {
                stack.push(val);
            }        
        }

        return res;
    }
}
