function maxFrequencyElements(nums: number[]): number {
  const counter = new Map<number, number>()
  nums.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  })

  const maxFrequency = Math.max(...counter.values())

  let res = 0

  for (const value of counter.values()) {
    if (value === maxFrequency) {
      res += value
    }
  }

  return res
}

export { maxFrequencyElements }
