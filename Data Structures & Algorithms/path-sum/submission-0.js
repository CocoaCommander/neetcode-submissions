/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        let testSum = (r, currSum) => {

            if (!r) return false;
            currSum += r.val
            if (!r.left && !r.right) {
                return currSum === targetSum;
            }

            return testSum(r.left, currSum) || testSum(r.right, currSum);
        };
        
        return testSum(root, 0)
    }
}
