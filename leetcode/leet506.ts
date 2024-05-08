function findRelativeRanks(score: number[]): string[] {
  const rankByScore = Object.fromEntries(
    [...score].sort((a, b) => b - a).map((score, index) => [score, index])
  )

  return score.map((score) => {
    switch (rankByScore[score]) {
      case 0:
        return "Gold Medal"
      case 1:
        return "Silver Medal"
      case 2:
        return "Bronze Medal"
      default:
        return (rankByScore[score] + 1).toString()
    }
  })
}

export { findRelativeRanks }
