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
    middleNode(head) {
        let fast = head;
        let mid = head;

        while (fast.next !== null) {
            if (fast.next.next) {
                fast = fast.next.next
            } else {
                fast = fast.next;
            }
            mid = mid.next;
        }

        return mid;
    }
}
