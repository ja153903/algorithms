import type { ListNode } from "@/data-structures/linked-lists";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let prev: ListNode | null = null;

  for (let i = 0; i < n - 1; i += 1) {
    fast = fast?.next ?? null;
  }

  while (fast?.next) {
    prev = slow;
    slow = slow?.next ?? null;
    fast = fast?.next ?? null;
  }

  // NOTE: If no previous value is set, this means that
  // we need to remove the head of the list
  if (!prev) {
    return head?.next ?? null;
  }

  prev.next = slow?.next ?? null;

  return head;
}

export { removeNthFromEnd };
