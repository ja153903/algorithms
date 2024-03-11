import { TODO, parseByLine, readFile } from "@/advent-of-code/utils";

type HappinessNode = {
  src: string;
  dst: string;
  happiness: number;
};

const data = await readFile(import.meta.dir, "day13.in");

const HAPPINESS_REGEX =
  /(?<gains>\w+) would (?<gainOrLose>\w+) (?<happiness>\d+) happiness units by sitting next to (?<gainFrom>\w+)./gm;

const lines = parseByLine<HappinessNode>(data, (line: string) => {
  for (const match of line.matchAll(HAPPINESS_REGEX)) {
    const dst = match.groups?.gains ?? "";
    const src = match.groups?.gainFrom ?? "";
    const gainOrLose = match.groups?.gainOrLose ?? "";
    const happiness = Number(match.groups?.happiness ?? "");

    return {
      src,
      dst,
      happiness: gainOrLose === "gains" ? happiness : -happiness,
    };
  }

  throw new Error("Something went wrong with the parsing");
});

const part1 = TODO<string>("Solve later");

console.log(`AoC 2015 - Day 13 - Part 1: ${part1}`);

const part2 = TODO<string>("Solve later");

console.log(`AoC 2015 - Day 13 - Part 2: ${part2}`);
