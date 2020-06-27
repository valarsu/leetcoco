/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0, j = s.length - 1
  while(i < j && s[i] === s[j]) {
    i++
    j--
  }

  if (isHuiwen(i + 1, j)) {
    return true
  }

  if (isHuiwen(i, j - 1)) {
    return true
  }

  function isHuiwen(l, r) {
    while(l < r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }
  return false
};
// @lc code=end

