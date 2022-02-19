package leetcode.google

class LeetCodeProblem118 {
    fun generate(numRows: Int): List<List<Int>> {
        val result = mutableListOf<MutableList<Int>>()

        for (i in 1..numRows) {
            val row = mutableListOf<Int>()

            if (i <= 2) {
                for (j in 1..i) {
                    row.add(1)
                }
            } else {
                for (j in 1..i) {
                    if (j == 1 || j == i) {
                        row.add(1)
                    } else {
                        row.add(result[i - 2][j - 2] + result[i - 2][j - 1])
                    }
                }
            }

            println(row)

            result.add(row)
        }

        return result
    }
}