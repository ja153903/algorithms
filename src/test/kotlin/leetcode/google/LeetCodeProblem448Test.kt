package leetcode.google

import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class LeetCodeProblem448Test {
    private val solution = LeetCodeProblem448()

    @Test
    fun `Find All Numbers Disappeared in an Array - Case 1`() {
        val nums = intArrayOf(4, 3, 2, 7, 8, 2, 3, 1)
        val expected = listOf(5, 6)

        assertContentEquals(expected, solution.findDisappearedNumbers(nums))
    }

    @Test
    fun `Find All Numbers Disappeared in an Array - Case 2`() {
        val nums = intArrayOf(1, 1)
        val expected = listOf(2)

        assertContentEquals(expected, solution.findDisappearedNumbers(nums))
    }
}