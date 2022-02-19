package leetcode.google

class LeetCodeProblem13 {
    private val romanToInt = mapOf(
        'I' to 1,
        'V' to 5,
        'X' to 10,
        'L' to 50,
        'C' to 100,
        'D' to 500,
        'M' to 1000
    )

    fun romanToInt(s: String): Int {
        var result = 0

        for (i in s.length - 1 downTo 0) {
            if (i == s.length - 1) {
                result += romanToInt[s[i]]!!
            } else if(romanToInt[s[i]]!! < romanToInt[s[i + 1]]!!) {
                result -= romanToInt[s[i]]!!
            } else {
                result += romanToInt[s[i]]!!
            }
        }

        return result
    }
}