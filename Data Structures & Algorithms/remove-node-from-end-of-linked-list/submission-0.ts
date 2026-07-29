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
        let remove: ListNode = head;
        let front: ListNode = head;
        let dummy: ListNode = new ListNode(0, head);
        let prev: ListNode = dummy;

        for (let i = 0; i < n; i++) {
            front = front.next;
        }

        while (front) {
            prev = prev.next;
            remove = remove.next;
            front = front.next;
        }

        prev.next = remove.next;
        remove.next = null
        return dummy.next;
    }
}
