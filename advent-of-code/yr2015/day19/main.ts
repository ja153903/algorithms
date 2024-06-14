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

// TODO: Figure out a better way of doing this
// Currently it is too inefficient to start at e
// Think about starting backwards until we get to e

function bfs() {
  const queue: [string, number][] = [[start, 0]]
  const visited: Set<string> = new Set()

  visited.add(start)

  while (queue.length > 0) {
    const [current, steps] = queue.shift()!
    if (current === "e") {
      console.log(`AoC 2015 - Day 19 - Part 2: ${steps}`)
      return
    }

    for (let i = 0; i < current.length; i += 1) {
      for (let j = i; j < current.length; j += 1) {
        const slice = current.slice(i, j + 1)

        const relevantMappings = mappings.filter(
          ([_key, value]) => value === slice
        )

        for (const [key, _value] of relevantMappings) {
          const replaced = `${current.slice(0, i)}${key}${current.slice(j + 1)}`

          if (replaced === "e") {
            console.log(`AoC 2015 - Day 19 - Part 2: ${steps}`)
            return
          }

          if (visited.has(replaced)) {
            continue
          }

          queue.push([replaced, steps + 1])
          visited.add(replaced)
        }
      }
    }
  }
}

bfs()
