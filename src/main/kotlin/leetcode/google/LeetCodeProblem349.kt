package leetcode.google

class LeetCodeProblem349 {
    fun intersection(nums1: IntArray, nums2: IntArray): IntArray {
        return nums1.toSet().intersect(nums2.toSet()).toIntArray()
    }
}