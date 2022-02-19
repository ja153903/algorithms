package leetcode.google

class LeetCodeProblem169 {
    fun majorityElement(nums: IntArray): Int {
        val counter = mutableMapOf<Int, Int>()
        for (num in nums) {
            counter[num] = counter.getOrDefault(num, 0) + 1
        }

        var maxKey = 0
        var maxValue = 0

        counter.forEach { (key, value) ->
            if (maxValue < value) {
                maxKey = key
                maxValue = value
            }
        }

        return maxKey
    }
}