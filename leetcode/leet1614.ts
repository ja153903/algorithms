function maxDepth(s: string): number {
  const stack: string[] = [];

  let res = 0;

  for (const ch of s) {
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      stack.pop();
    }

    res = Math.max(res, stack.length);
  }

  return res;
}

export { maxDepth };
