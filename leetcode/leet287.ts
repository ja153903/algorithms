function findDuplicate(nums: number[]): number {
  const counter = new Map<number, number>()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }

  for (const [key, value] of counter.entries()) {
    if (value > 1) {
      return key
    }
  }

  return 0
}

export { findDuplicate }
