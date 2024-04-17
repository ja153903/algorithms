const INPUT = "iwrupvqb"

function getSecretSauce(prefix: string = "00000"): number {
  const hasher = new Bun.CryptoHasher("md5")

  let i = 1

  while (true) {
    hasher.update(`${INPUT}${i}`)
    const output = hasher.digest("hex")
    if (output.startsWith(prefix)) {
      return i
    }

    i += 1
  }
}

const part1 = getSecretSauce()

console.log(`AoC 2015 - Day 4 - Part 1: ${part1}`)

const part2 = getSecretSauce("000000")

console.log(`AoC 2015 - Day 4 - Part 2: ${part2}`)
