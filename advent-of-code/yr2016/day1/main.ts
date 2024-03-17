import { TODO, readFile } from "@/advent-of-code/utils";

const data = await readFile(import.meta.dir, "day1.in");

type Direction = "north" | "south" | "east" | "west";
type Rotation = "L" | "R";
type Instruction = { rotation: Rotation; magnitude: number };

const instructions: Instruction[] = data
  .split(", ")
  .filter(Boolean)
  .map((line: string) => {
    const rotation = line[0] as Rotation;
    const magnitude = Number(line.substring(1));

    return { rotation, magnitude };
  });

function walk(instructions: Instruction[]): number {
  let row = 0,
    col = 0,
    direction: Direction = "north";

  for (const instruction of instructions) {
    direction = updateDirection(direction, instruction.rotation);
    const coordinate = updateCoordinate({
      row,
      col,
      direction,
      magnitude: instruction.magnitude,
    });

    row = coordinate.row;
    col = coordinate.col;
  }

  return Math.abs(row) + Math.abs(col);
}

function updateCoordinate({
  row,
  col,
  magnitude,
  direction,
}: {
  row: number;
  col: number;
  magnitude: number;
  direction: Direction;
}): { row: number; col: number } {
  switch (direction) {
    case "east":
      return { row, col: col + magnitude };
    case "north":
      return { row: row - magnitude, col };
    case "south":
      return { row: row + magnitude, col };
    case "west":
      return { row, col: col - magnitude };
  }
}

function updateDirection(direction: Direction, rotation: Rotation): Direction {
  if (rotation === "L") {
    switch (direction) {
      case "east":
        return "north";
      case "north":
        return "west";
      case "south":
        return "east";
      case "west":
        return "south";
    }
  }

  switch (direction) {
    case "east":
      return "south";
    case "north":
      return "east";
    case "south":
      return "west";
    case "west":
      return "north";
  }
}

const part1 = walk(instructions);

console.log(`AoC 2016 - Day 1 - Part 1: ${part1}`);

function walkUntilDupe(instructions: Instruction[]): number {
  const visited = new Set<string>();
  let row = 0,
    col = 0,
    direction: Direction = "north";

  for (const instruction of instructions) {
    direction = updateDirection(direction, instruction.rotation);
    const coordinate = updateCoordinate({
      row,
      col,
      direction,
      magnitude: instruction.magnitude,
    });

    switch (direction) {
      case "east":
        for (let j = col; j < coordinate.col; j += 1) {
          const hash = `${row},${j}`;
          if (visited.has(hash)) {
            return Math.abs(row) + Math.abs(j);
          }

          visited.add(hash);
        }
        break;
      case "west":
        for (let j = col; j > coordinate.col; j -= 1) {
          const hash = `${row},${j}`;
          if (visited.has(hash)) {
            return Math.abs(row) + Math.abs(j);
          }

          visited.add(hash);
        }
        break;
      case "north":
        for (let i = row; i > coordinate.row; i -= 1) {
          const hash = `${i},${col}`;
          if (visited.has(hash)) {
            return Math.abs(i) + Math.abs(col);
          }

          visited.add(hash);
        }
        break;
      case "south":
        for (let i = row; i < coordinate.row; i += 1) {
          const hash = `${i},${col}`;
          if (visited.has(hash)) {
            return Math.abs(i) + Math.abs(col);
          }

          visited.add(hash);
        }
        break;
    }

    row = coordinate.row;
    col = coordinate.col;
  }

  return Math.abs(row) + Math.abs(col);
}

const part2 = walkUntilDupe(instructions);

console.log(`AoC 2016 - Day 1 - Part 2: ${part2}`);
