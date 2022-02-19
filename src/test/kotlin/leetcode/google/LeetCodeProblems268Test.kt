package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblems268Test {
    private val solution = LeetCodeProblems268()

    @Test
    fun `Missing Number - Case 1`() {
        val nums = intArrayOf(3, 0, 1)
        assertEquals(2, solution.missingNumber(nums))
    }

    @Test
    fun `Missing Number - Case 2`() {
        val nums = intArrayOf(0, 1)
        assertEquals(2, solution.missingNumber(nums))
    }

    @Test
    fun `Missing Number - Case 3`() {
        val nums = intArrayOf(9, 6, 4, 2, 3, 5, 7, 0, 1)
        assertEquals(8, solution.missingNumber(nums))
    }
}