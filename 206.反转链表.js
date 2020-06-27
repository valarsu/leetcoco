/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = null
  let cur = head
  while (cur) {
    let next = cur.next
    console.log(JSON.stringify(next))
    cur.next = pre
    console.log(JSON.stringify(cur))
    pre = cur
    console.log(JSON.stringify(pre))
    cur = next
    console.log(JSON.stringify(cur))
    console.log(JSON.stringify(pre))
    console.log('======')
  }
};
l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)
reverseList(l1)
// @lc code=end

