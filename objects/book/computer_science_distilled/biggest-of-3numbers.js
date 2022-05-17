// Поиск наибольшего из трех чисел
function biggestOfThree(a, b, c) {
    let result = ''
    if (a > b && a > c) {
        return result = a
    } else if (b > a && b > c) {
        return result = b
    } else if (c > a && c > b) {
        return result = c
    }
    return result
}

function booleanResult(A, B, C, D) {
    // ---------------------------------
    // A: Сервер перегревается.
    // B: Кондиционирование отключено.
    // C: Не работает кулер.
    // D: Сервер вышел из строя. 
    //
    // (A AND B)OR(A AND C) → D.
    // ---------------------------------


    // if ((A && B) || (A && C)=== D) {
    //     return true
    // } else {
    //     return false
    // }
    // ...result true
    
    // Правило ДИСТРИУТИВНОСТИ
    // if ((A && B) || (A && C)=== D) {
    //     return true
    // } else {
    //     return false
    // }
    // ...result true

    // de Morgan rule
    // if (!D == !A || (!B && !C)) {
    //     return true
    // } else {
    //     return false  
    // }
    // ...result true
}

// console.log(biggestOfThree(1, 3, 2))
console.log(booleanResult(1, 2, 3, 4))