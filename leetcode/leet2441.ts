function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const negative = new Set<number>()
  let largest = 0

  for (const num of nums) {
    if (num < 0) {
      negative.add(num)
    }

    if (negative.has(-num)) {
      largest = Math.max(largest, num)
    }
  }

  return largest === 0 ? -1 : largest
}

export { findMaxK }
