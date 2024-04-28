import { TODO, parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day16.in")

const SUE_REGEX =
  /Sue (?<id>\d+): (?<k1>\w+): (?<v1>\d+), (?<k2>\w+): (?<v2>\d+), (?<k3>\w+): (?<v3>\d+)/gm

type Sue = {
  id: number | null
  children: number | null
  cats: number | null
  samoyeds: number | null
  pomeranians: number | null
  akitas: number | null
  vizslas: number | null
  goldfish: number | null
  trees: number | null
  cars: number | null
  perfumes: number | null
}

const DEFAULT_SUE = {
  id: null,
  children: null,
  cats: null,
  samoyeds: null,
  pomeranians: null,
  akitas: null,
  vizslas: null,
  goldfish: null,
  trees: null,
  cars: null,
  perfumes: null,
}

const lines = parseByLine<Sue>(data, (line: string) => {
  for (const match of line.matchAll(SUE_REGEX)) {
    const id = match.groups?.id ?? null

    const k1 = match.groups?.k1 ?? ""
    const v1 = Number(match.groups?.v1 ?? null)

    const k2 = match.groups?.k2 ?? ""
    const v2 = Number(match.groups?.v2 ?? null)

    const k3 = match.groups?.k3 ?? ""
    const v3 = Number(match.groups?.v3 ?? null)

    return Object.fromEntries(
      Object.entries({
        ...DEFAULT_SUE,
        id,
        [k1]: v1,
        [k2]: v2,
        [k3]: v3,
      }).map(([key, value]) => [key, value === null ? null : Number(value)])
    ) as Sue
  }

  throw new Error("Something went wrong grouping the line")
})

const DESIRED_SUE = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
}

const part1 =
  lines.find((line) => {
    const { id, ...rest } = line
    const relevantKVPairs = Object.entries(rest).filter(
      ([_key, value]) => value != null
    )
    for (const [key, value] of relevantKVPairs) {
      if (DESIRED_SUE[key as keyof typeof DESIRED_SUE] !== value) {
        return false
      }
    }

    return true
  })?.id ?? null

console.log(`AoC 2015 - Day 16 - Part 1: ${part1}`)

const GREATER_THAN = new Set(["cats", "trees"])
const LESS_THAN = new Set(["pomeranians", "goldfish"])

const part2 = lines.find((line) => {
  const { id, ...rest } = line
  const relevantKVPairs = Object.entries(rest).filter(
    ([_key, value]) => value != null
  )

  for (const [key, value] of relevantKVPairs) {
    if (
      GREATER_THAN.has(key) &&
      DESIRED_SUE[key as keyof typeof DESIRED_SUE] >= value!
    ) {
      return false
    }

    if (
      LESS_THAN.has(key) &&
      DESIRED_SUE[key as keyof typeof DESIRED_SUE] <= value!
    ) {
      return false
    }

    if (
      !GREATER_THAN.has(key) &&
      !LESS_THAN.has(key) &&
      DESIRED_SUE[key as keyof typeof DESIRED_SUE] !== value
    ) {
      return false
    }
  }

  return true
})?.id

console.log(`AoC 2015 - Day 16 - Part 2: ${part2}`)
