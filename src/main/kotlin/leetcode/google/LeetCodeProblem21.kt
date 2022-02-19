package leetcode.google

import dataStructures.ListNode

// TODO: Create utility function for ListNode stuff
class LeetCodeProblem21 {
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        if (list1 == null) {
            return list2
        }

        if (list2 == null) {
            return list1
        }

        if (list1.`val` < list2.`val`) {
            list1.next = mergeTwoLists(list1.next, list2)
            return list1
        }

        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}