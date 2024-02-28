import { TreeNode } from "../data-structures/trees";

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }

  // one way i can think of doing this is by using level order traversal
  const queue: TreeNode[] = [];
  queue.push(root);

  const levels: number[][] = [];

  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < size; i += 1) {
      const front = queue.shift();
      if (!front) {
        throw new Error("Something went wrong here");
      }

      currentLevel.push(front.val);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    levels.push(currentLevel);
  }

  return levels[levels.length - 1][0];
}

export { findBottomLeftValue };
