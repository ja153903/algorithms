import { readFile } from "@/advent-of-code/utils";

const data = await readFile(import.meta.dir, "day12.in");
const obj = JSON.parse(data);

function findAllNumbers(obj: any): number {
  let res = 0;

  if (obj == null) {
    return 0;
  }

  if (Array.isArray(obj)) {
    for (const item of obj) {
      res += findAllNumbers(item);
    }
  } else if (typeof obj === "object") {
    for (const value of Object.values(obj)) {
      res += findAllNumbers(value);
    }
  } else if (typeof obj === "number") {
    res += obj;
  }

  return res;
}

const part1 = findAllNumbers(obj);

console.log(`AoC 2015 - Day 12 - Part 1: ${part1}`);

function findAllNumbersWoutRed(obj: any): number {
  let res = 0;

  if (obj == null) {
    return 0;
  }

  if (Array.isArray(obj)) {
    for (const item of obj) {
      res += findAllNumbersWoutRed(item);
    }
  } else if (typeof obj === "object") {
    let hasRed = false;
    let currentSum = 0;

    for (const value of Object.values(obj)) {
      if (value === "red") {
        hasRed = true;
        break;
      }

      currentSum += findAllNumbersWoutRed(value);
    }

    if (!hasRed) {
      res += currentSum;
    }
  } else if (typeof obj === "number") {
    res += obj;
  }

  return res;
}

const part2 = findAllNumbersWoutRed(obj);

console.log(`AoC 2015 - Day 12 - Part 2: ${part2}`);
