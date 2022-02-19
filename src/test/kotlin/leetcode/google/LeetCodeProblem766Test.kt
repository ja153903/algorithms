package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem766Test {
    private val solution = LeetCodeProblem766()

    @Test
    fun `Toeplitz Matrix - Case 1`() {
        val matrix = arrayOf(
            intArrayOf(1, 2, 3, 4),
            intArrayOf(5, 1, 2, 3),
            intArrayOf(9, 5, 1, 2)
        )

        assert(solution.isToeplitzMatrix(matrix))
    }

    @Test
    fun `Toeplitz Matrix - Case 2`() {
        val matrix = arrayOf(
            intArrayOf(1, 2),
            intArrayOf(2, 2)
        )

        assertFalse(solution.isToeplitzMatrix(matrix))
    }
}