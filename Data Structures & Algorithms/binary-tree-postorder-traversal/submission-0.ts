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
    postorder(node: TreeNode | null, res: number[]) {
        if (node === null) {
            return;
        }
        this.postorder(node.left, res);
        this.postorder(node.right, res);
        res.push(node.val);
    }

    postorderTraversal(root: TreeNode | null): number[] {
        let res: number[] = [];
        this.postorder(root, res);
        return res;
    }
}
