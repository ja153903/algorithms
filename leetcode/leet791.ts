function customSortString(order: string, s: string): string {
  const map = new Map<string, number>(
    order.split("").map((char, index) => [char, index]),
  );

  return s
    .split("")
    .sort((a, b) => (map.get(a) ?? 0) - (map.get(b) ?? 0))
    .join("");
}

export { customSortString };
