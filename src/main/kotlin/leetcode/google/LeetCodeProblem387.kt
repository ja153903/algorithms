package leetcode.google

class LeetCodeProblem387 {
    fun firstUniqChar(s: String): Int {
        val seen = mutableMapOf<Char, Int>()

        for (ch in s) {
            seen[ch] = seen.getOrDefault(ch, 0) + 1
        }

        for (i in s.indices) {
            if (seen.containsKey(s[i]) && seen[s[i]] == 1) {
                return i
            }
        }

        return -1
    }
}