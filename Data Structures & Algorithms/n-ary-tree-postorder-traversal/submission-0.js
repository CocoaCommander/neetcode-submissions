/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        let res = [];

        let traverse = (root) => {
            if (root === null) {
                return;
            }
            for (let i = 0; i < root.children.length; i++) {
                traverse(root.children[i]);
            }
            res.push(root.val);
        }

        traverse(root);

        return res;

    }
}
