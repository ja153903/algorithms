export type AdjancencyList<T = string | number> = Map<T, T[]>

export function buildAdjacencyList<T = string | number>(
  edges: [T, T][],
  isDirected: boolean = false
): AdjancencyList<T> {
  const graph: Map<T, T[]> = new Map()

  for (const [u, v] of edges) {
    const uNode = graph.get(u)
    if (!uNode) {
      graph.set(u, [])
    }

    const vNode = graph.get(v)
    if (!vNode) {
      graph.set(v, [])
    }

    uNode?.push(v)

    if (!isDirected) {
      vNode?.push(u)
    }
  }

  return graph
}
