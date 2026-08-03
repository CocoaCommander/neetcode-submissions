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
     * @return {boolean}
     */
    validateBST(node: TreeNode, left: number, right: number): boolean {
        if (node === null) {
            return true;
        }
        if (!(left < node.val && node.val < right)) {
            return false
        }
        return this.validateBST(node.left, left, node.val) && this.validateBST(node.right, node.val, right);
    }

    isValidBST(root: TreeNode | null): boolean {
        return this.validateBST(root, -Infinity, Infinity);
    }
}
