import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day17.in")

const lines = parseByLine(data, (line: string) => parseInt(line))

function combinationSum(arr: number[]): number {
  const result = [0]

  backtrack(arr, 150, result, 0)

  return result[0]
}

function backtrack(
  arr: number[],
  target: number,
  result: number[],
  start: number
) {
  if (target < 0) {
    return
  }

  if (target === 0) {
    result[0] += 1
    return
  }

  for (let i = start; i < arr.length; i += 1) {
    if (target - arr[i] >= 0) {
      backtrack(arr, target - arr[i], result, i + 1)
    }
  }
}

const part1 = combinationSum(lines)

console.log(`AoC 2015 - Day 17 - Part 1: ${part1}`)

function combinationSum2(arr: number[]): number {
  const result: number[][] = []
  const groupByLength = new Map<number, number>()

  backtrack2(arr, 150, result, 0, [])

  for (const item of result) {
    groupByLength.set(item.length, (groupByLength.get(item.length) ?? 0) + 1)
  }

  const minContainerSize = Math.min(...groupByLength.values())

  return groupByLength.get(minContainerSize) ?? 0
}

function backtrack2(
  arr: number[],
  target: number,
  result: number[][],
  start: number,
  path: number[]
) {
  if (target < 0) {
    return
  }

  if (target === 0) {
    result.push([...path])
    return
  }

  for (let i = start; i < arr.length; i += 1) {
    if (target - arr[i] >= 0) {
      backtrack2(arr, target - arr[i], result, i + 1, [...path, arr[i]])
    }
  }
}

const part2 = combinationSum2(lines)

console.log(`AoC 2015 - Day 17 - Part 2: ${part2}`)
