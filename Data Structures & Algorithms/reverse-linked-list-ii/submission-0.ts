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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */

    reverseBetween(
        head: ListNode | null,
        left: number,
        right: number,
    ): ListNode {
        const dummy: ListNode = new ListNode(0, head);
        let curr: ListNode | null = head;
        let prev: ListNode | null = dummy;

        for (let i = 1; i < left; i++) {
            prev = curr;
            curr = curr.next;
        }

        let range: number = right - left;

        let tail: ListNode | null = null;
        for (let j = 0; j < range + 1; j++) {
            let nextHead: ListNode | null = curr.next;
            curr.next = tail;
            tail = curr;
            curr = nextHead;
        }

        prev.next.next = curr;
        prev.next = tail

        return dummy.next;
    }
}
