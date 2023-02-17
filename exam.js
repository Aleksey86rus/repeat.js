

// Написать условие, при котором в консоль выводится ок
// Если мы попали в диапазон от 1 до 10 вкл


// if (num >= 1 && num <= 10) {
//   console.log('ok');
// } else {
//   console.log('not ok');
// }


// let num1 = 3
// let num2 = 711

// Написать программу, которая проверяет попалают ли 2 числа в диапазон от 1 до 10 вкл
// const isValidNum1 = num1 >= 1 && num1 <= 10
// const isValidNum2 = num2 >= 1 && num2 <= 10

// if (isValidNum1 && isValidNum2) {
//   console.log('ok');
// } else {
//   console.log('not ok');
// }


// Написать функцию которая провреят 2 числа, попали ли они в диапазон от 1 до 10 вкл


// const checkRangeFrom1To10 = (num) => num >= 1 && num <= 10
// const isRange = checkRangeFrom1To10(2)

// const isValidTwoValues = (num1, num2) => {
//   return checkRangeFrom1To10(num1)
//     && checkRangeFrom1To10(num2)
// }

// console.log(isValidTwoValues(1, 7));



// const checkRangeFrom1To10 = (num) => num >= 1 && num <= 10

// const isValidTwoValues = (...numbers) => {
//   return numbers.every((num) => checkRangeFrom1To10(num))
// }

// console.log(isValidTwoValues(1, 7, 6, 17, 8, 9, 5));


// some -> v1 || v2 || v3 ... || vN
// every -> v1 && v2 && v3 ... && vN


// Очистить пробелы из строки ВСЕ
// ' ' -> ''


// Дана строка, заменить все нули на 7

// 'gfd560 gf090 00' -> 'gfd560 gf090 00'

// const changeAllNullInseven = (str) => {
//   let newStr = '';
//   for (const el of str) {
//     if (el !== ' ') {
//       newStr += el;
//     }
//   }
//   return newStr
// }

// console.log(changeAllNullInseven('gfd560 gf090 00'))

// console.log(' ' !== ' ');
//


// const changeAllNullInseven = (string) => {
//   return string.split(' ').join('');
// }

// console.log(changeAllNullInseven('5+ 7'))
// console.log(changeAllNullInseven(' 5+ 7'))
// console.log(changeAllNullInseven(' 10    + 7'))
// console.log(changeAllNullInseven(' 10 - 7'))
// console.log(changeAllNullInseven(' 10 / 7'))
// console.log(changeAllNullInseven(' 10 * 7'))
// console.log(changeAllNullInseven(' 10 *    7'))


// number -> Number(), parseInt/Float, .toFixed(), Math.(ceil, round, floor, random), isNaN
// string -> ... many ...
// boolean -> Boolean() -> !!
// null -> XXX
// undefined -> XXX

// object -> X
// array -> ... many ...
// function -> X




// // Написать программу, которая выводит все символы по одному переданной строки
// const getAllSymbolsString = (str) => {
//   for (const el of str) {
//     console.log(el);
//   }
// }

// console.log(getAllSymbolsString('agftr+fg*)'));


// // Написать программу, которая выводит каждый элемент массива по отдельности


// const getEveryElementArraySeparately = (arr) => {
//   for (const el of arr) {
//     console.log(el);
//   }
// }

// getEveryElementArraySeparately([1, 2, 3, 4, 5]);

// // Написать функцию, которая считаем сумму всех чисел, пераднных в неё


// const countsSumAllNumbers = (...numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum
// }
// console.log(countsSumAllNumbers(1, 2, 3, 4, 5, 6));





// Дана строчка, написать функцию, которая получает из этой строчки всё, что перед символов % и всё, что после

// const testString = ' 10    %     V';

// const getAllAfterSymbols = (str) => {
//   const indexPercent = str.indexOf('%')
//   const before = str.slice(0, indexPercent).trim() // ' text    '
//   const after = str.slice(indexPercent + 1).trim() // '     b'

//   return [
//     before,
//     after,
//     str[indexPercent]
//   ]
// }






// console.log(getAllAfterSymbols(testString));


// Написать функцию, которая обрезает строчку до переданного вторым параметров в функцию, символом

// 'block__element'
// function('block__element', '__') // 'block'




// let userStr = 'Nignevartovsk';
// const cutsWold = userStr.indexOf('n');

// const cutsString = (str, param) => {
//   let index = str.indexOf(param);
//   const result = str.slice(0, index) // 1 - число (c какого индекса начать обрезку), 2 - число (каким индексом закончить обрезку НЕ ВКЛ)
//   return result
// }

// console.log(cutsString('block__element', '__')); // block__



// Написать функцию, которая проверяет находится ли в срочке значение, переданное в функцию, независимо от верхнего или нижнего регистра



// const checkValue = (str, symb) => {
//   if (symb === symb.toUpperCase()) {
//   }
//   const loewrStr = str.toLowerCase()
//   return loewrStr.includes(symb.toLowerCase())

// }

// console.log(checkValue('camelCase', 'CASE'));


// 'CASE' || 'case


// Boolean('CASE') // true


// 'cAse'

// 'case'
// 'CASE'





