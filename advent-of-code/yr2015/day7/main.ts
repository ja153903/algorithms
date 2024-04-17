import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day7.in")

const ASSIGNMENT_REGEX = /(?<value>\w+) -> (?<register>\w+)/gm
const NEGATION_REGEX = /NOT (?<value>\w+) -> (?<register>\w+)/gm
const OPERATION_REGEX =
  /(?<left>\w+) (?<operation>\w+) (?<right>\w+) -> (?<register>\w+)/gm

type Action = "ASSIGNMENT" | "NEGATION" | "AND" | "OR" | "LSHIFT" | "RSHIFT"
type Assignment = {
  action: "ASSIGNMENT"
  register: string
  value: string
}
type Negation = {
  action: "NEGATION"
  register: string
  value: string
}
type Operation = {
  action: "AND" | "OR" | "LSHIFT" | "RSHIFT"
  register: string
  lhs: string
  rhs: string
}

type Command = Assignment | Negation | Operation

function buildCommand(match: RegExpMatchArray, action: Action | null): Command {
  const register = match.groups?.register ?? ""

  switch (action) {
    case "ASSIGNMENT":
    case "NEGATION":
      const value = match.groups?.value ?? ""
      return { action, register, value }
    default:
      const operation = match.groups?.operation ?? ""
      const lhs = match.groups?.left ?? ""
      const rhs = match.groups?.right ?? ""

      return { action: operation as Operation["action"], register, lhs, rhs }
  }
}

function matchCommand(
  command: string,
  action: Action | null,
  regex: RegExp
): Command {
  for (const match of command.matchAll(regex)) {
    return buildCommand(match, action)
  }

  throw new Error("This error cannot happen")
}

const lines = parseByLine<Command>(data, (line: string) => {
  if (line.startsWith("NOT")) {
    return matchCommand(line, "NEGATION", NEGATION_REGEX)
  } else if (
    line.includes("AND") ||
    line.includes("OR") ||
    line.includes("LSHIFT") ||
    line.includes("RSHIFT")
  ) {
    return matchCommand(line, null, OPERATION_REGEX)
  } else {
    return matchCommand(line, "ASSIGNMENT", ASSIGNMENT_REGEX)
  }
})

function setMap(map: Map<string, number>, commands: Command[]): boolean {
  let noop = false

  for (const command of commands) {
    const isRegisterSet = map.has(command.register)
    if (isRegisterSet) {
      continue
    }

    noop = true

    switch (command.action) {
      case "ASSIGNMENT":
        const valueToAssign = parseInt(command.value)
        if (isNaN(valueToAssign)) {
          const ptr = map.get(command.value)
          if (ptr != null) {
            map.set(command.register, ptr)
          }
        } else {
          map.set(command.register, valueToAssign)
        }
        break
      case "NEGATION":
        const valueToNegate = parseInt(command.value)
        if (isNaN(valueToNegate)) {
          const ptr = map.get(command.value)
          if (ptr != null) {
            map.set(command.register, ~ptr)
          }
        } else {
          map.set(command.register, ~valueToNegate)
        }
        break
      case "RSHIFT":
        let lhsForRShift: number | undefined = parseInt(command.lhs)

        if (isNaN(lhsForRShift)) {
          lhsForRShift = map.get(command.lhs)
          if (lhsForRShift == null) {
            break
          }
        }

        let rhsForRShift: number | undefined = parseInt(command.rhs)

        if (isNaN(rhsForRShift)) {
          rhsForRShift = map.get(command.rhs)
          if (rhsForRShift == null) {
            break
          }
        }

        map.set(command.register, lhsForRShift >> rhsForRShift)
        break
      case "LSHIFT":
        let lhsForLShift: number | undefined = parseInt(command.lhs)

        if (isNaN(lhsForLShift)) {
          lhsForLShift = map.get(command.lhs)
          if (lhsForLShift == null) {
            break
          }
        }

        let rhsForLShift: number | undefined = parseInt(command.rhs)

        if (isNaN(rhsForLShift)) {
          rhsForLShift = map.get(command.rhs)
          if (rhsForLShift == null) {
            break
          }
        }

        map.set(command.register, lhsForLShift << rhsForLShift)
        break
      case "AND":
        let lhsForAnd: number | undefined = parseInt(command.lhs)

        if (isNaN(lhsForAnd)) {
          lhsForAnd = map.get(command.lhs)
          if (lhsForAnd == null) {
            break
          }
        }

        let rhsForAnd: number | undefined = parseInt(command.rhs)

        if (isNaN(rhsForAnd)) {
          rhsForAnd = map.get(command.rhs)
          if (rhsForAnd == null) {
            break
          }
        }

        map.set(command.register, lhsForAnd & rhsForAnd)
        break
      case "OR":
        let lhsForOr: number | undefined = parseInt(command.lhs)

        if (isNaN(lhsForOr)) {
          lhsForOr = map.get(command.lhs)
          if (lhsForOr == null) {
            break
          }
        }

        let rhsForOr: number | undefined = parseInt(command.rhs)

        if (isNaN(rhsForOr)) {
          rhsForOr = map.get(command.rhs)
          if (rhsForOr == null) {
            break
          }
        }

        map.set(command.register, lhsForOr | rhsForOr)
        break
    }
  }

  return noop
}

function fillMap(
  commands: Command[],
  overrides: [string, number][] = []
): number {
  const map = new Map<string, number>()

  for (const [key, value] of overrides) {
    map.set(key, value)
  }

  let shouldRunLoop = true

  while (shouldRunLoop) {
    shouldRunLoop = setMap(map, commands)
  }

  return map.get("a") ?? 0
}

const part1 = fillMap(lines)

console.log(`AoC 2015 - Day 7 - Part 1: ${part1}`)

const part2 = fillMap(lines, [["b", 3176]])

console.log(`AoC 2015 - Day 7 - Part 2: ${part2}`)
