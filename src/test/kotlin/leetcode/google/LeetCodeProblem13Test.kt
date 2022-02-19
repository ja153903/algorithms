package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem13Test {
    private val solution = LeetCodeProblem13()

    @Test
    fun `Roman to Integer - Case 1`() {
        assertEquals(3, solution.romanToInt("III"))
    }

    @Test
    fun `Roman to Integer - Case 2`() {
        assertEquals(58, solution.romanToInt("LVIII"))
    }

    @Test
    fun `Roman to Integer - Case 3`() {
        assertEquals(1994, solution.romanToInt("MCMXCIV"))
    }
}