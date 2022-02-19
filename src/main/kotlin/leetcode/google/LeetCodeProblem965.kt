package leetcode.google

import dataStructures.TreeNode

class LeetCodeProblem965 {
    fun isUnivalTree(root: TreeNode?): Boolean {
        if (root == null) {
            return true
        }

        var result = true

        if (root.left != null) {
            result = root.left?.`val` == root.`val` && isUnivalTree(root.left)
        }

        if (root.right != null) {
            result = result && root.right?.`val` == root.`val` && isUnivalTree(root.right)
        }

        return result
    }
}