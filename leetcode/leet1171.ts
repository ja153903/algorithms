import type { ListNode } from "@/data-structures/linked-lists"

// TODO: Figure out a better solution for this problem
function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }

  const stack: ListNode[] = []

  let current: ListNode | null = head
  let sum = 0

  while (current) {
    sum += current.val

    if (sum === 0) {
      while (stack.length > 0) {
        const value = stack.pop()
        sum -= value?.val ?? 0
      }

      sum -= current.val
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].val + current.val === 0
    ) {
      const value = stack.pop()
      sum -= value?.val ?? 0
    } else if (stack.length > 0) {
      // TODO: Shouhld probably flesh out this case where we look back
    } else {
      stack.push(current)
    }

    console.log(stack.map((stk) => stk.val))

    current = current.next
  }

  for (let i = 0; i < stack.length; i += 1) {
    if (i === stack.length - 1) {
      stack[i].next = null
    }

    if (i > 0) {
      stack[i - 1].next = stack[i]
    }
  }

  return stack?.[0] ?? null
}

export { removeZeroSumSublists }
