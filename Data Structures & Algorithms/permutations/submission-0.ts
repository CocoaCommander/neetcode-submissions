class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    calcPermutation(depth: number, permutation: number[], res: number[][], nums: number[], pick: boolean[]): void {
        if (depth === nums.length) {
            res.push([...permutation]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!pick[i]) {
                permutation.push(nums[i]);
                pick[i] = true;
                this.calcPermutation(depth + 1, permutation, res, nums, pick);
                permutation.pop();
                pick[i] = false;
            }
        }
    }

    permute(nums: number[]): number[][] {
        let res: number[][] = [];
        let permutation = [];
        this.calcPermutation(0, permutation, res, nums, []);
        return res;
    }
}
