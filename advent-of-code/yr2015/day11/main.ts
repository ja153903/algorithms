const INPUT = "hepxcrrq";
// const INPUT = "abcdefgh"

const getIndexedCodePoint = (ch: string) => ch.charCodeAt(0) - 97;
const FORBIDDEN_CODE_POINTS = ["i", "o", "l"].map((ch) =>
  getIndexedCodePoint(ch),
);

function convertStringToCodePoints(line: string): number[] {
  const result = [];

  for (const char of line) {
    result.push(getIndexedCodePoint(char));
  }

  return result;
}

function hasIncreasingStraight(sequence: number[]): boolean {
  for (let i = 0; i < sequence.length - 2; i += 1) {
    if (
      sequence[i] - 1=== sequence[i + 1] &&
      sequence[i + 1] - 1 === sequence[i + 2]
    ) {
      return true;
    }
  }

  return false;
}

function hasForbiddenCodePoint(sequence: number[]): boolean {
  for (const codePoint of sequence) {
    if (FORBIDDEN_CODE_POINTS.includes(codePoint)) {
      return true;
    }
  }

  return false;
}

function hasNonOverlappingPairs(sequence: number[]): boolean {
  let pairs = 0;
  const previousEnds = new Set<number>();
  const previousPairs = new Set<string>();

  for (let i = 1; i < sequence.length; i += 1) {
    const str = `${sequence[i - 1]}${sequence[i]}`;
    if (
      sequence[i] === sequence[i - 1] &&
      !previousEnds.has(i - 1) &&
      !previousPairs.has(str)
    ) {
      pairs += 1;
      previousEnds.add(i);
      previousPairs.add(str);
    }
  }

  return pairs >= 2;
}

function incrementPassword(sequence: number[]): number[] {
  sequence[0] += 1;
  let carry = 0;

  for (let i = 0; i < sequence.length; i += 1) {
    sequence[i] += carry;

    if (sequence[i] === 26) {
      sequence[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }

  return sequence;
}

function generatePassword(password: string): string {
  let codePoints = convertStringToCodePoints(password).toReversed();

  while (true) {
    codePoints = incrementPassword(codePoints);
    if (
      hasIncreasingStraight(codePoints) &&
      !hasForbiddenCodePoint(codePoints) &&
      hasNonOverlappingPairs(codePoints)
    ) {
      return String.fromCharCode(
        ...codePoints.toReversed().map((codePoint) => codePoint + 97),
      );
    }
  }
}

const part1 = generatePassword(INPUT);

console.log(`AoC 2015 - Day 11 - Part 1: ${part1}`);

const part2 = generatePassword(part1);

console.log(`AoC 2015 - Day 11 - Part 2: ${part2}`);
