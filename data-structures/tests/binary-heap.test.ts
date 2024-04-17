import { expect, test } from "bun:test"

import { BinaryHeap } from "../binary-heap"

test("BinaryHeap - it should function as a MinHeap", () => {
  const minHeap = new BinaryHeap((a: number, b: number) => a - b)

  minHeap.enqueue(1)
  minHeap.enqueue(2)
  minHeap.enqueue(4)
  minHeap.enqueue(3)

  expect(minHeap.dequeue()).toBe(1)
  expect(minHeap.dequeue()).toBe(2)
  expect(minHeap.dequeue()).toBe(3)
  expect(minHeap.dequeue()).toBe(4)
  expect(minHeap.dequeue()).toBeNull()
})

test("BinaryHeap - it should function as a MinHeap with custom object priority", () => {
  type CustomPriority = { value: number; priority: number }
  const minHeap = new BinaryHeap(
    (a: CustomPriority, b: CustomPriority) => a.priority - b.priority
  )

  minHeap.enqueue({ value: 1, priority: 4 })
  minHeap.enqueue({ value: 2, priority: 3 })
  minHeap.enqueue({ value: 3, priority: 2 })
  minHeap.enqueue({ value: 4, priority: 1 })

  expect(minHeap.dequeue()).toEqual({ value: 4, priority: 1 })
  expect(minHeap.dequeue()).toEqual({ value: 3, priority: 2 })
  expect(minHeap.dequeue()).toEqual({ value: 2, priority: 3 })
  expect(minHeap.dequeue()).toEqual({ value: 1, priority: 4 })
  expect(minHeap.dequeue()).toBeNull()
})

test("BinaryHeap - it should function as a MaxHeap", () => {
  const maxHeap = new BinaryHeap((a: number, b: number) => b - a)

  maxHeap.enqueue(1)
  maxHeap.enqueue(2)
  maxHeap.enqueue(4)
  maxHeap.enqueue(3)

  expect(maxHeap.dequeue()).toBe(4)
  expect(maxHeap.dequeue()).toBe(3)
  expect(maxHeap.dequeue()).toBe(2)
  expect(maxHeap.dequeue()).toBe(1)
  expect(maxHeap.dequeue()).toBeNull()
})

test("BinaryHeap - it should function as a MaxHeap with custom object priority", () => {
  type CustomPriority = { value: number; priority: number }
  const maxHeap = new BinaryHeap(
    (a: CustomPriority, b: CustomPriority) => b.priority - a.priority
  )

  maxHeap.enqueue({ value: 1, priority: 4 })
  maxHeap.enqueue({ value: 2, priority: 3 })
  maxHeap.enqueue({ value: 3, priority: 2 })
  maxHeap.enqueue({ value: 4, priority: 1 })

  expect(maxHeap.dequeue()).toEqual({ value: 1, priority: 4 })
  expect(maxHeap.dequeue()).toEqual({ value: 2, priority: 3 })
  expect(maxHeap.dequeue()).toEqual({ value: 3, priority: 2 })
  expect(maxHeap.dequeue()).toEqual({ value: 4, priority: 1 })
  expect(maxHeap.dequeue()).toBeNull()
})
