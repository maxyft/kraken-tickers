export default (storedNames: string[], responseName: string): string => {
  const pairs = storedNames.map(pair => pair.split('/'))
  let targetPair = null

  pairs.forEach(pair => {
    if (responseName.includes(pair[0]) && responseName.includes(pair[1])) {
      targetPair = pair.join('/')
    }
  })
  return targetPair
}