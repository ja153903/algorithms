import { parseByLine, readFile } from "@/advent-of-code/utils";

type HappinessNode = {
  src: string;
  dst: string;
  happiness: number;
};

const data = await readFile(import.meta.dir, "day13.in");

const HAPPINESS_REGEX =
  /(?<gains>\w+) would (?<gainOrLose>\w+) (?<happiness>\d+) happiness units by sitting next to (?<gainFrom>\w+)./gm;

const lines = parseByLine<HappinessNode>(data, (line: string) => {
  for (const match of line.matchAll(HAPPINESS_REGEX)) {
    const dst = match.groups?.gains ?? "";
    const src = match.groups?.gainFrom ?? "";
    const gainOrLose = match.groups?.gainOrLose ?? "";
    const happiness = Number(match.groups?.happiness ?? "");

    return {
      src,
      dst,
      happiness: gainOrLose === "gain" ? happiness : -happiness,
    };
  }

  throw new Error("Something went wrong with the parsing");
});

function getPermutations(names: string[]): string[][] {
  const result: string[][] = [];

  for (let i = 0; i < names.length; i += 1) {
    backtrack(names, [names[i]], result);
  }

  return result;
}

function backtrack(names: string[], path: string[], result: string[][]) {
  if (path.length === names.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < names.length; i += 1) {
    if (path.includes(names[i])) {
      continue;
    }

    path.push(names[i]);
    backtrack(names, path, result);
    path.pop();
  }
}

type GraphNode = Pick<HappinessNode, "dst" | "happiness">;

function buildGraph(happiness: HappinessNode[]): Map<string, GraphNode[]> {
  const map = new Map<string, GraphNode[]>();

  for (const node of happiness) {
    const { src, dst, happiness } = node;
    if (!map.has(src)) {
      map.set(src, []);
    }

    if (!map.has(dst)) {
      map.set(dst, []);
    }

    map.get(src)?.push({ dst, happiness });
  }
  return map;
}

function computeHappiness(
  order: string[],
  graph: Map<string, GraphNode[]>,
): number {
  let currentScore = 0;

  for (let i = 0; i < order.length; i += 1) {
    let prev: GraphNode[] | undefined;
    let curr: GraphNode[] | undefined;

    if (i === 0) {
      prev = graph.get(order[order.length - 1]);
      curr = graph.get(order[i]);
    } else {
      prev = graph.get(order[i - 1]);
      curr = graph.get(order[i]);
    }

    if (!prev || !curr) {
      return 0;
    }

    let prevNodeInCurr: GraphNode | undefined;
    if (i === 0) {
      prevNodeInCurr = curr.find(
        (node) => node.dst === order[order.length - 1],
      );
    } else {
      prevNodeInCurr = curr.find((node) => node.dst === order[i - 1]);
    }

    const currNodeInPrev = prev.find((node) => node.dst === order[i]);

    if (!prevNodeInCurr || !currNodeInPrev) {
      return 0;
    }

    currentScore += prevNodeInCurr.happiness + currNodeInPrev.happiness;
  }

  return currentScore;
}

function getResult(lines: HappinessNode[]): number {
  const graph = buildGraph(lines);
  const uniqueNames = new Set<string>();

  lines.forEach(({ src, dst }) => {
    uniqueNames.add(src);
    uniqueNames.add(dst);
  });

  const permutations = getPermutations(Array.from(uniqueNames));
  const totals = permutations.map((permutation) =>
    computeHappiness(permutation, graph),
  );

  return Math.max(...totals);
}

console.log(`AoC 2015 - Day 13 - Part 1: ${getResult(lines)}`);

function getResultForPt2(lines: HappinessNode[]): number {
  const graph = buildGraph(lines);
  const uniqueNames = new Set<string>();

  lines.forEach(({ src, dst }) => {
    uniqueNames.add(src);
    uniqueNames.add(dst);
  });

  for (const value of graph.values()) {
    value.push({ dst: "Jaime", happiness: 0 });
  }
  graph.set(
    "Jaime",
    Array.from(uniqueNames).map((name) => ({ dst: name, happiness: 0 })),
  );

  uniqueNames.add("Jaime");

  const permutations = getPermutations(Array.from(uniqueNames));
  const totals = permutations.map((permutation) =>
    computeHappiness(permutation, graph),
  );

  let res = 0;

  for (const total of totals) {
    res = Math.max(res, total);
  }

  return res;
}

console.log(`AoC 2015 - Day 13 - Part 2: ${getResultForPt2(lines)}`);
