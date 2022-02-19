package leetcode.google

import dataStructures.ListNode

class LeetCodeProblem206 {
    fun reverseList(head: ListNode?): ListNode? {
        var prev: ListNode? = null
        var current = head

        while (current != null) {
            val next: ListNode? = current.next
            current.next = prev
            prev = current
            current = next
        }

        return prev
    }
}