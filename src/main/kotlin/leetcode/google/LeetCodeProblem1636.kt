package leetcode.google

class LeetCodeProblem1636 {
    fun frequencySort(nums: IntArray): IntArray {
        val counter = mutableMapOf<Int, Int>()
        val valuesByFrequency = mutableMapOf<Int, MutableList<Int>>()

        for (num in nums) {
            counter[num] = counter.getOrDefault(num, 0) + 1
        }

        for (num in nums) {
            val freq = counter[num]!!
            if (valuesByFrequency.containsKey(freq)) {
                valuesByFrequency[freq]?.add(num)
            } else {
                valuesByFrequency[freq] = mutableListOf(num)
            }
        }

        val result = mutableListOf<Int>()

        for (freq in 1..100) {
            if (valuesByFrequency.containsKey(freq)) {
                val values = valuesByFrequency[freq]
                values?.sortDescending()
                result.addAll(values!!)
            }
        }

        return result.toIntArray()
    }
}