function pivotInteger(n: number): number {
  const sum = (n * (n + 1)) / 2;

  for (let i = 1; i <= n; i += 1) {
    const lhs = (i * (i + 1)) / 2;
    const rhs = sum - lhs + i;

    if (lhs === rhs) {
      return i;
    }
  }

  return -1;
}

export { pivotInteger };
