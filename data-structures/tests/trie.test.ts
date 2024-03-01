import { expect, test } from 'bun:test';

import { Trie } from "../trie";

test('Trie::has', () => {
  const trie = new Trie();
  trie.insert("apple");

  expect(trie.has("apple")).toBeTrue();
  expect(trie.has("banana")).toBeFalse();
});

test('Trie::startsWith', () => {
  const trie = new Trie();
  trie.insert("apple");

  expect(trie.startsWith("ap")).toBeTrue();
  expect(trie.startsWith("b")).toBeFalse();
  expect(trie.startsWith("applepie")).toBeFalse();
});