// Написать функцию, на вход которой подаётся 2 перменных, они всегда типа string
// Функция возвращает 'arabic', если обе переменных являются являются числами,
// либо обе являются только строками по смыслу - 'roman'
// В противном случае бросается ошибка

//

// let number1 = 1;
// let number2 = 2;

// let number1 = '1';
// let number2 = '2';

// const checkIsNumber = (num1, num2) => !isNaN(num1) && !isNaN(num2)
// const checkIsNaN = (num1, num2) => isNaN(num1) && isNaN(num2)

// const getTrue = (num1, num2) => {
//   if (checkIsNumber(num1, num2)) { // Проверка на числа
//     return 'arabic'
//   } else if (checkIsNaN(num1, num2)) {
//     return 'roman'
//   } else {
//     throw new Error
//   }
// }

// console.log(getTrue(number1, number2));

// Написать функцию, которая проверяет, являются ли две переменные числами

// Написать функцию, которая проверяет, являются ли две переменные не числами (есть, подвох, возможно писать функцию не придётчся)





// 1. Написать функцию, которая принимает на вход 1 параметр
// Если параметр функции - не число, то вернуть null
// Если же число то:
// 1. Если функция принадлежит промежутку от 0 до 5, то вывести "ок"
// 2. А если от от 6 до 10, то "не ок"
// 3. иначе  вернуть умноженное на 2


// const checkValue = (param) => {
//   if (isNaN(param)) {
//     return null
//   } else {
//     if (param >= 0 && param <= 5) { // ! ВОПРОС
//       return 'ok'
//     } else if (param >= 6 && param < 10) {
//       return 'not ok'
//     } else {
//       return param * 2
//     }
//   }
// }

// console.log(checkValue('77'));


// Тип number (NaN, Infinity, сами числа) - проверяется с помощью typeoff

// Числа (number, string) - проверяется isNaN
// 77 - число, '77' - число,
// '17px' - возможно число,
// height: '177cm' - число (parseInt/parseFloat)
// 'e17gx' - точно не число




// 2. Написать функцию, которая принимает на вход любую переменную

// + Если это null / undefined - бросить ошибку
// + Если это число, то вернуть это же число, делённое на 3, округлив до двух знаков после запятой
// Если это строка, то очистить от лишних пробелов и привести к верхнему регистру
// Если это булевская, то инвертировать её
// Если это объект, то добавить свойство test со значением 'modern',
// Если это массив, то добавить в начало массива значение 777, удалить из массива всё, кроме числовых значений






const testFunction = (param) => {
  const isTypeNumber = (param) => typeof param === 'number'

  let result = null;
  if (param == null) {
    throw new Error('null / undefined')
  } else if (isTypeNumber(param)) {
    result = +(param / 3).toFixed(2);
  } else if (typeof param === 'string') {
    result = param.trim();
  } else if (typeof param === 'boolean') {
    result = !param;
  } else if (Array.isArray(param)) {
    const filteredList = param.filter(element => isTypeNumber(element));
    result = [777].concat(filteredList) // [777, ...filteredList]
  } else if (typeof param === 'object') {
    param.test = 'modern';
    result = param;
  }
  return result;
}



// 16 тему!!!


console.log(testFunction(33.33333333));


// [77, 33, 'gf', 'gfd', 'hg', 37]
// 77 33 'gfd', 37




// const bigFunction = (param) => {
//   let res = {
//     a: isNullAndUndefined(),
//     b: isNumber(),
//     c: clearSpace(),
//     d: changeBoll()
//   }
// }

// 1
// Если это null / undefined - бросить ошибку

// const isNullAndUndefined = (param) => {
//   if (param === null || param === undefined) {
//     throw new Error
//   }
// }
// console.log(isNullAndUndefined(null));
// console.log(isNullAndUndefined(undefined));

// 2
// Если это число, то вернуть это же число, делённое на 3, округлив до двух знаков после запятой

// const isNumber = (num) => {
//   let result = 0;
//   if (typeof num === 'number') {
//     result = num / 3
//   }
//   return +result.toFixed(2)
// }
// console.log(isNumber(355));

// 3
// Если это строка, то очистить от лишних пробелов и привести к верхнему регистру

// const clearSpace = (str) => {
//   let newStr = '';
//   if (typeof str === 'string') {
//     newStr = str.trim().toUpperCase()
//   }
//   return newStr
// }
// console.log(clearSpace('   parallelogram   '));

// 4
// Если это булевская, то инвертировать её

// const changeBoll = (param) => {
//   return !param
// }

// console.log(changeBoll(true));


// 5
// Если это объект, то добавить свойство test со значением 'modern',

// const userObj = {}
// const addedObj = (obj) => {
//   if (typeof obj === 'object') {
//     obj.test = 'Modern'
//   }
//   return obj
// }
// console.log(addedObj(userObj));
// // ?console.log(addedObj(null));

// 6
// Если это массив, то добавить в начало массива значение 777, удалить из массива всё, кроме числовых значений

// const userArray = [1, 2, '3', '4', true, {}];

// const isArray = (arr) => {
//   if (Array.isArray(arr)) {
//     arr.unshift(777)
//     return arr.filter((v) => {
//       if (typeof v === 'number') {
//         return arr
//       }
//     })
//   }
// }

// console.log(isArray(userArray));
// console.log(userArray); //? filter не изменил первоначальный массив. не замутировал.

