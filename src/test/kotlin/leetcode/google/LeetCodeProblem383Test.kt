package leetcode.google

import org.junit.jupiter.api.Test

internal class LeetCodeProblem383Test {
    private val solution = LeetCodeProblem383()

    @Test
    fun `Ransom Note - Case 1`() {
        assert(!solution.canConstruct("a", "b"))
    }

    @Test
    fun `Ransom Note - Case 2`() {
        assert(!solution.canConstruct("aa", "ab"))
    }

    @Test
    fun `Ransom Note - Case 3`() {
        assert(solution.canConstruct("aa", "aab"))
    }
}