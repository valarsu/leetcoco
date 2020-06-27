/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 排序
  nums = nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let left = i + 1, right = len - 1
    if (i > 0 && nums[i] === nums[i - 1]) { continue }
    while (left < right) {
      let sums = nums[i] + nums[left] + nums[right]
      if (sums === 0) {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while(left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while(left < right && nums[right] === nums[right + 1]) {
          right--
        }
      } else if (sums > 0) {
        right--
        while(left < right && nums[right] === nums[right + 1]) {
          right--
        }
      } else if (sums < 0) {
        left++
        while(left < right && nums[left] === nums[left - 1]) {
          left++
        }
      }
    }

  }
  return res
};
// @lc code=end

