package leetcode.google

import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class LeetCodeProblem1636Test {
    private val solution = LeetCodeProblem1636()

    @Test
    fun `Sort Array by Increasing Frequency - Case 1`() {
        val nums = intArrayOf(1, 1, 2, 2, 2, 3)

        assertContentEquals(intArrayOf(3, 1, 1, 2, 2, 2), solution.frequencySort(nums))
    }
}