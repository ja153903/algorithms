function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  // TODO: Create a BiMap data structure that we can reuse
  const mapping = new Map<string, string>()
  const revMapping = new Map<string, string>()

  for (let i = 0; i < s.length; i += 1) {
    if (mapping.has(s[i]) && mapping.get(s[i]) !== t[i]) {
      return false
    }

    if (revMapping.has(t[i]) && revMapping.get(t[i]) !== s[i]) {
      return false
    }

    mapping.set(s[i], t[i])
    revMapping.set(t[i], s[i])
  }

  return true
}

export { isIsomorphic }
