package leetcode.google

import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class LeetCodeProblem733Test {
    private val solution = LeetCodeProblem733()

    @Test
    fun `Flood Fill - Case 1`() {
        val image = arrayOf(
            intArrayOf(1, 1, 1),
            intArrayOf(1, 1, 0),
            intArrayOf(1, 0, 1)
        )
        val sr = 1
        val sc = 1
        val newColor = 2

        val expected = arrayOf(
            intArrayOf(2, 2, 2),
            intArrayOf(2, 2, 0),
            intArrayOf(2, 0, 1)
        )

        val result = solution.floodFill(image, sr, sc, newColor)

        for ((r1, r2) in result.zip(expected)) {
            assertContentEquals(r1, r2)
        }
    }
}