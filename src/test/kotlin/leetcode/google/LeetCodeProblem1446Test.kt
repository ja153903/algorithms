package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem1446Test {
    private val solution = LeetCodeProblem1446()

    @Test
    fun `Consecutive Characters - Case 1`() {
        assertEquals(2, solution.maxPower("leetcode"))
    }

    @Test
    fun `Consecutive Characters - Case 2`() {
        assertEquals(5, solution.maxPower("abbcccddddeeeeedcba"))
    }
}