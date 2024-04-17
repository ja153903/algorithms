import type { ListNode } from "@/data-structures/linked-lists"

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast?.next) {
    slow = slow?.next ?? null
    fast = fast.next?.next ?? null
  }

  return slow
}

export { middleNode }
