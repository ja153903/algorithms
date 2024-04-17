export type BinaryHeapComparator<T> = (a: T, b: T) => number

export class BinaryHeap<T> {
  private container: T[]
  private readonly comparator: BinaryHeapComparator<T>

  constructor(comparator: BinaryHeapComparator<T>) {
    this.container = []
    this.comparator = comparator
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2
  }

  private swap(left: number, right: number) {
    ;[this.container[left], this.container[right]] = [
      this.container[right],
      this.container[left],
    ]
  }

  private shiftUp(index: number) {
    // NOTE: Suppose that the comparator is (a, b) => a - b
    // Then what we're checking here is that if the parent is
    // larger than the child, then we're swapping them around
    // Since with this comparator, we want a min heap to be
    // in front
    while (
      index > 0 &&
      this.comparator(
        this.container[this.getParentIndex(index)],
        this.container[index]
      ) > 0
    ) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  private shiftDown(index: number) {
    let maxIndex = index

    // NOTE: Suppose that the comparator is (a, b) => a - b
    // Then what we're checking here is if the left child
    // is less than the current priority at the max index, then we want
    // to make sure that we swap them if necessary
    const leftChildIndex = this.getLeftChildIndex(index)
    if (
      leftChildIndex <= this.size - 1 &&
      this.comparator(
        this.container[leftChildIndex],
        this.container[maxIndex]
      ) < 0
    ) {
      maxIndex = leftChildIndex
    }

    // NOTE: Suppose that the comparator is (a, b) => a - b
    // Then what we're checking here is if the right child
    // is less than the current priority at the max index, then we want
    // to make sure that we swap them if necessary
    const rightChildIndex = this.getRightChildIndex(index)
    if (
      rightChildIndex <= this.size - 1 &&
      this.comparator(
        this.container[rightChildIndex],
        this.container[maxIndex]
      ) < 0
    ) {
      maxIndex = rightChildIndex
    }

    if (index !== maxIndex) {
      this.swap(index, maxIndex)
      this.shiftDown(maxIndex)
    }
  }

  enqueue(item: T) {
    this.container.push(item)
    this.shiftUp(this.size - 1)
  }

  dequeue(): T | null {
    if (this.isEmpty) {
      return null
    }

    const result = this.container[0]
    this.container[0] = this.container[this.size - 1]
    this.container.pop()

    this.shiftDown(0)

    return result
  }

  get size(): number {
    return this.container.length
  }

  get isEmpty(): boolean {
    return this.size === 0
  }
}
