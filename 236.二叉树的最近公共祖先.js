/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
var lowestCommonAncestor = function(root, p, q) {
    // 没有根节点，返回null
    if (!root) {
        return null
    }
    // 如果p或q有一个节点是根节点，那么返回root
    if (root.val === p.val || root.val === q.val) {
        return root
    }




    root.left = lowestCommonAncestor(root.left, p, q)
    root.right = lowestCommonAncestor(root.right, p, q)

    // 如果root.left和root.right都可以找到，那么说明结果是当前的root
    // 如果只有root.left可以找到，那么说明root.left
    // 如果只有root.right可以找到，那么说明root.left是结果


    if (root.left && root.right) {
        return root
    } else if (root.left) {
        return root.left
    } else if (root.right) {
        return root.right
    }
    return null
};
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 1))
// @lc code=end

