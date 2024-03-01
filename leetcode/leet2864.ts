function maximumOddBinaryNumber(s: string): string {
  const n = s.length;
  let numOnes = 0;

  for (const ch of s) {
    if (ch === "1") {
      numOnes += 1;
    }
  }

  if (numOnes === 1) {
    return `${"0".repeat(n - numOnes)}1`;
  }

  return `${"1".repeat(numOnes - 1)}${"0".repeat(n - numOnes)}1`;
}

export { maximumOddBinaryNumber };
