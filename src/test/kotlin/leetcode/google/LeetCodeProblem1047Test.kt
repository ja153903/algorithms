package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem1047Test {
    private val solution: LeetCodeProblem1047 = LeetCodeProblem1047()

    @Test
    fun `Remove All Adjacent Duplicates In String - Case 1`() {
        assertEquals("ca", solution.removeDuplicates("abbaca"))
    }

    @Test
    fun `Remove All Adjacent Duplicates In String - Case 2`() {
        assertEquals("ay", solution.removeDuplicates("azxxzy"))
    }
}