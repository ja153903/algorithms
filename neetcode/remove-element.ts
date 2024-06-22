function removeElement(nums: number[], val: number): number {
  let idx = 0

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[idx] = nums[i]
      idx += 1
    }
  }

  return idx
}

export { removeElement }
