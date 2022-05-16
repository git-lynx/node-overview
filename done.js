// //Sum. 
// //Функция подсчета суммы в диапазоне целых чисел.

// let sum = (a, b) => {
// let result = a + b;
//     if (a % 1 === 0 && b % 1 === 0) return result;
// };

// console.log(sum(1, 3));

// //Factorial.
// //Функция подсчета факториала до заданного элемента.

// let factorial = (n) => {
//     result = 1;
//     while (n) {
//         result = result * n--
//     }
//     return result
// };

// let factorial = (n) => {
//     let result = 1;
//     for ( i = 1; i <= n; ++i) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5))

// Функція отримує текст та повертає його представлення в рамці



// function renderTextInFrame(text) {
//   let star = "*";
//   let space = " ";
//   let length = text.length;
//   let result = "";




// function sumInRange(start,end) {
//   let min = Math.min(start,end);
//   let max = Math.max(start,end);
//   let result = 0;
//   for (i = min; i <= max; ++i){
// 	result += i;
//   }
//   return result;
// }
// console.log(sumInRange(1, 4))
// function printAlphabet() {
//   let alphabet = 'A 1\nB 2\nC 3\nD 4\nE 5\nF 6\nG 7\nH 8\nI 9\nJ 10\nK 11\nL 12\nM 13\nN 14\nO 15\nP 16\nQ 17\nR 18\nS 19\nT 20\nU 21\nV 22\nW 23\nX 24\nY 25\nZ 26';
//   return alphabet;
// }
// console.log(printAlphabet());

// function printAlphabet() {
//   result = '';
//   for (i = 1; i <= 26; i++) {
//     let letter = String.fromCharCode(64 + i);
//     result += `${letter} ${i}\n`;
//   }
//   console.log(result)
// }

// function printAlphabet(columnCount) {
//   letters = 26;
//   maxHeigth = Math.ceil(letters / columnCount);
//   maxCharCode = letters + 64;

//   for (i = 0; i < 26; i++) {
//     console.log(
//       `${String.fromCharCode(65 + i)}\t${String.fromCharCode(
//         65 + maxHeigth + i
//       )}\t${String.fromCharCode(65 + maxHeigth + maxHeigth + i)}\t${
//         65 + maxHeigth * 3 + i > maxCharCode
//           ? ""
//           : String.fromCharCode(65 + maxHeigth + maxHeigth + maxHeigth + i)
//       }`
//     );
//     if (i == maxHeigth) {
//       break;
//     }
//   }
// }

// printAlphabet(4);

// function isValidParentheses(expression) {
//     let chars = expression.split(''),
//         stack = [],
//         open = ['('],
//         close = [')'],
//         closeIndex,
//         openIndex;
//     for (let i = 0, len = chars.length; i < len; i++) {
//        openIndex = open.indexOf(chars[i]);
//        closeIndex = close.indexOf(chars[i]);
//        if (openIndex !== -1) {
//            stack.push(openIndex);
//            continue;
//        }
//        if (closeIndex !== -1) {
//            openIndex = stack.pop();
//            if (closeIndex !== openIndex) {
//                return false;
//            }
//        }
//     }
//     if (stack.length !== 0) {
//         return false;
//     }
//     return true;
// }
// console.log(isValidParentheses('(())') ? 'OK' : 'ERROR');
