import { expect, test } from "bun:test"

import { maximumOddBinaryNumber } from "../leet2864"

test("maximumOddBinaryNumber - should return 1 with some number of leading 0s if there is only one 1-bit", () => {
  const s = "1000"
  expect(maximumOddBinaryNumber(s)).toBe("0001")
})

test("maximumOddBinaryNumber - should return 11...001 if there are more one 1-bit", () => {
  const s = "001100110"
  expect(maximumOddBinaryNumber(s)).toBe("111000001")
})
