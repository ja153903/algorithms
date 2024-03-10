import { parseByLine, readFile } from "@/advent-of-code/utils";

const data = await readFile(import.meta.dir, "day9.in");

type Edge = { u: string; v: string; weight: number };
type Destination = { dst: string; weight: number };
type Graph = Map<string, Destination[]>;

const EDGE_REGEX = /(?<u>\w+) to (?<v>\w+) = (?<weight>\d+)/gm;

const edges = parseByLine(data, (line: string) => buildEdge(line));
const graph = buildGraph(edges);

function buildEdge(line: string): Edge {
  for (const match of line.matchAll(EDGE_REGEX)) {
    const u = match.groups?.u ?? "";
    const v = match.groups?.v ?? "";
    const weight = Number(match.groups?.weight ?? "");

    return { u, v, weight };
  }

  throw new Error("This error should not actually happen.");
}

function buildGraph(edges: Edge[]): Graph {
  const graph = new Map<string, Destination[]>();

  for (const { u, v, weight } of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }

    if (!graph.has(v)) {
      graph.set(v, []);
    }

    graph.get(u)?.push({ dst: v, weight });
    graph.get(v)?.push({ dst: u, weight });
  }

  return graph;
}

function walk(graph: Graph, shouldWalkFurther: boolean = false): number {
  const srcNodes = Array.from(graph.keys());
  let result = shouldWalkFurther ? -Infinity : Infinity;

  const cmp = shouldWalkFurther ? Math.max : Math.min;

  function dfs(src: string, visited: Set<string>, weight: number): number {
    if (visited.size === srcNodes.length) {
      return weight;
    }

    const children = graph.get(src) ?? [];

    let interim = shouldWalkFurther ? -Infinity : Infinity;

    for (const child of children) {
      if (visited.has(child.dst)) {
        continue;
      }

      visited.add(child.dst);
      interim = cmp(interim, dfs(child.dst, visited, weight + child.weight));
      visited.delete(child.dst);
    }

    return interim;
  }

  for (const node of srcNodes) {
    const visited = new Set<string>([node]);
    const total = dfs(node, visited, 0);
    result = cmp(result, total);
  }

  return result;
}

const part1 = walk(graph);

console.log(`AoC 2015 - Day 9 - Part 1: ${part1}`);

const part2 = walk(graph, true);

console.log(`AoC 2015 - Day 9 - Part 2: ${part2}`);
