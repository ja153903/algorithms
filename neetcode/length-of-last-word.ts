function lengthOfLastWord(s: string): number {
  let cnt = 0

  s = s.trim()

  for (let i = s.length - 1; i >= 0 && s[i] !== " "; i -= 1) {
    cnt += 1
  }

  return cnt
}

export { lengthOfLastWord }
