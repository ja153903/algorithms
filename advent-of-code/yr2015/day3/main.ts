import { readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day3.in")

function _walk(
  directions: string,
  uniqueCoords: Set<string>,
  index: number,
  x: number,
  y: number
): [number, number] {
  const direction = directions[index]

  if (direction === "^") {
    uniqueCoords.add(`${x},${y + 1}`)
    y += 1
  }

  if (direction === "v") {
    uniqueCoords.add(`${x},${y - 1}`)
    y -= 1
  }

  if (direction === "<") {
    uniqueCoords.add(`${x - 1},${y}`)
    x -= 1
  }

  if (direction === ">") {
    uniqueCoords.add(`${x + 1},${y}`)
    x += 1
  }

  return [x, y]
}

function walk(directions: string): number {
  let x = 0,
    y = 0
  const uniqueCoords = new Set<string>()

  for (let i = 0; i < directions.length; i += 1) {
    ;[x, y] = _walk(directions, uniqueCoords, i, x, y)
  }

  return uniqueCoords.size
}

const part1 = walk(data)

console.log(`AoC 2015 - Day 3 - Part 1: ${part1}`)

function walkWithTwoSantas(directions: string) {
  let x = 0,
    y = 0
  let roboX = 0,
    roboY = 0
  const uniqueCoords = new Set<string>()

  for (let i = 0; i < directions.length; i += 1) {
    if (i % 2 === 0) {
      ;[x, y] = _walk(directions, uniqueCoords, i, x, y)
    } else {
      ;[roboX, roboY] = _walk(directions, uniqueCoords, i, roboX, roboY)
    }
  }

  return uniqueCoords.size
}

const part2 = walkWithTwoSantas(data)

console.log(`AoC 2015 - Day 3 - Part 2: ${part2}`)
