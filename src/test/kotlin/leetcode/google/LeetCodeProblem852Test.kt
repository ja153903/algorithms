package leetcode.google

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class LeetCodeProblem852Test {
    private val solution: LeetCodeProblem852 = LeetCodeProblem852()

    @Test
    fun `Peak Index in a Mountain Array - Case 1`() {
        val test = intArrayOf(0, 1, 0)
        assertEquals(1, solution.peakIndexInMountainArray(test))
    }

    @Test
    fun `Peak Index in a Mountain Array - Case 2`() {
        val test = intArrayOf(0, 2, 1, 0)
        assertEquals(1, solution.peakIndexInMountainArray(test))
    }

    @Test
    fun `Peak Index in a Mountain Array - Case 3`() {
        val test = intArrayOf(0, 10, 5, 2)
        assertEquals(1, solution.peakIndexInMountainArray(test))
    }
}