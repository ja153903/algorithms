function getCommon(a: number[], b: number[]): number {
  const aSet = new Set(a);
  const min = Math.min(...b.filter((item) => aSet.has(item)));

  return min === Infinity ? -1 : min;
}

export { getCommon };
