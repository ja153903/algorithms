package leetcode.google

import dataStructures.TreeNode

// TODO: Missing unit test because we don't have TreeNode utilities yet
class LeetCodeProblem226 {
    fun invertTree(root: TreeNode?): TreeNode? {
        if (root == null) {
            return null
        }

        val left = invertTree(root.left)
        val right = invertTree(root.right)

        root.left = right
        root.right = left

        return root
    }
}