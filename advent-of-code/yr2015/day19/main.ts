import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day19.in")

const parsedData = parseByLine<string[]>(data, (line: string) =>
  line.split(" => ")
)

const mappings = parsedData.slice(0, -1) as [string, string][]
const start = parsedData.at(-1)?.[0] || ""

const molecules = new Set<string>()

for (const mapping of mappings) {
  const [searchValue, replaceValue] = mapping

  if (!searchValue || !replaceValue) {
    throw new Error("Input value is not correct")
  }

  const indicesToReplace = new Set<number>()
  for (let i = 0; i < start.length; i += 1) {
    const index = start.indexOf(searchValue, i)
    if (index !== -1) {
      indicesToReplace.add(index)
    }
  }

  for (const index of indicesToReplace) {
    const molecule = `${start.slice(0, index)}${replaceValue}${start.slice(index + searchValue.length)}`
    molecules.add(molecule)
  }
}

console.log(`AoC 2015 - Day 19 - Part 1: ${molecules.size}`)
