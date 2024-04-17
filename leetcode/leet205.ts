function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const sFreq = new Map<string, number>()
  const tFreq = new Map<string, number>()

  for (let i = 0; i < s.length; i += 1) {
    const sCount = sFreq.get(s[i]) ?? 0
    const tCount = tFreq.get(t[i]) ?? 0

    if (sCount !== tCount) {
      return false
    }

    sFreq.set(s[i], i + 1)
    tFreq.set(t[i], i + 1)
  }

  return true
}

export { isIsomorphic }
