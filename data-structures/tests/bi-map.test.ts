import { expect, test } from "bun:test"

import { BiMap } from "../bi-map"

// TODO: Add more test coverage to the data structure
test("BiMap::has", () => {
  const map = new BiMap<string, string>()
  map.set("jaime", "abbariao")

  expect(map.has("jaime")).toBeTrue()
  expect(map.has("abbariao")).toBeTrue()
})
