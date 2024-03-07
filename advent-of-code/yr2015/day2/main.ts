import { parseByLine, readFile } from "@/advent-of-code/utils";

const data = await readFile(import.meta.dir, "day2.in");

const lines = parseByLine(data, (line: string) =>
  line.split("x").map((item) => Number(item)),
);

function getSurfaceArea(dimensions: number[]): number {
  const [l, w, h] = dimensions;
  return 2 * l * w + 2 * l * h + 2 * w * h;
}

function getAreaOfSmallestSide(dimensions: number[]): number {
  const [l, w, h] = dimensions;
  return Math.min(l * w, l * h, w * h);
}

const part1 = lines
  .map(
    (dimensions) =>
      getSurfaceArea(dimensions) + getAreaOfSmallestSide(dimensions),
  )
  .reduce((a, b) => a + b);

console.log(`AoC 2015 - Day 2 - Part 1: ${part1}`);

function getVolume(dimensions: number[]): number {
  return dimensions.reduce((a, b) => a * b, 1);
}

function getPerimeterOfSmallestSide(dimensions: number[]): number {
  const [l, w, h] = dimensions;
  return Math.min(2 * l + 2 * w, 2 * l + 2 * h, 2 * w + 2 * h);
}

const part2 = lines
  .map(
    (dimensions) =>
      getVolume(dimensions) + getPerimeterOfSmallestSide(dimensions),
  )
  .reduce((a, b) => a + b);

console.log(`AoC 2015 - Day 2 - Part 2: ${part2}`);
