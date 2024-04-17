import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day6.in")

type Coordinate = { row: number; col: number }

type Action = "TURN_OFF" | "TURN_ON" | "TOGGLE"

type Instruction = {
  action: Action
  left: Coordinate
  right: Coordinate
}

const TURN_OFF_REGEX =
  /turn off (?<leftRow>\d+),(?<leftCol>\d+) through (?<rightRow>\d+),(?<rightCol>\d+)/gm
const TURN_ON_REGEX =
  /turn on (?<leftRow>\d+),(?<leftCol>\d+) through (?<rightRow>\d+),(?<rightCol>\d+)/gm
const TOGGLE_REGEX =
  /toggle (?<leftRow>\d+),(?<leftCol>\d+) through (?<rightRow>\d+),(?<rightCol>\d+)/gm

function buildInstruction(
  match: RegExpMatchArray,
  action: Action
): Instruction {
  const leftRow = Number(match.groups?.leftRow ?? "")
  const leftCol = Number(match.groups?.leftCol ?? "")
  const rightRow = Number(match.groups?.rightRow ?? "")
  const rightCol = Number(match.groups?.rightCol ?? "")

  return {
    action,
    left: {
      row: leftRow,
      col: leftCol,
    },
    right: {
      row: rightRow,
      col: rightCol,
    },
  }
}

function matchInstruction(
  line: string,
  regex: RegExp,
  action: Action
): Instruction {
  for (const match of line.matchAll(regex)) {
    return buildInstruction(match, action)
  }

  throw new Error("Something is wrong with the data")
}

const lines = parseByLine<Instruction>(data, (line: string) => {
  if (line.startsWith("turn off")) {
    return matchInstruction(line, TURN_OFF_REGEX, "TURN_OFF")
  } else if (line.startsWith("turn on")) {
    return matchInstruction(line, TURN_ON_REGEX, "TURN_ON")
  } else {
    return matchInstruction(line, TOGGLE_REGEX, "TOGGLE")
  }
})

function buildStateGrid(): number[][] {
  const state = new Array<Array<number>>(1000)

  for (let i = 0; i < 1000; i += 1) {
    state[i] = new Array<number>(1000).fill(0)
  }

  return state
}

function applyAction(state: number[][], instruction: Instruction) {
  const { action, left, right } = instruction

  for (let row = left.row; row <= right.row; row += 1) {
    for (let col = left.col; col <= right.col; col += 1) {
      switch (action) {
        case "TOGGLE":
          state[row][col] ^= 1
          break
        case "TURN_ON":
          state[row][col] = 1
          break
        case "TURN_OFF":
          state[row][col] = 0
          break
      }
    }
  }
}

function getLitCount(state: number[][]): number {
  return state.reduce((acc, row) => acc + row.reduce((a, b) => a + b), 0)
}

function followInstructions(instructions: Instruction[]) {
  const state = buildStateGrid()

  for (const instruction of instructions) {
    applyAction(state, instruction)
  }

  return getLitCount(state)
}

const part1 = followInstructions(lines)

console.log(`AoC 2015 - Day 6 - Part 1: ${part1}`)

function applyNewAction(state: number[][], instruction: Instruction) {
  const { action, left, right } = instruction

  for (let row = left.row; row <= right.row; row += 1) {
    for (let col = left.col; col <= right.col; col += 1) {
      switch (action) {
        case "TOGGLE":
          state[row][col] += 2
          break
        case "TURN_ON":
          state[row][col] += 1
          break
        case "TURN_OFF":
          state[row][col] = Math.max(state[row][col] - 1, 0)
          break
      }
    }
  }
}

function followNewInstructions(instructions: Instruction[]) {
  const state = buildStateGrid()

  for (const instruction of instructions) {
    applyNewAction(state, instruction)
  }

  return getLitCount(state)
}

const part2 = followNewInstructions(lines)

console.log(`AoC 2015 - Day 6 - Part 2: ${part2}`)
