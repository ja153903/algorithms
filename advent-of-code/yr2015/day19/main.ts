import { TODO, parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day19.in")

type Entry = readonly [PropertyKey, string]

const parsedData = parseByLine<unknown>(data, (line: string) => {
  if (line.includes("=>")) {
    return line.split(" => ")
  }

  return line
})

const part1 = TODO<string>("Solve later")

console.log(`AoC 2015 - Day 19 - Part 1: ${part1}`)

const part2 = TODO<string>("Solve later")

console.log(`AoC 2015 - Day 19 - Part 2: ${part2}`)
