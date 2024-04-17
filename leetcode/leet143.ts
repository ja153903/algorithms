import type { ListNode } from "@/data-structures/linked-lists"

function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return
  }

  let prev: ListNode | null = null
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast?.next) {
    prev = slow
    slow = slow?.next ?? null
    fast = fast.next.next
  }

  if (prev?.next) {
    prev.next = null
  }

  prev = null
  let curr: ListNode | null = slow

  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  let a: ListNode | null = head
  let b: ListNode | null = prev

  while (a && b) {
    const next = a.next
    a.next = b
    b = next

    a = a.next
  }
}

export { reorderList }
