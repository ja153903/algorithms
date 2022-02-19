package leetcode.google

import kotlin.math.max

class LeetCodeProblem1446 {
    fun maxPower(s: String): Int {
        var maxP = 1
        var current = 1

        for (i in 1 until s.length) {
            if (s[i - 1] == s[i]) {
                current++
                maxP = max(maxP, current)
            } else {
                current = 1
            }
        }

        return maxP
    }
}