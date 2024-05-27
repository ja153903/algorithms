import { parseArgs } from "util"
import { mkdir } from "node:fs/promises"

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    year: {
      type: "string",
    },
    day: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
})

async function mkYearDir(year: string | undefined) {
  if (!year) {
    throw new Error("Something went wrong with the year parsing")
  }

  const pathToDir = `advent-of-code/yr${year}`
  await mkdir(pathToDir, { recursive: true })
}

async function mkDayDir(year: string | undefined, day: string | undefined) {
  if (!year || !day) {
    throw new Error("Did not provide the correct arguments")
  }

  const pathToDir = `advent-of-code/yr${year}/day${day}`
  await mkdir(pathToDir, { recursive: true })
}

async function touchDayFiles(
  year: string | undefined,
  day: string | undefined
) {
  if (!year || !day) {
    throw new Error("Did not provide the correct arguments")
  }

  const pathToDir = `advent-of-code/yr${year}/day${day}`
  const mainFile = Bun.file(`${pathToDir}/main.ts`)
  const inputFile = Bun.file(`${pathToDir}/${day}.in`)
  const inputTestFile = Bun.file(`${pathToDir}/${day}.test.in`)

  if (await mainFile.exists()) {
    return
  }

  await Bun.write(mainFile, "// TODO: Implement the problem here later")

  if (await inputFile.exists()) {
    return
  }

  await Bun.write(inputFile, "")

  if (await inputTestFile.exists()) {
    return
  }

  await Bun.write(inputTestFile, "")
}

console.log(`==> Creating directory for Advent of Code - Year ${values.year}`)
await mkYearDir(values.year)

console.log(
  `==> Creating directory for Advent of Code - Year ${values.year} - Day ${values.day}`
)
await mkDayDir(values.year, values.day)

console.log(
  `==> Creating files for Advent of Code - Year ${values.year} - Day ${values.day}`
)
await touchDayFiles(values.year, values.day)

console.log(
  `==> Finished bootstrapping for Advent of Code - Year ${values.year} - Day ${values.day}`
)
