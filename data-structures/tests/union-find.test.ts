import { expect, test } from "bun:test";

import { UnionFind } from "../union-find";

test("UnionFind - numConnectedComponents", () => {
  const uf = new UnionFind(3);
  uf.union(1, 2);

  expect(uf.numConnectedComponents).toBe(2);
});

test("UnionFind - numConnectedComponents should be number of nodes by default", () => {
  const uf = new UnionFind(10);
  expect(uf.numConnectedComponents).toBe(10);
});
