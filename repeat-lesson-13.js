// Задачи по теме 13. Function types
// 1. Задача (FD & FE & AF)
// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.


// FD
// let userText = 'hello';
// function getNameTypeData(param) {
//   return typeof param
// }
// console.log(getNameTypeData(userText));


// FE
// let userNum = 50;
// const getNameTypeData = function (param) {
//   return typeof param
// }
// console.log(getNameTypeData(userNum));


// AF
// let userVariable = () => { };
// const getNameTypeData = (param) => {
//   return typeof param
// }
// console.log(getNameTypeData(userVariable));

// ================================================================================================ //
// 2. Задача (AF)
// Написать функцию, которая проверяет, является ли переменная типом null.


// const isNull = (par) => {
//   return par === null
// }

// const isNull = par => par === null


// console.log(isNull(null));
// console.log(isNull(''));
// console.log(isNull('abc'));
// console.log(isNull([]));
// console.log(isNull({}));
// console.log(isNull(false));

// ================================================================================================ //

// 3. Задача (AF)
// Написать функцию, которая проверяет переданное число на чётность.


// const checkEvenNumber = (num) => {
//   return num % 2 === 0
// }

// const checkEvenNumber = num => num % 2 === 0


// console.log(checkEvenNumber(10));
// console.log(checkEvenNumber(11));

// ================================================================================================ //

// 4. Задача (FE)
// Написать функцию, которая склеивает переданные строки через пробел. Функция работает, как с двумя, так и со многими переданными переменными.


// const gluesTheTransmittedString = function (...params) {
// return params.join(' ')
// }

// console.log(gluesTheTransmittedString('one', 'two', 'three', 'four'));

// ================================================================================================ //

// 5. Задача (FE)
// Написать функцию, на вход которой подаётся массив строк, функция возвращает одну строку (склеенную из всех в массиве).


// const userArr = ['one', 'two', 'three', 'four', 'eight']

// const getOneString = function (arr) {
//   return arr.join('')
// }

// console.log(getOneString(userArr));


// ================================================================================================ //

// 6. Задача (FD)
// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 4.


// const userNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function getNewArray(object) {
//   const newArray = [];
//   for (const el of object) {
//     if (el % 4 === 0) {
//       newArray.push(el)
//     }
//   }
//   return newArray
// }

// console.log(getNewArray(userNumbers));


// ================================================================================================ //

// 7. Задача (FD)
// Написать функцию, на вход которой подаётся любое количество чисел, функция возвращает массив из чисел, которые делятся на 3.


// function getArrayDividedIntoFour(...params) {
//   const newArray = [];
//   for (const el of params) {
//     if (el % 3 === 0) {
//       newArray.push(el)
//     }
//   }
//   return newArray
// }

// console.log(getArrayDividedIntoFour(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// ================================================================================================ //

// 8. Задача (FD)
// Дана функция, привести её к виду Function Decalration.
// const checkMoreTen = num => num > 10;


// function checkMoreTen(num) {
//   return num > 10
// }

// console.log(checkMoreTen(12));

// ================================================================================================ //

// 9. Задача (FE)
// Дана функция, привести функцию к виду Function Expression.

// const getGender = text => text === 'm' ? 'male' : 'female';


// const getGender = function (text) {
//   return text === 'm' ? 'male' : 'famale'
// }

// console.log(getGender('m'));
// console.log(getGender('M'));


// ================================================================================================ //

// 10. Задача (AF)
// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 1) {
//     return x * y * z;
// }


// const test = (x, y, z = 1) => {
//   return x * y * z
// }

// console.log(test(2, 3));
// console.log(test(2, 3, 5));


// ================================================================================================ //

// 11. Задача (AF)
// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 0) {
//     console.log(x + y + z);
// }


// const test = (x, y, z = 0) => {
//   return x + y + z
// }

// console.log(test(5, 5, 5));
// console.log(test(5, 5));


// ================================================================================================ //

// 12. Задача (AF || FE || FD)
// Написать функцию, на вход которой подаёт неизвестное количество строк. Функция вовзаращает число - количество всех символов из всех переданных строк.


// let userText = 'it`s getting warmer outside today.'

// function getQuantitySymbolsTheAllString(str) {
//   const str2 = str.split('')
//   let countLetters = 0;
//   for (let i = 0; i < str2.length; i++) {
//     if (str2[i] !== ' ') {
//       countLetters++
//     }
//   }
//   console.log(countLetters);
// }

// getQuantitySymbolsTheAllString(userText);





// AF
// const getQuantitySymbolsTheAllString = (...params) => {
//   return params.join('').length
// }

// FE
// const getQuantitySymbolsTheAllString = function (...params) {
//   return params.join('').length
// }

// FD
// function getQuantitySymbolsTheAllString(...params) {
//   return params.join('').length
// }

// console.log(getQuantitySymbolsTheAllString('it`s', 'getting', ''));
// console.log(getQuantitySymbolsTheAllString('it`s', 'getting', 'warmer'));
// console.log(getQuantitySymbolsTheAllString('it`s', 'getting', 'warmer', 'outside'));
// console.log(getQuantitySymbolsTheAllString('it`s', 'getting', 'warmer', 'outside', 'today'));
// console.log(getQuantitySymbolsTheAllString('it`s', 'getting', 'warmer', 'outside', 'today', '.'));


