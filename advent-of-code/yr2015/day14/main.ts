import { TODO, parseByLine, readFile } from "@/advent-of-code/utils";

const data = await readFile(import.meta.dir, "day14.in");

const REINDEER_REGEX =
  /(?<reindeer>\w+) can fly (?<speed>\w+) km\/s for (?<flightTime>\w+) seconds, but then must rest for (?<restTime>\w+) seconds./gm;

type Reindeer = {
  name: string;
  speed: number;
  flightTime: number;
  restTime: number;
};

const lines = parseByLine<Reindeer>(data, (line: string) => {
  for (const match of line.matchAll(REINDEER_REGEX)) {
    const name = match.groups?.reindeer ?? "";
    const speed = Number(match.groups?.speed ?? "");
    const flightTime = Number(match.groups?.flightTime ?? "");
    const restTime = Number(match.groups?.restTime ?? "");

    return { name, speed, flightTime, restTime };
  }

  throw new Error("Something went wrong with the regex");
});

const part1 = TODO<string>("Solve later");

console.log(`AoC 2015 - Day 14 - Part 1: ${part1}`);

const part2 = TODO<string>("Solve later");

console.log(`AoC 2015 - Day 14 - Part 2: ${part2}`);
