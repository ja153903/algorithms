package leetcode.google

class LeetCodeProblems268 {
    fun missingNumber(nums: IntArray): Int {
        val n = nums.size

        val set = nums.toSet()

        for (i in 0..n) {
            if (!set.contains(i)) {
                return i
            }
        }

        return -1
    }
}