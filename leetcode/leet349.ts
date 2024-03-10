function intersection(a: number[], b: number[]): number[] {
  const set = new Set(a);
  return Array.from(new Set(b.filter((it) => set.has(it))));
}

export { intersection };
