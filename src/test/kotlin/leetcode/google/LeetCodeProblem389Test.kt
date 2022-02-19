package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem389Test {
    private val solution = LeetCodeProblem389()

    @Test
    fun `Find the Difference - Case 1`() {
        assertEquals('e', solution.findTheDifference("abcd", "abcde"))
    }
}