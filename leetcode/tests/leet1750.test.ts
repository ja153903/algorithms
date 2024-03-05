import { expect, test } from 'bun:test';

import { minimumLength } from "../leet1750";

test('minimumLength - should pass basic tests', () => {
  expect(minimumLength("ca")).toBe(2);
  expect(minimumLength("cabaabac")).toBe(0);
  expect(minimumLength("aabccabba")).toBe(3);
});
