export class Solution {
  hasDuplicate(nums: number[]): boolean {
    return nums.length !== new Set(nums).size
  }
}
