package leetcode.google

import utility.CounterUtility

class LeetCodeProblem383 {
    fun canConstruct(ransomNote: String, magazine: String): Boolean {
        val counter = CounterUtility.createCounter(magazine.toCharArray().toList())

        for (ch in ransomNote) {
            if (!counter.containsKey(ch) || counter.getOrDefault(ch, 0) == 0) {
                return false
            }

            counter[ch] = counter.getOrDefault(ch, 1) - 1
        }

        return true
    }
}