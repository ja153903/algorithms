package leetcode.google

class LeetCodeProblem217 {
    fun containsDuplicate(nums: IntArray): Boolean {
        val contains = mutableSetOf<Int>()

        for (num in nums) {
            if (contains.contains(num)) {
                return true
            }

            contains.add(num)
        }

        return false
    }
}