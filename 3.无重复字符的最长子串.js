/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    if (s.length === 1) return 1
    let item = ''
    let max = 0
    for (let k of s) {
        if (item.includes(k)) {
            item += k
            // 关键点，发现相同元素的时候，获取第一个相同元素到当前的字符串
            // dvdf  运行到dvd时，获取vd        
            item = item.slice(item.indexOf(k) + 1)
        } else {
            item += k
            max = max > item.length ? max : item.length
        }
    }
    return max
};
// @lc code=end

