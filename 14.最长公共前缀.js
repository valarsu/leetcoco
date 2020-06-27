/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    let res = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let item = strs[i]
        if (!item) { res = ''; break; }
        // 先将字符串抠成最小长度
        res = res.substring(0, item.length)
        for (let j = 0; j < item.length && j < res.length; j++) {
            if (res[j] !== item[j]) {
                // 不相等的时候，说明该结束了
                res = res.substring(0, j)
                break
            }
        }
    }
    return res
};

// var longestCommonPrefix2 = function (strs) {
//     if (!strs.length) return ''
//     let res = ''
//     let [a, ...q] = strs
//     for (let i = 0; i < a.length; i++) {
//         let flag = q.every(ele => ele[i] === a[i])
//         if (flag) {
//             res += a[i]
//         } else {
//             break
//         }
//     }
//     return res
// }

// console.log(longestCommonPreFixBest(["flower","flow","flight"]))
// @lc code=end

