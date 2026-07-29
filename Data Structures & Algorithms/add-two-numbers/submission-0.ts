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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy: ListNode = new ListNode(-1, null);
        let curr: ListNode = dummy;
        let carry: number = 0;

        while (l1 || l2 || carry !== 0) {
            // ie 9 + 1 after [0] has been appended
            if (!l1 && !l2 && carry === 1) {
                curr.next = new ListNode(1, null);
                carry = 0;
            }
           
            // ie 999 + 1 after [0] has been appended
            if (l1 && !l2) {
                let currDigit = l1.val + carry;
                carry = 0;
                if (currDigit >= 10) {
                    carry += 1;
                    currDigit = currDigit % 10;
                }
                curr.next = new ListNode(currDigit, null);
                curr = curr.next;
                l1 = l1.next;
            }
            
            // ie 1 + 999 after [0] has been appended
            if (!l1 && l2) {
                let currDigit = l2.val + carry;
                carry = 0;
                if (currDigit >= 10) {
                    carry += 1;
                    currDigit = currDigit % 10;
                }
                curr.next = new ListNode(currDigit, null);
                curr = curr.next
                l2 = l2.next;
            } 
            
            // ie 9 + 1 *before* [0] has been appended
            if (l1 && l2) {
                let currDigit = l1.val + l2.val + carry;
                carry = 0;
                if (currDigit >= 10) {
                    carry += 1;
                    currDigit = currDigit % 10;
                }
                curr.next = new ListNode(currDigit, null);
                curr = curr.next;
                l1 = l1.next;
                l2 = l2.next;
            }
        }

        return dummy.next;
    }
}
