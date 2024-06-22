export class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>()

    for (const word of strs) {
      const ss = word
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("")
      if (groups.has(ss)) {
        groups.get(ss)?.push(word)
      } else {
        groups.set(ss, [word])
      }
    }

    return Array.from(groups.values())
  }
}
