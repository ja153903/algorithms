const INPUT = "1113222113";

function lookAndSay(input: string): string {
  const result: string[] = [];
  let current = input[0];
  let count = 1;

  for (let i = 1; i < input.length; i += 1) {
    if (current === input[i]) {
      count += 1;
    } else {
      result.push(`${count}${current}`);
      current = input[i];
      count = 1;
    }
  }

  result.push(`${count}${current}`);

  return result.join('');
}

function applyLookAndSay(input: string, cycles: number =  40): number {
  for (let i = 0; i < cycles; i += 1) {
    input = lookAndSay(input);
  }

  return input.length;
}

const part1 = applyLookAndSay(INPUT);

console.log(`AoC 2015 - Day 10 - Part 1: ${part1}`);

const part2 = applyLookAndSay(INPUT, 50);

console.log(`AoC 2015 - Day 10 - Part 2: ${part2}`);
