export function paintHTMLWords(
  selector: string,
  { firstRange = 0, lastRange = 0 }: { firstRange?: number; lastRange?: number },
  classHighlight = 'highlight'
) {
  const element = document.querySelector(selector)
  if (element) {
    const text = element.innerHTML
    const words = text.split(' ')
    const modifiedWords = []

    if (firstRange !== 0 && lastRange !== 0) {
      modifiedWords.push(
        ...words.slice(0, firstRange).join(' '),
        `<span class="${classHighlight}">` + words.slice(firstRange, lastRange).join(' ') + '</span>',
        ...words.slice(lastRange).join(' ')
      )
    } else if (firstRange !== 0) {
      modifiedWords.push(
        `<span class="${classHighlight}">` + words.slice(0, firstRange).join(' ') + '</span>',
        ...words.slice(firstRange)
      )
    } else if (lastRange !== 0) {
      modifiedWords.push(
        ...words.slice(0, lastRange + 1),
        `<span class="${classHighlight}">` + words.slice(lastRange + 1).join(' ') + '</span>'
      )
    }

    const modifiedText = modifiedWords.join(' ')
    element.innerHTML = modifiedText
  }
}
