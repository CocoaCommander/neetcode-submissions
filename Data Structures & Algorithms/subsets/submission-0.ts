class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    recurseSubsets(iterations: number, stop: number, res: number[][], subset: number[], nums: number[]): void {
        if (iterations >= stop) {
            res.push([...subset]);
            return;
        }
        
        // add current num to subset
        subset.push(nums[iterations])        
        this.recurseSubsets(iterations + 1, stop, res, subset, nums);

        // don't add current num to subset
        subset.pop();
        this.recurseSubsets(iterations + 1, stop, res, subset, nums);
    }

    subsets(nums: number[]): number[][] {
        let res: number[][] = [];
        let subset: number[] = [];
        let iterations: number = 0;
        let stop = nums.length;

        this.recurseSubsets(iterations, stop, res, subset, nums);
        return res;
    }
}
