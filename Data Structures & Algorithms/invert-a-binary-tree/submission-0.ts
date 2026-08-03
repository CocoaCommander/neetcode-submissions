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
     * @return {TreeNode}
     */
    invert(node: TreeNode | null): TreeNode {
        if (node === null) {
            return null;
        }
        let temp = this.invert(node.left);
        node.left = this.invert(node.right);
        node.right = temp;
        return node;
    }
    invertTree(root: TreeNode | null): TreeNode {
        return this.invert(root);
    }
}
