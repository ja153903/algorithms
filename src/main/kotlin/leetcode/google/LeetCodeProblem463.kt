package leetcode.google

class LeetCodeProblem463 {
    fun islandPerimeter(grid: Array<IntArray>): Int {
        var islands = 0
        var neighbors = 0

        for (i in grid.indices) {
            for (j in grid[i].indices) {
                if (grid[i][j] == 1) {
                    islands++
                    // if we have a neighbor below, we add neighbor
                    if (i < grid.size - 1 && grid[i + 1][j] == 1) {
                        neighbors++
                    }

                    // if we have a neighbor on the right, we add the neighbor
                    if (j < grid[i].size - 1 && grid[i][j + 1] == 1) {
                        neighbors++
                    }
                }
            }
        }

        return islands * 4 - neighbors * 2
    }
}