/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let arr = []
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         let len = j - i
    //         let hei = Math.min(height[i], height[j])
    //         let size = len * hei
    //         if (size > arr[0]) {
    //             arr.unshift(size)
    //         } else {
    //             arr.push(size)
    //         }
    //     }
    // }
    // return arr[0]
    // 双指针法
    let i = 0;
    let j = height.length - 1;
    let size = 0;
    let max = 0;
    while (j - i >= 1) {
        if (height[i] > height[j]) {
            size = height[j] * (j - i)
            j--
        } else {
            size = height[i] * (j - i)
            i++
        }
        max = Math.max(size, max)
    }
    return max
};
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end

