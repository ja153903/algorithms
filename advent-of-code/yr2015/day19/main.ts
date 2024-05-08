import { TODO, parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day19.in")

type Entry = readonly [PropertyKey, string]

const parsedData = parseByLine<unknown>(data, (line: string) => {
  if (line.includes("=>")) {
    return line.split(" => ")
  }

  return line
})

// TODO: These should not be entries in a record because each key
// can have multiple mappings at some point
const mapping = Object.fromEntries(parsedData.slice(0, -1) as Entry[])
const sequence = (parsedData.at(-1) as string) ?? ""

const part1 = TODO<string>("Solve later")

console.log(`AoC 2015 - Day 19 - Part 1: ${part1}`)

const part2 = TODO<string>("Solve later")

console.log(`AoC 2015 - Day 19 - Part 2: ${part2}`)
