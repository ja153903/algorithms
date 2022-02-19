package leetcode.google

import dataStructures.TreeNode

class LeetCodeProblem257 {
    fun binaryTreePaths(root: TreeNode?): List<String> {
        val result = mutableListOf<String>()

        if (root == null) {
            return result
        }

        dfs(root, "", result)

        return result
    }

    private fun dfs(root: TreeNode?, s: String, result: MutableList<String>) {
        if (root == null) {
            return
        } else {
            val next = if (s.isNotEmpty()) {
                "$s->${root.`val`}"
            } else {
                "${root.`val`}"
            }

            if (root.left == null && root.right == null) {
                result.add(next)
            } else {
                dfs(root.left, next, result)
                dfs(root.right, next, result)
            }
        }
    }
}