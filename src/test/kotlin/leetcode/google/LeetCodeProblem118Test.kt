package leetcode.google

import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class LeetCodeProblem118Test {
    private val solution = LeetCodeProblem118()

    @Test
    fun `Pascal's Triangle - Case 1`() {
        val expected = listOf(
            listOf(1),
            listOf(1, 1),
            listOf(1, 2, 1),
            listOf(1, 3, 3, 1),
            listOf(1, 4, 6, 4, 1)
        )

        assertContentEquals(expected, solution.generate(5))
    }
}