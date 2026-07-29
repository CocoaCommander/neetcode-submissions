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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let tail: ListNode | null = null;
        let curr: ListNode | null = head;

        while (curr) {
            let nextHead: ListNode | null = curr.next;
            curr.next = tail;
            tail = curr;
            curr = nextHead;
        }
        
        return tail;
    }
}
