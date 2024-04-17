import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day8.in")

type Metadata = {
  strLiteralLength: number
  inMemoryLength: number
  value: string
}

const lines = parseByLine<Metadata>(data, (line: string) => ({
  value: line,
  strLiteralLength: line.length,
  inMemoryLength: eval(line).length,
}))

function collectDiffInLengths(metadata: Metadata[]): number {
  return metadata.reduce(
    (acc, line) => acc + line.strLiteralLength - line.inMemoryLength,
    0
  )
}

const part1 = collectDiffInLengths(lines)

console.log(`AoC 2015 - Day 8 - Part 1: ${part1}`)

const augmentedLines = lines.map((line) => {
  return {
    strLiteralLength: line.strLiteralLength,
    encodedLength: line.value.split("").reduce((acc, char) => {
      if (char === '"' || char === "\\") {
        return acc + 2
      }

      return acc + 1
    }, 2),
  }
})

const part2 = augmentedLines.reduce(
  (acc, line) => acc + line.encodedLength - line.strLiteralLength,
  0
)

console.log(`AoC 2015 - Day 8 - Part 2: ${part2}`)
