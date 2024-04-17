function numSubarraysWithSum(nums: number[], goal: number): number {
  let start = 0
  let count = 0
  let res = 0

  for (let end = 0; end < nums.length; end += 1) {
    if (nums[end] === 1) {
      goal -= 1
      count = 0
    }

    while (goal === 0 && start <= end) {
      goal += nums[start]
      start += 1
      count += 1
      if (start > end - goal + 1) {
        break
      }
    }

    while (goal < 0) {
      goal += nums[start]
      start += 1
    }

    res += count
  }

  return res
}

export { numSubarraysWithSum }
