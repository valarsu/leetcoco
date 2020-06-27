/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
var reverseBetween = function(head, m, n) {

  const dummy = new ListNode()
  dummy.next = head
  let p = dummy
  for (let i = 0; i< m - 1; i++) {
    p = p.next
  }

  let left = p
  let start = left.next
  let pre = start
  let cur = pre.next
  for (let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  left.next = pre
  start.next = cur
  return dummy.next
};
function reverseListNode(head) {
  let pre = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)
reverseBetween(l1, 2, 4)
// @lc code=end

