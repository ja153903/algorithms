package leetcode.google

import kotlin.math.max

class LeetCodeProblem1624 {
    fun maxLengthBetweenEqualCharacters(s: String): Int {
        val seen = mutableMapOf<Char, Int>()
        var maxLen = -1

        for (i in s.indices) {
            if (seen.containsKey(s[i])) {
                val start = seen[s[i]]!! + 1
                maxLen = max(maxLen, i - start)
            } else {
                seen[s[i]] = i
            }
        }

        return maxLen
    }
}