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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let path = [];
        let preOrder = (r) => {
            if (r === null) {
                return;
            }
            path.push(r.val);
            preOrder(r.left);
            preOrder(r.right);
        }
        preOrder(root);
        return path;
    }
}
