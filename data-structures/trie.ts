import { IMPOSSIBLE_TO_NARROW_ERROR } from "@/constants/error";

export class Trie {
  private hasWord: boolean;
  private children: Map<string, Trie>;

  constructor() {
    this.hasWord = false;
    this.children = new Map();
  }

  insert(word: string) {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        current.children.set(ch, new Trie());
      }

      const child = current.children.get(ch);
      if (!child) {
        throw new Error(IMPOSSIBLE_TO_NARROW_ERROR);
      }

      current = child;
    }

    current.hasWord = true;
  }

  has(word: string): boolean {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        return false;
      }

      const child = current.children.get(ch);
      if (!child) {
        throw new Error(IMPOSSIBLE_TO_NARROW_ERROR);
      }

      current = child;
    }

    return current.hasWord;
  }

  startsWith(prefix: string): boolean {
    let current: Trie = this;

    for (const ch of prefix) {
      if (!current.children.has(ch)) {
        return false;
      }

      const child = current.children.get(ch);
      if (!child) {
        throw new Error(IMPOSSIBLE_TO_NARROW_ERROR);
      }

      current = child;
    }

    return true;
  }
}
