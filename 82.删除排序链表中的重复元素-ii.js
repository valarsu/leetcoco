/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(3)
l1.next.next.next.next = new ListNode(4)
l1.next.next.next.next.next = new ListNode(4)
l1.next.next.next.next.next.next = new ListNode(5)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  if (!head || !head.next) {return}
  while(cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while (cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  console.log(JSON.stringify(dummy.next))
  return dummy.next
};
deleteDuplicates(l1)
// @lc code=end

 