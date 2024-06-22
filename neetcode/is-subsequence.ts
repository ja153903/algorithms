function isSubsequence(s: string, t: string): boolean {
  let i = 0

  for (let j = 0; j < t.length; j += 1) {
    if (s[i] === t[j]) {
      i += 1
    }
  }

  return i >= s.length
}

export { isSubsequence }
