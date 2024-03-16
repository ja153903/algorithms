/**
 * Given a binary array `nums`, return the *maximum length of a contiguous subarray with
 * equal number of `0` and `1`*.
 */
function findMaxLength(nums: number[]): number {
  const map = new Map<number, number>();
  let sum = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i] === 1 ? 1 : -1;

    // if the sum is 0, this means that we have
    // an equal number of 0 and 1
    if (sum === 0) {
      res = i + 1;
    } else if (map.has(sum)) {
      res = Math.max(res, i - (map.get(sum) ?? 0));
    } else {
      map.set(sum, i);
    }
  }

  return res;
}

export { findMaxLength };
