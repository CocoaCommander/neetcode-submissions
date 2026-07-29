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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        let dummy: ListNode = new ListNode(null, null);
        if (lists.length === 0) {
            return null;
        }

        if (lists.length === 1) {
            return lists[0];
        }

        for (let i = 1; i < lists.length; i++) {
            let list1 = lists[i - 1];
            let list2 = lists[i];
            let newList: ListNode = this.mergeTwoLists(list1, list2);
            lists[i] = newList;
            dummy.next = newList
        }

        return dummy.next;
    }

    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy: ListNode = new ListNode(-1, null);
        let curr: ListNode = dummy;

        while (list1 || list2) {
            if (!list1 && list2) {
                curr.next = list2;
                list2 = null;
            } else if (list1 && !list2) {
                curr.next = list1
                list1 = null;
            } else if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2
                list2 = list2.next;
            }

            curr = curr.next;
        }

        return dummy.next;
    }
}
