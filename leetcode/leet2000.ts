function reversePrefix(word: string, ch: string): string {
  const indexOf = word.indexOf(ch)

  if (indexOf === -1) {
    return word
  }

  return (
    word
      .slice(0, indexOf + 1)
      .split("")
      .reverse()
      .join("") + word.slice(indexOf + 1)
  )
}

export { reversePrefix }
