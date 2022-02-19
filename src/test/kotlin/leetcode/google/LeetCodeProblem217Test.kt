package leetcode.google

import org.junit.jupiter.api.Test

internal class LeetCodeProblem217Test {
    private val solution = LeetCodeProblem217()

    @Test
    fun `Contains Duplicate - Case 1`() {
        val nums = intArrayOf(1, 2, 3, 1)

        assert(solution.containsDuplicate(nums))
    }

    @Test
    fun `Contains Duplicate - Case 2`() {
        val nums = intArrayOf(1, 2, 3, 4)

        assert(!solution.containsDuplicate(nums))
    }

    @Test
    fun `Contains Duplicate - Case 3`() {
        val nums = intArrayOf(1, 1, 1, 3, 3, 4, 3, 2, 4, 2)

        assert(solution.containsDuplicate(nums))
    }
}