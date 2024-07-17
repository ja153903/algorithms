import { IMPOSSIBLE_TO_NARROW_ERROR } from "@/constants/error"
import type { AdjancencyList } from "@/data-structures/graphs"

export function bfs<T = string | number>(graph: AdjancencyList<T>, src: T) {
  const queue: T[] = []
  const visited: Set<T> = new Set()

  queue.push(src)
  visited.add(src)

  while (queue.length > 0) {
    const front = queue.shift()
    if (!front) {
      throw new Error(IMPOSSIBLE_TO_NARROW_ERROR)
    }

    console.log(`Visiting Node(value=${front})`)

    const children = graph.get(front) ?? []

    for (const child of children) {
      if (visited.has(child)) {
        continue
      }

      queue.push(child)
      visited.add(child)
    }
  }
}

export function dfs<T = string | number>(
  graph: AdjancencyList<T>,
  visited: Set<T>,
  node: T
) {
  console.log(`Visiting Node(value=${node})`)

  const children = graph.get(node) ?? []

  for (const child of children) {
    if (visited.has(child)) {
      continue
    }

    visited.add(child)
    dfs(graph, visited, child)
  }
}
