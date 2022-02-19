package leetcode.google

class LeetCodeProblem766 {
    fun isToeplitzMatrix(matrix: Array<IntArray>): Boolean {
        for (i in matrix[0].indices) {
            var col = i
            var row = 0

            val elem = matrix[row][col]

            while (col < matrix[0].size && row < matrix.size) {
                if (matrix[row][col] != elem) {
                   return false
                }

                row++
                col++
            }
        }

        for (i in 1 until matrix.size) {
            var row = i
            var col = 0

            val elem = matrix[row][col]

            while (row < matrix.size && col < matrix[row].size) {
                if (matrix[row][col] != elem) {
                    return false
                }

                row++
                col++
            }
        }

        return true
    }
}