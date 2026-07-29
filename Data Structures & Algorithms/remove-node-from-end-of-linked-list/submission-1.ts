/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let front: ListNode = head;
        let dummy: ListNode = new ListNode(0, head);
        let prev: ListNode = dummy;

        for (let i = 0; i < n; i++) {
            front = front.next;
        }

        while (front) {
            prev = prev.next;
            front = front.next;
        }

        prev.next = prev.next.next;
        return dummy.next;
    }
}
