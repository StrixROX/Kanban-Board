export function getTitleCase(text) {
  const textParts = text?.split(' ') || []
  for (let i in textParts) {
    textParts[i] = textParts[i][0].toUpperCase() + textParts[i].slice(1)
  }

  return textParts.join(' ')
}