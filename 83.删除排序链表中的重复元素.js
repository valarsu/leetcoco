/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
l1.next = new ListNode(1)
l1.next.next = new ListNode(2)
l1.next.next.next = new ListNode(2)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let cur = head
  while(cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  console.log(JSON.stringify(head))
  return head
};

deleteDuplicates(l1)
// @lc code=end

