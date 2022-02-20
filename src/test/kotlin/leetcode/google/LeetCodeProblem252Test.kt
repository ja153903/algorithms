package leetcode.google

import org.junit.jupiter.api.Test

internal class LeetCodeProblem252Test {
    private val solution = LeetCodeProblem252()

    @Test
    fun `Meeting Rooms - Case 1`() {
        val intervals = arrayOf(
            intArrayOf(0, 30),
            intArrayOf(5, 10),
            intArrayOf(15, 20)
        )

        assert(!solution.canAttendMeetings(intervals))
    }

    @Test
    fun `Meeting Rooms - Case 2`() {
        val intervals = arrayOf(
            intArrayOf(7, 10),
            intArrayOf(2, 4),
        )

        assert(solution.canAttendMeetings(intervals))
    }
}