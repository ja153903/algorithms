import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day15.in")

const INGREDIENTS_REGEX =
  /(?<ingredient>\w+): capacity (?<capacity>-?\d+), durability (?<durability>-?\d+), flavor (?<flavor>-?\d+), texture (?<texture>-?\d+), calories (?<calories>-?\d+)/gm

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

  throw new Error("Something went wrong when capturing groups")
})

function computeScore({
  ingredients,
  isPart1,
}: {
  ingredients: Ingredient[]
  isPart1: boolean
}): number {
  let res = 0

  for (let i = 1; i < 100; i += 1) {
    for (let j = 1; j < 100; j += 1) {
      for (let k = 1; k < 100; k += 1) {
        for (let l = 1; l < 100; l += 1) {
          if (i + j + k + l === 100) {
            let calories = 0
            let dict = { capacity: 0, durability: 0, flavor: 0, texture: 0 }
            const ptrs = [i, j, k, l]

            for (let ptr = 0; ptr < ptrs.length; ptr += 1) {
              dict.capacity += ingredients[ptr].capacity * ptrs[ptr]
              dict.durability += ingredients[ptr].durability * ptrs[ptr]
              dict.flavor += ingredients[ptr].flavor * ptrs[ptr]
              dict.texture += ingredients[ptr].texture * ptrs[ptr]

              calories += ingredients[ptr].calories * ptrs[ptr]
            }

            if ((!isPart1 && calories === 500) || isPart1)
              res = Math.max(
                res,
                Math.max(
                  0,
                  Object.values(dict)
                    .map((value) => (value < 0 ? 0 : value))
                    .reduce((a, b) => a * b, 1)
                )
              )
          }
        }
      }
    }
  }

  return res
}

const part1 = computeScore({ ingredients, isPart1: true })

console.log(`AoC 2015 - Day 15 - Part 1: ${part1}`)

const part2 = computeScore({ ingredients, isPart1: false })

console.log(`AoC 2015 - Day 15 - Part 2: ${part2}`)
