import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day18.in")

// NOTE: This is the state of our grid
const state = parseByLine<string[]>(data, (line: string) => line.split(""))

function getOnNeighborCount(state: string[][], i: number, j: number): number {
  let result = 0
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
  ]

  for (const [dx, dy] of directions) {
    const nx = i + dx
    const ny = j + dy

    if (nx < 0 || ny < 0 || nx >= state.length || ny >= state[0].length) {
      continue
    }

    if (state[nx][ny] === "#") {
      result += 1
    }
  }

  return result
}

function updateState(state: string[][], hasStuckCorners: boolean): string[][] {
  const queue: [number, number][] = []

  for (let i = 0; i < state.length; i += 1) {
    for (let j = 0; j < state[i].length; j += 1) {
      const isOnCorner =
        (i === 0 && j === 0) ||
        (i === 0 && j === state[i].length - 1) ||
        (i === state.length - 1 && j === 0) ||
        (i === state.length - 1 && j === state[i].length - 1)

      if (hasStuckCorners && isOnCorner) {
        state[i][j] = "#"
        continue
      }

      const numNeighborsWithOnState = getOnNeighborCount(state, i, j)
      if (state[i][j] === "#") {
        if (numNeighborsWithOnState !== 2 && numNeighborsWithOnState !== 3) {
          queue.push([i, j])
        }
      } else if (numNeighborsWithOnState === 3) {
        queue.push([i, j])
      }
    }
  }

  for (const [i, j] of queue) {
    state[i][j] = state[i][j] === "#" ? "." : "#"
  }

  return state
}

type RunProps = {
  state: string[][]
  n: number
  hasStuckCorners?: boolean
}

function run({ state, n, hasStuckCorners = false }: RunProps) {
  let proxy = structuredClone(state)

  for (let i = 0; i < n; i += 1) {
    proxy = updateState(proxy, hasStuckCorners)
  }

  let res = 0

  for (const row of proxy) {
    for (const value of row) {
      if (value === "#") res += 1
    }
  }

  return res
}

const part1 = run({ state, n: 100 })

console.log(`AoC 2015 - Day 18 - Part 1: ${part1}`)

const part2 = run({ state, n: 100, hasStuckCorners: true })

console.log(`AoC 2015 - Day 18 - Part 2: ${part2}`)
