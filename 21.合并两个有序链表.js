/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    let head = new ListNode()
    let cur = head
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 !== null ? l1 : l2
    return head.next
};

// let l1 = new ListNode(1)
// l1.next = new ListNode(2)
// l1.next.next = new ListNode(4)
// let l2 = new ListNode(1)
// l2.next = new ListNode(3)
// l2.next.next = new ListNode(4)

// mergeTwoLists(l1, l2)
// mergeTwoLists([1,2,4], [1,3,4])
// @lc code=end

