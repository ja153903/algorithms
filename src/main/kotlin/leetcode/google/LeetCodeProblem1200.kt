package leetcode.google

import java.lang.Integer.min

class LeetCodeProblem1200 {
    fun minimumAbsDifference(arr: IntArray): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
        arr.sort()

        var minDiff = Int.MAX_VALUE

        for (i in 1 until arr.size) {
            minDiff = min(minDiff, arr[i] - arr[i - 1])
        }

        for (i in 1 until arr.size) {
            if (arr[i] - arr[i - 1] == minDiff) {
                result.add(listOf(arr[i - 1], arr[i]))
            }
        }

        return result
    }
}