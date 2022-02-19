package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem463Test {
    private val solution: LeetCodeProblem463 = LeetCodeProblem463()

    @Test
    fun testIslandPerimeter() {
        val grid = arrayOf(
            intArrayOf(0, 1, 0, 0),
            intArrayOf(1, 1, 1, 0),
            intArrayOf(0, 1, 0, 0),
            intArrayOf(1, 1, 0, 0)
        )

        assertEquals(16, solution.islandPerimeter(grid))
    }
}