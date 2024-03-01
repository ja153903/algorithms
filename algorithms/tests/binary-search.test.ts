import { expect, test } from "bun:test";

import { binarySearch } from "../binary-search";

test("binarySearch - Return -1 if cannot find the element", () => {
  const nums = [1, 2, 3, 4, 5];
  expect(binarySearch(nums, 7)).toBe(-1);
});

test("binarySearch - Return appropriate index if element is found", () => {
  const nums = [1, 2, 3, 4, 5];
  expect(binarySearch(nums, 4)).toBe(3);
  expect(binarySearch(nums, 1)).toBe(0);
});
