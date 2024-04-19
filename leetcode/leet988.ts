import type { TreeNode } from "@/data-structures/trees"

function smallestFromLeaf(root: TreeNode | null): string {
  const paths: number[][] = []

  function preOrder(node: TreeNode | null, path: number[]) {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      paths.push([...path, node.val])
      return
    }

    preOrder(node.left, [...path, node.val])
    preOrder(node.right, [...path, node.val])
  }

  preOrder(root, [])

  return paths
    .map((path) => convertPathToString(path))
    .sort((a, b) => a.localeCompare(b))[0]
}

function convertPathToString(path: number[]): string {
  return path
    .reverse()
    .map((ascii) => String.fromCharCode(ascii + 97))
    .join("")
}

export { smallestFromLeaf }
