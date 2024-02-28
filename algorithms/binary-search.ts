export function binarySearch(items: number[], target: number): number {
  let left = 0, right = items.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (items[mid] === target) {
      return mid;
    } else if (items[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
