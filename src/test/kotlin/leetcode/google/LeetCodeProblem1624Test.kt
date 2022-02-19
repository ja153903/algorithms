package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem1624Test {
    private val solution = LeetCodeProblem1624()

    @Test
    fun `Largest Substring Between Two Equal Characters - Case 1`() {
        assertEquals(0, solution.maxLengthBetweenEqualCharacters("aa"))
    }

    @Test
    fun `Largest Substring Between Two Equal Characters - Case 2`() {
        assertEquals(2, solution.maxLengthBetweenEqualCharacters("abca"))
    }

    @Test
    fun `Largest Substring Between Two Equal Characters - Case 3`() {
        assertEquals(-1, solution.maxLengthBetweenEqualCharacters("cbzxy"))
    }

    @Test
    fun `Largest Substring Between Two Equal Characters - Case 4`() {
        assertEquals(18, solution.maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"))
    }
}