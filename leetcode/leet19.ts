import type { ListNode } from "@/data-structures/linked-lists";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // how do we reason about finding the nth node
  // we can have two pointers
  // the first pointer will move n elements
  // the second pointer stays for now
  // once we've moved the pointer n elements,
  // we can then move the slow pointer and the fast pointer until the fast pointer reaches the end
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

  if (!prev) {
    return head?.next ?? null;
  }

  prev.next = slow?.next ?? null;

  return head;
}

export { removeNthFromEnd };
