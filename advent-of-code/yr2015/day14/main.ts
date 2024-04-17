import { parseByLine, readFile } from "@/advent-of-code/utils"

const data = await readFile(import.meta.dir, "day14.in")

const REINDEER_REGEX =
  /(?<reindeer>\w+) can fly (?<speed>\w+) km\/s for (?<flightTime>\w+) seconds, but then must rest for (?<restTime>\w+) seconds./gm

type Reindeer = {
  name: string
  speed: number
  flightTime: number
  restTime: number
}

const lines = parseByLine<Reindeer>(data, (line: string) => {
  for (const match of line.matchAll(REINDEER_REGEX)) {
    const name = match.groups?.reindeer ?? ""
    const speed = Number(match.groups?.speed ?? "")
    const flightTime = Number(match.groups?.flightTime ?? "")
    const restTime = Number(match.groups?.restTime ?? "")

    return { name, speed, flightTime, restTime }
  }

  throw new Error("Something went wrong with the regex")
})

function getMetersFlown(reindeer: Reindeer, timeLimit: number): number {
  const kilometerPerCycle = reindeer.speed * reindeer.flightTime
  const cycleTime = reindeer.flightTime + reindeer.restTime

  if (timeLimit <= cycleTime) {
    return reindeer.speed * Math.min(timeLimit, reindeer.flightTime)
  }

  let result = 0

  const numCycles = Math.floor(timeLimit / cycleTime)

  result += kilometerPerCycle * numCycles

  const remCycles = timeLimit % cycleTime

  if (remCycles > 0) {
    result += reindeer.speed * Math.min(reindeer.flightTime, remCycles)
  }

  return result
}

const part1 = Math.max(
  ...lines.map((reindeer) => getMetersFlown(reindeer, 2503))
)

console.log(`AoC 2015 - Day 14 - Part 1: ${part1}`)

function getLeaderboard(lines: Reindeer[], timeLimit: number) {
  const map = new Map<string, number>()
  for (const { name } of lines) {
    map.set(name, 0)
  }

  // for each second, we update the score for each reindeer
  for (let i = 1; i <= timeLimit; i += 1) {
    // compute how far the reindeer has gone up to this point
    let leaderDist = 0
    const leaderboard: [string, number][] = []

    for (const reindeer of lines) {
      const metersFlown = getMetersFlown(reindeer, i)
      leaderDist = Math.max(leaderDist, metersFlown)
      leaderboard.push([reindeer.name, metersFlown])
    }

    for (const [name, metersFlown] of leaderboard) {
      if (metersFlown === leaderDist) {
        map.set(name, (map.get(name) ?? 0) + 1)
      }
    }
  }

  return map
}

const map = getLeaderboard(lines, 2503)
const part2 = [...map.entries()].sort((a, b) => b[1] - a[1])[0][1]

console.log(`AoC 2015 - Day 14 - Part 2: ${part2}`)
