import { TODO, parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day15.in")

const INGREDIENTS_REGEX =
  /(?<ingredient>\w+): capacity (?<capacity>\d+), durability (?<durability>\d+), flavor (?<flavor>\d+), texture (?<texture>\d+), calories (?<calories>\d+)/gm

type Ingredient = {
  ingredient: string
  capacity: number
  durability: number
  flavor: number
  texture: number
  calories: number
}

const ingredients = parseByLine<Ingredient>(data, (line: string) => {
  for (const match of line.matchAll(INGREDIENTS_REGEX)) {
    const ingredient = match.groups?.ingredient ?? ""
    const capacity = Number(match.groups?.capacity ?? "")
    const durability = Number(match.groups?.durability ?? "")
    const flavor = Number(match.groups?.flavor ?? "")
    const texture = Number(match.groups?.texture ?? "")
    const calories = Number(match.groups?.calories ?? "")

    return {
      ingredient,
      capacity,
      durability,
      flavor,
      texture,
      calories,
    }
  }

  throw new Error("Something went wrong with parsing")
})

const part1 = TODO<string>("Solve later")

console.log(`AoC 2015 - Day 15 - Part 1: ${part1}`)

const part2 = TODO<string>("Solve later")

console.log(`AoC 2015 - Day 15 - Part 2: ${part2}`)
