/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
let rightMap = {
  '(': ')',
  '[': ']',
  '{': '}'
}
var isValid = function(s) {
  if (s === '') return true
  if (s.length % 2 === 1) return false
  let stack = []
  for (let i of s) {
    console.log(stack)
    if (i === '(' || i === '[' || i === '{') {
      stack.push(rightMap[i])
    } else {
      if (!stack.length || stack.pop() !== i) {
        return false
      }
    }
  }
  return !stack.length
};
isValid('([]{})')
// @lc code=end

