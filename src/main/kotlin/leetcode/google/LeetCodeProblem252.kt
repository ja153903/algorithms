package leetcode.google

class LeetCodeProblem252 {
    fun canAttendMeetings(intervals: Array<IntArray>): Boolean {
        if (intervals.isEmpty()) {
            return true
        }

        // a person can attend all meetings if there is no overlap
        // what we can do here is sort the intervals and see if there exists
        // any overlap
        intervals.sortWith(compareBy({it[0]}, {it[1]}))

        val stack = mutableListOf<IntArray>()

        for (interval in intervals) {
            if (stack.isEmpty()) {
                stack.add(interval)
            } else {
                // check top of stack to see if we can merge
                // if we can merge then return false
                val top = stack.last()
                if (top[1] > interval[0]) {
                    // this means we can merge the interval
                    return false
                }

                stack.add(interval)
            }
        }

        return true
    }
}