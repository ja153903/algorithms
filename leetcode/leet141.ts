import type { ListNode } from "@/data-structures/linked-lists";

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast?.next) {
    slow = slow?.next ?? null;
    fast = fast.next?.next ?? null;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

export { hasCycle };
