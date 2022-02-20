package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem387Test {
    private val solution = LeetCodeProblem387()

    @Test
    fun `First Unique Character in a String - Case 1`() {
        assertEquals(0, solution.firstUniqChar("leetcode"))
    }

    @Test
    fun `First Unique Character in a String - Case 2`() {
        assertEquals(2, solution.firstUniqChar("loveleetcode"))
    }

    @Test
    fun `First Unique Character in a String - Case 3`() {
        assertEquals(-1, solution.firstUniqChar("aabb"))
    }
}