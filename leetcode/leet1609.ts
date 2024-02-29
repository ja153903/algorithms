import type { TreeNode } from "../data-structures/trees";

// This algorithms runs in O(n) time and space
function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  const nodes: number[][] = [];
  const queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;
    const level: number[] = [];

    for (let i = 0; i < size; i += 1) {
      const front = queue.shift();
      if (!front) {
        throw new Error("Something went wrong with the test input");
      }

      level.push(front.val);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    nodes.push(level);
  }

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = 0; j < nodes[i].length; j += 1) {
      if (
        i % 2 === 0 &&
        (nodes[i][j] % 2 === 0 || (j > 0 && nodes[i][j - 1] >= nodes[i][j]))
      ) {
        return false;
      }

      if (
        i % 2 === 1 &&
        (nodes[i][j] % 2 === 1 || (j > 0 && nodes[i][j - 1] <= nodes[i][j]))
      ) {
        return false;
      }
    }
  }

  return true;
}

export { isEvenOddTree };
