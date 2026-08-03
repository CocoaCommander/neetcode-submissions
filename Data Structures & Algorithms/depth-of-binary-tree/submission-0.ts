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
     * @return {number}
     */

    traverse(node: TreeNode, depth: number): number {
        if (node === null) {
            return depth;
        }
        depth = depth + 1
        return Math.max(
            this.traverse(node.left, depth),
            this.traverse(node.right, depth)
        );
    }

    maxDepth(root: TreeNode | null): number {
        return this.traverse(root, 0);
    }
}
