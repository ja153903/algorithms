function getConcatenation(nums: number[]): number[] {
  const result = new Array<number>(nums.length * 2)

  for (let i = 0; i < nums.length; i += 1) {
    result[i] = nums[i]
    result[i + nums.length] = nums[i]
  }

  return result
}

export { getConcatenation }
