function sumOfEncryptedInt(nums: number[]): number {
  const encrypt = (num: number): number => {
    let len = 0
    let largest = 0
    let curr = num

    while (curr > 0) {
      len += 1
      largest = Math.max(largest, curr % 10)
      curr = Math.floor(curr / 10)
    }

    let res = 0

    for (let i = 0; i < len; i += 1) {
      res = res * 10 + largest
    }

    return res
  }

  return nums.reduce((acc, num) => acc + encrypt(num), 0)
}

export { sumOfEncryptedInt }
