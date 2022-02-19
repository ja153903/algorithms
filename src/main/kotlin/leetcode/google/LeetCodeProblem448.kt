package leetcode.google

class LeetCodeProblem448 {
    fun findDisappearedNumbers(nums: IntArray): List<Int> {
        val n = nums.size

        val set = nums.toSet()

        return (1..n)
            .filter { !set.contains(it) }
            .toList()
    }
}