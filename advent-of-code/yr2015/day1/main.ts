import path from "path";

const fileDir = import.meta.dir;
const dataFilePath = path.join(fileDir, "day1.in");

const file = Bun.file(dataFilePath);
const data = await file.text();

function getCurrentLevel(instructions: string): number {
  return instructions.split("").reduce((acc, char) => {
    if (char === "(") {
      return acc + 1;
    }
    if (char === ")") {
      return acc - 1;
    }

    return acc;
  }, 0);
}

const part1 = getCurrentLevel(data);

console.log(`AoC 2015 - Day 1 - Part 1: ${part1}`);

function getExitPosition(instructions: string): number {
  let level = 0;

  for (let i = 0; i < instructions.length; i += 1) {
    if (instructions[i] === "(") {
      level += 1;
    }
    if (instructions[i] === ")") {
      level -= 1;
    }

    if (level < 0) {
      return i + 1;
    }
  }

  return instructions.length;
}

const part2 = getExitPosition(data);

console.log(`AoC 2015 - Day 1 - Part 2: ${part2}`);
