/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     while(head.next) {
//       if (head.flag) {
//         return head
//       } else {
//         head.flag = true
//         head = head.next
//       }
//     }
//     return false
// };
// 快慢指针
var hasCycle = function(head) {
  if (!head || !head.next) { return false}
  let dummy = new ListNode()
  dummy.next = head
  let fast = slow = dummy
  while (slow != fast) {
    if (!fast || !fast.next)
    fast = fast.next.next
    slow = slow.next
  }
}
// @lc code=end

