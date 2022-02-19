package leetcode.google

import utility.CounterUtility

class LeetCodeProblem389 {
    fun findTheDifference(s: String, t: String): Char {
        val counter = CounterUtility.createCounter(t.toCharArray().toList())

        for (ch in s) {
            counter[ch] = counter.getOrDefault(ch, 1) - 1
        }

        for (key in counter.keys) {
            val value = counter[key]!!
            if (value > 0) {
                return key
            }
        }

        return Char.MAX_VALUE
    }
}