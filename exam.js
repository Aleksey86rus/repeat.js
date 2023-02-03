

// Написать условие, при котором в консоль выводится ок
// Если мы попали в диапазон от 1 до 10 вкл


// if (num >= 1 && num <= 10) {
//   console.log('ok');
// } else {
//   console.log('not ok');
// }


let num1 = 3
let num2 = 711

// Написать программу, которая проверяет попалают ли 2 числа в диапазон от 1 до 10 вкл
// const isValidNum1 = num1 >= 1 && num1 <= 10
// const isValidNum2 = num2 >= 1 && num2 <= 10

// if (isValidNum1 && isValidNum2) {
//   console.log('ok');
// } else {
//   console.log('not ok');
// }


// Написать функцию которая провреят 2 числа, попали ли они в диапазон от 1 до 10 вкл


const checkRangeFrom1To10 = (num) => num >= 1 && num <= 10
const isRange = checkRangeFrom1To10(2)

const isValidTwoValues = (num1, num2) => {
  return checkRangeFrom1To10(num1)
    && checkRangeFrom1To10(num2)
}

// console.log(isValidTwoValues(1, 7));



// const checkRangeFrom1To10 = (num) => num >= 1 && num <= 10

// const isValidTwoValues = (...numbers) => {
//   return numbers.every((num) => checkRangeFrom1To10(num))
// }

// console.log(isValidTwoValues(1, 7, 6, 17, 8, 9, 5));


// some -> v1 || v2 || v3 ... || vN
// every -> v1 && v2 && v3 ... && vN

