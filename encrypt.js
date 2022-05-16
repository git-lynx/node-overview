const textToAlphabet = (text) => {
    let result = ''

    for (i = 0; i < text.length; i++) {
        let letter = text[i];

        letter === ' ' ? result += "   " : result += letter.charCodeAt() - 96 + " "

    }
    return result;
}

console.log(textToAlphabet('abc bb dd text'))

for (i = 0; i < text.length; i++) {
    let letter = text[i];
    if (letter === ' ') {
        result += '   '
    } else {
        result += letter.charCodeAt() - 96 + ' '
    }
    return result
}