// console.log(getQuantitySymbolsTheAllString('it`s')); // 4
// console.log(getQuantitySymbolsTheAllString('getting')); // 7
// console.log(getQuantitySymbolsTheAllString('warmer')); // 6
// console.log(getQuantitySymbolsTheAllString('outside')); // 7
// console.log(getQuantitySymbolsTheAllString('today')); // 5
// console.log(getQuantitySymbolsTheAllString('.')); // 1


// ================================================================================================ //

// 13. Задача (AF || FE || FD)
// Написать функцию, на вход которой подаёт любое количество чисел. Функция возвращает сумму всех чисел.

// AF
// const anyQuantityNumbers = (...params) => {
//   let countNumbers = 0;
//   for (const el of params) {
//     countNumbers += el
//   }
//   return countNumbers
// }

// console.log(anyQuantityNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// FE
// const anyQuantityNumbers = function (...params) {
//   let countNumbers = 0;
//   for (const el of params) {
//     countNumbers += el
//   }
//   return countNumbers
// }
// console.log(anyQuantityNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// FD
// function anyQuantityNumbers(...params) {
//   let countNumbers = 0;
//   for (const el of params) {
//     countNumbers += el
//   }
//   return countNumbers
// }
// console.log(anyQuantityNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// ================================================================================================ //

// TODO: 14. Задача (AF || FE || FD)
// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наименьшее из них.


// const userArray = [10, 20, 30, 40, 50]; //* А так, не работает.
// console.log(Math.min(...[10, 20, 30, 40, 50])); //* Так работает MAth.min
// console.log(Array.isArray(Math.max(userArray)));
// console.log(Array.isArray(Math.max(...[userArray])));
// console.log(typeof Math.max(userArray));
// console.log(typeof Math.max(...[userArray]));



// const userArray = [10, 20, 30, 40, 50];
//* Метод с Math.min.apply()
// const getOneSmallestNumber = (arr) => {
//   return Math.min.apply(Math, arr)
// }
// console.log(getOneSmallestNumber(userArray));


// AF
// const userArray = [10, 20, 30, 40, 50];
// const getOneSmallestNumber = (array) => {
//   let minNumber = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < minNumber) {
//       minNumber = array[i]
//     }
//   }
//   console.log(minNumber);
// }
// getOneSmallestNumber(userArray);


// FE
// const userArray = [10, 20, 30, 40, 50];
// const getOneSmallestNumber = function (array) {
//   let minNumber = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < minNumber) {
//       minNumber = array[i]
//     }
//   }
//   console.log(minNumber);
// }
// getOneSmallestNumber(userArray);


// FD
// const userArray = [10, 20, 30, 40, 50];
// function getOneSmallestNumber(array) {
//   let minNumber = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < minNumber) {
//       minNumber = array[i]
//     }
//   }
//   console.log(minNumber);
// }
// getOneSmallestNumber(userArray);


// ================================================================================================ //

// TODO 15. Задача
// Что вернёт фунция tester?

// const tester = (...numbers) => typeof numbers; //  Без typeof [3,7,4,1]
// let result = tester(3, 7, 4, 1); // ? Object
// console.log(result);

// Хочется уясниь порядок действий. Что от куда и куда передается в аднном коде?


// ================================================================================================ //

// 16. Задача
// Что вернёт фунция tester?

// const tester = numbers => typeof numbers;
// let result = tester([3, 7, 4, 1]); // ? Object


// ================================================================================================ //

// 17. Задача
// Что вернёт фунция tester?

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]); // ? true


// ================================================================================================ //

// 18. Задача (FD)
// Перепишите Arrow Function в Function Declaration.

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]);


// FD
// function tester(numbers) {
//   let result = Array.isArray(numbers)
//   return result
// }

// console.log(tester([3, 7, 4, 1]));


// ================================================================================================ //

// 19. Задача (AF)
// Сделать рефакторинг функции isLongString.

// const isLongString = (string) => {
//     if (string.length > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }


// const isLongString = (string) => string.length > 10 ? true : false

// console.log(isLongString('abcdifghjkl'));
// console.log(isLongString('abcdifghj'));

// ================================================================================================ //

// 20. Задача (AF)
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.


// const getTheProductOfTwoNumbers = (num1, num2) => {
//   let result = num1 * num2
//   return {
//     num1,
//     num2,
//     'Произведение двух чисел': result
//   }
// }

// console.log(getTheProductOfTwoNumbers(10, 50));

// ================================================================================================ //

// ★ Задачи повышенной сложности ★
// ★ 21. Задача ★
// Что выведется в консоль?

const tester = numbers => Array.isArray(numbers);
const res = changeBoolToString(tester([3, 7, 4, 1]));

function changeBoolToString(a) {
  return a ? "array" : "Not an Array";
}

console.log(res);

// TODO:Порядок действий?
// ================================================================================================ //

// ★ 22. Задача ★
// Что выведется в консоль?

// const arr = [3, 7, 4, 1];
// const tester = numbers => Array.isArray(numbers);

// const res = changeBoolToString(tester);

// function changeBoolToString(a) {
//     return a(arr) ? "array" : "Not an Array";
// }

// console.log(res);