import { parseByLine, readFile } from "@/advent-of-code/utils";

const data = await readFile(import.meta.dir, "day5.in");
const lines = parseByLine(data, (line: string) => line);

const VOWELS = ["a", "e", "i", "o", "u"];
const BANNED = ["ab", "cd", "pq", "xy"];

function getVowelCount(line: string): number {
  return line.split("").filter((char) => VOWELS.includes(char)).length;
}

function hasDuplicateSequentialChars(line: string): boolean {
  for (let i = 1; i < line.length; i += 1) {
    if (line[i - 1] === line[i]) {
      return true;
    }
  }

  return false;
}

function containsBannedSequence(line: string): boolean {
  for (let i = 1; i < line.length; i += 1) {
    if (BANNED.includes(line.substring(i - 1, i + 1))) {
      return true;
    }
  }

  return false;
}

function isNice(line: string): boolean {
  return (
    getVowelCount(line) >= 3 &&
    hasDuplicateSequentialChars(line) &&
    !containsBannedSequence(line)
  );
}

const part1 = lines.filter((line) => isNice(line)).length;

console.log(`AoC 2015 - Day 5 - Part 1: ${part1}`);

function getSimilarPairsCount(line: string): number {
  let res = 0;

  for (let i = 1; i < line.length; i += 1) {
    const pair = line.substring(i - 1, i + 1);
    for (let j = i + 1; j < line.length - 1; j += 1) {
      const current = line.substring(j, j + 2);

      if (pair === current) {
        res += 1;
      }
    }
  }

  return res;
}

function hasRepeatingBetweenSingleChar(line: string): boolean {
  for (let i = 1; i < line.length - 1; i += 1) {
    if (line[i - 1] === line[i + 1]) {
      return true;
    }
  }

  return false;
}

function isNewNice(line: string): boolean {
  return getSimilarPairsCount(line) > 0 && hasRepeatingBetweenSingleChar(line);
}

const part2 = lines.filter((line) => isNewNice(line)).length;

console.log(`AoC 2015 - Day 5 - Part 2: ${part2}`);
