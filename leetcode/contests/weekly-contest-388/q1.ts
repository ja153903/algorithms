function minimumBoxes(apple: number[], capacity: number[]): number {
  capacity.sort((a, b) => b - a)

  const appleSum = apple.reduce((a, b) => a + b)

  const prefixSum: number[] = []

  for (let i = 0; i < capacity.length; i += 1) {
    if (i === 0) {
      prefixSum.push(capacity[i])
    } else {
      prefixSum.push(prefixSum[prefixSum.length - 1] + capacity[i])
    }
  }

  for (let i = 0; i < prefixSum.length; i += 1) {
    if (prefixSum[i] >= appleSum) {
      return i + 1
    }
  }

  return 1
}

export { minimumBoxes }
