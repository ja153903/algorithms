function numUniqueEmails(emails: string[]): number {
  return new Set(
    emails.map((email) => {
      const { localName, domainName } = getEmailParts(email)
      return `${localName}@${domainName}`
    })
  ).size
}

type Email = {
  localName: string
  domainName: string
}

function getEmailParts(email: string): Email {
  const [localName, domainName] = email.split("@")
  if (localName.includes("+")) {
    const [essential, _rest] = localName.split("+")
    const cleaned = essential.replaceAll(".", "")

    return { localName: cleaned, domainName }
  }

  const cleaned = localName.replaceAll(".", "")

  return { localName: cleaned, domainName }
}

export { numUniqueEmails }
