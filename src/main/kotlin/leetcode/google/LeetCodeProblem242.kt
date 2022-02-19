package leetcode.google

import utility.CounterUtility

class LeetCodeProblem242 {
    fun isAnagram(s: String, t: String): Boolean {
        val counter = CounterUtility.createCounter(s.toCharArray().toList())

        for (ch in t) {
            if (!counter.containsKey(ch)) {
                return false
            }

            counter[ch] = counter.getOrDefault(ch, 0) - 1
        }

        for (key in counter.keys) {
            if (counter[key] != 0) {
                return false
            }
        }

        return true
    }
}