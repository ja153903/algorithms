function numIslands(grid: string[][]): number {
  let result = 0

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        result += 1
        dfs(grid, i, j)
      }
    }
  }

  return result
}

function dfs(grid: string[][], row: number, col: number) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] !== "1"
  ) {
    return
  }

  grid[row][col] = "#"

  dfs(grid, row + 1, col)
  dfs(grid, row - 1, col)
  dfs(grid, row, col + 1)
  dfs(grid, row, col - 1)
}

export { numIslands }
