package leetcode.google

import org.junit.jupiter.api.Test
import kotlin.test.assertContentEquals

internal class LeetCodeProblem349Test {
    private val solution = LeetCodeProblem349()

    @Test
    fun `Intersection of Two Arrays - Case 1`() {
        val nums1 = intArrayOf(1, 2, 2, 1)
        val nums2 = intArrayOf(2, 2)

        assertContentEquals(intArrayOf(2), solution.intersection(nums1, nums2))
    }
}