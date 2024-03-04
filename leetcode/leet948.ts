function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);

  let res = 0;
  let score = 0;

  let left = 0, right = tokens.length - 1;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      score += 1;
      left += 1;
    } else if (score >= 1) {
      power += tokens[right];
      score -= 1;
      right -= 1;
    } else {
      return res;
    }

    res = Math.max(res, score);
  }

  return res;
}

export { bagOfTokensScore };
