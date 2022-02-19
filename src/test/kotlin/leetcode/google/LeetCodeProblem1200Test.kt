package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem1200Test {
    private val solution: LeetCodeProblem1200 = LeetCodeProblem1200()

    @Test
    fun `Minimum Absolute Difference - Case 1`() {
        val arr = intArrayOf(4, 2, 1, 3)
        val expected = listOf(listOf(1, 2), listOf(2, 3), listOf(3, 4))

        assertEquals(expected, solution.minimumAbsDifference(arr))
    }

    @Test
    fun `Minimum Absolute Difference - Case 2`() {
        val arr = intArrayOf(1, 3, 6, 10, 15)
        val expected = listOf(listOf(1, 3))

        assertEquals(expected, solution.minimumAbsDifference(arr))
    }

    @Test
    fun `Minimum Absolute Difference - Case 3`() {
        val arr = intArrayOf(3, 8, -10, 23, 19, -4, -14, 27)
        val expected = listOf(listOf(-14, -10), listOf(19, 23), listOf(23, 27))

        assertEquals(expected, solution.minimumAbsDifference(arr))
    }
}