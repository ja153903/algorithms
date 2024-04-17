// TODO: Another way to solve this problem is to use
// some sort of rabbit and hare type of algorithm
// where we're hopping along the array and the values
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
