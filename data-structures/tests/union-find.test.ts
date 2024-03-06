import { expect, test } from "bun:test";

import { UnionFind } from "../union-find";

test("UnionFind - numConnectedComponents", () => {
  const uf = new UnionFind(3);
  uf.union(1, 2);

  expect(uf.numConnectedComponents).toBe(2);
});
