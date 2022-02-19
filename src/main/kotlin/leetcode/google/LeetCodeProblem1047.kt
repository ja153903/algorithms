package leetcode.google

class LeetCodeProblem1047 {
    fun removeDuplicates(s: String): String {
        val stack = ArrayDeque<Char>()
        for (ch in s) {
            if (stack.isEmpty() || stack.first() != ch) {
                stack.addFirst(ch)
            } else {
                while (stack.isNotEmpty() && stack.first() == ch) {
                    stack.removeFirst()
                }
            }
        }

        val builder = StringBuilder()

        while (stack.isNotEmpty()) {
            builder.append(stack.removeFirst())
        }

        builder.reverse()

        return builder.toString()
    }
}