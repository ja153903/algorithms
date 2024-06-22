function longestCommonPrefix(strs: string[]): string {
  let prefix = ""
  const shortestWordLength = Math.min(...strs.map((str) => str.length))

  for (let i = 0; i < shortestWordLength; i += 1) {
    for (let j = 1; j < strs.length; j += 1) {
      if (strs[j][i] !== strs[0][i]) {
        return prefix
      }
    }

    prefix += strs[0][i]
  }

  return prefix
}

export { longestCommonPrefix }
