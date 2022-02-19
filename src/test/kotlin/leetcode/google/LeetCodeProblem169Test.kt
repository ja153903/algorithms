package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem169Test {
    private val solution = LeetCodeProblem169()

    @Test
    fun `Majority Element - Case 1`() {
        val nums = intArrayOf(3, 2, 3)
        assertEquals(3, solution.majorityElement(nums))
    }

    @Test
    fun `Majority Element - Case 2`() {
        val nums = intArrayOf(2, 2, 1, 1, 1, 2, 2)
        assertEquals(2, solution.majorityElement(nums))
    }
}