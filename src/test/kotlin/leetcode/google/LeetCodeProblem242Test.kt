package leetcode.google

import org.junit.jupiter.api.Test

internal class LeetCodeProblem242Test {
    private val solution = LeetCodeProblem242()

    @Test
    fun `Valid Anagram - Case 1`() {
        assert(solution.isAnagram("anagram", "nagaram"))
    }

    @Test
    fun `Valid Anagram - Case 2`() {
        assert(!solution.isAnagram("rat", "car"))
    }
}