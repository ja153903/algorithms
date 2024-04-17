/**
 * Given a binary array `nums`, return the *maximum length of a contiguous subarray with
 * equal number of `0` and `1`*.
 */
function findMaxLength(nums: number[]): number {
  const map = new Map<number, number>()
  let sum = 0
  let res = 0

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i] === 1 ? 1 : -1

    // If the sum is 0, this means we have equal parts 0s and 1s
    // so we have to update our resulting length to be i + 1
    if (sum === 0) {
      res = i + 1
    } else if (map.has(sum)) {
      // if we've seen the sum before, then we should update the difference
      // then we should update res to be the max between the current value
      // and the size of the window since we last had that sum.
      res = Math.max(res, i - (map.get(sum) ?? 0))
    } else {
      // otherwise we just set the sum
      map.set(sum, i)
    }
  }

  return res
}

export { findMaxLength }
