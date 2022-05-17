function frequencyInText(text) {
  let textToArray = text.toLowerCase().replace(/[.,]/g, ' ').split(' ').filter(String)
  frequencyMap = new Map()

  for (const word of textToArray) {
    let quantity = frequencyMap.get(word) + 1

    frequencyMap.has(word) ? frequencyMap.set(word, quantity) : frequencyMap.set(word, 1)

  }
  return frequencyMap
}
console.log(frequencyInText('abc abc test test day day day UP UP UP asd . sr . sr .'))