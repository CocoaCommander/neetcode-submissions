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

//  class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;

//      constructor(val = 0, left = null, right = null) {
//          this.val = val;
//          this.left = left;
//          this.right = right;
//      }
//  }

class QueueNode {
    next: QueueNode | null;
    prev: QueueNode | null;
    node: TreeNode;

    constructor(node: TreeNode, next: QueueNode | null = null, prev: QueueNode | null = null) {
        this.node = node;
        this.next = next;
        this.prev = prev;
    }
}

class TreeNodeQueue {
    front: QueueNode | null;
    back: QueueNode | null;
    size: number;

    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enq(n: TreeNode | null): void {
        if (n) {
            let node = new QueueNode(n);
            if (this.back) {
                this.back.prev = node;
            } else {
                this.front = node;
            }
            this.back = node;
            this.size++;
        }
    }

    deq(): TreeNode | null {
        if (this.front) {
            let val: TreeNode = this.front.node;
            this.front = this.front.prev;
            if (this.front) {
                this.front.next = null;
            } else {
                this.back = null;
            }
            this.size--;
            return val;
        }      
        return null;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let res: number[][] = [];
        if (!root) {
            return res;
        }
        let q = new TreeNodeQueue();
        q.enq(root);
        
        while (!q.isEmpty()) {
            let level: number[] = [];
            for (let i = q.size; i > 0; i--) {
                let node: TreeNode | null = q.deq();
                if (node !== null) {
                    level.push(node.val);
                    q.enq(node.left);
                    q.enq(node.right);
                }
            }
            if (level.length > 0) {
                res.push(level);
            }
        }
        return res;
    }
}
