function replaceElements(arr: number[]): number[] {
  const maxes = new Array<number>(arr.length).fill(-1)

  let currentMax = -1

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    maxes[i] = currentMax
    currentMax = Math.max(currentMax, arr[i])
  }

  return maxes
}

export { replaceElements }
