function sortedSquares(nums: number[]): number[] {
  const result: number[] = new Array(nums.length)
  let left = 0,
    right = nums.length - 1
  let index = result.length - 1

  while (left <= right) {
    const leftSq = nums[left] * nums[left]
    const rightSq = nums[right] * nums[right]

    if (leftSq > rightSq) {
      result[index] = leftSq
      left += 1
    } else {
      result[index] = rightSq
      right -= 1
    }

    index -= 1
  }

  return result
}

export { sortedSquares }
