function findDuplicates(nums: number[]): number[] {
  const counter = new Map<number, number>()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }

  return Array.from(counter.entries())
    .filter(([_key, count]) => count === 2)
    .map(([key, _count]) => key)
}

export { findDuplicates }
