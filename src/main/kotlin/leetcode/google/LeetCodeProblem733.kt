package leetcode.google

class LeetCodeProblem733 {
    private val directions = arrayOf(
        Pair(0, 1), Pair(0, -1), Pair(1, 0), Pair(-1, 0)
    )

    fun floodFill(image: Array<IntArray>, sr: Int, sc: Int, newColor: Int): Array<IntArray> {
        val startingPixel = image[sr][sc]

        if (startingPixel == newColor) {
            return image
        }

        val queue = ArrayDeque<Pair<Int, Int>>()

        queue.add(Pair(sr, sc))

        while (queue.isNotEmpty()) {
            val front = queue.removeFirst()

            image[front.first][front.second] = newColor

            for (direction in directions) {
                val dx = front.first + direction.first
                val dy = front.second + direction.second

                if (dx < 0 || dy < 0 || dx >= image.size || dy >= image[0].size || image[dx][dy] != startingPixel) {
                    continue
                }

                queue.addLast(Pair(dx, dy))
            }
        }

        return image
    }
}