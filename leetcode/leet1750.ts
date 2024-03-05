function minimumLength(s: string): number {
  let left = 0;
  let right = s.length - 1;
  const list = s.split("");

  while (left < right) {
    if (list[left] !== list[right]) {
      break;
    }

    const leftChar = s[left];
    let leftStart = left;
    let leftCount = 0;

    while (left <= right && s[left] === leftChar) {
      leftCount += 1;
      left += 1;
    }

    const rightChar = s[right];
    let rightStart = right;
    let rightCount = 0;

    while (left <= right && s[right] === rightChar) {
      rightCount += 1;
      right -= 1;
    }

    for (let i = leftStart; i < leftStart + leftCount; i += 1) {
      list[i] = "";
    }

    for (let i = rightStart - rightCount + 1; i < rightStart + 1; i += 1) {
      list[i] = "";
    }
  }

  return list.filter((item) => !!item).length;
}

export { minimumLength };
