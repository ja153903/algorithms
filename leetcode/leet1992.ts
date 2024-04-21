function findFarmland(land: number[][]): number[][] {
  // if we find a 1, start a search for the top left, top right, bottom left, and bottom right corners that all still have 1s
  const result: number[][] = []

  for (let i = 0; i < land.length; i += 1) {
    for (let j = 0; j < land[i].length; j += 1) {
      if (land[i][j] === 1) {
        const coordinates: number[][] = []
        dfs(land, i, j, coordinates)

        coordinates.sort((a, b) => {
          const distFromOrigin = (coord: number[]) =>
            Math.pow(coord[0] - i, 2) + Math.pow(coord[1] - j, 2)
          return distFromOrigin(b) - distFromOrigin(a)
        })

        result.push([i, j, coordinates[0][0], coordinates[0][1]])
      }
    }
  }

  return result
}

// This DFS should really only go to the right or down
// otherwise we should've found the other nodes already
function dfs(
  land: number[][],
  row: number,
  col: number,
  coordinates: number[][]
) {
  if (
    row < 0 ||
    col < 0 ||
    row >= land.length ||
    col >= land[0].length ||
    land[row][col] !== 1
  ) {
    return
  }

  land[row][col] = -1

  coordinates.push([row, col])

  dfs(land, row + 1, col, coordinates)
  dfs(land, row, col + 1, coordinates)
}

export { findFarmland }
