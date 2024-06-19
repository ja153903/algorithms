export class Solution {
  isAnagram(s: string, t: string): boolean {
    const cnt = new Map<string, number>()

    for (const ch of s) {
      cnt.set(ch, (cnt.get(ch) ?? 0) + 1)
    }

    for (const ch of t) {
      if (!cnt.has(ch)) {
        return false
      }

      const count = cnt.get(ch) ?? 0

      if (count - 1 < 0) {
        return false
      }

      cnt.set(ch, count - 1)
    }

    for (const value of cnt.values()) {
      if (value !== 0) {
        return false
      }
    }

    return true
  }
}
