// Задачи по теме 14. Array methods.Part 1
// 1. Задача
// Написать функцию, которая проверяет является ли переданная переменная массивом.


// const isArray = arr => Array.isArray(arr)

// console.log(isArray([]));
// console.log(isArray({}));


// ===================================================================================== //
// 2. Задача
// Написать функцию, которая проверяет является ли переданная перемнная объектом.


// const isObject = (obj) => typeof obj === 'object' && obj !== null;

// console.log(isObject({}));
// console.log(isObject(null));


// ===================================================================================== //
// 3. Задача
// Написать функцию, на вход которой подаётся массив и любое количество переменных любого типа. Функция возвращает переданный массив, добавляя в него остальные переданные параметры.

// for of
// const getArray = (arr, ...params) => {
//   for (const el of params) {
//     arr.push(el)
//   }
//   return arr
// }

// console.log(getArray([1, 2, 3, 4, 5], null, 'soul', 55, undefined));

// concat
// const getArray = (arr, ...params) => arr.concat(params)

// console.log(getArray([1, 2, 3, 4, 5], null, 'soul', 55, undefined));


// !Не работает со splice()

// ===================================================================================== //
// 4. Задача
// Написать функцию, на вход которой подаётся любое количество переменных любого типа. Функция возвращает массив, неповторяющихся элементов. Значение элемента не должен встретиться более 1 раза в вернувшимся массиве.

// const arrNonRepeatingElements = (...params) => {
//   // debugger
//   const newArray = [];
//   for (const el of params) {
//     if (!newArray.includes(el)) {
//       newArray.push(el)
//     }
//   }
//   return newArray
// }

// console.log(arrNonRepeatingElements('10', 20, true, null, '10', 20, true, null));
// // console.log(arrNonRepeatingElements('10', 20, true, null));


// const arrNonRepeatingElements = (...params) => {
//   // debugger
//   const newArray = [];
//   for (const el of params) {
//     if (!newArray.includes(el)) {
//       console.log(!newArray.includes(el));
//       newArray.push(el)
//     }
//   }
//   console.log(newArray);
// }

// // console.log(arrNonRepeatingElements('10', 20, true, null, '10', 20, true, null));
// console.log(arrNonRepeatingElements('10', '20', '10'));


// ===================================================================================== //
// 5. Задача
// Написать функцию, на вход которой подаётся 2 массива, функция возвращает новый массив, в котором все элементы двух других массивов.

// *Решение с Concat
// const userArr1 = [1, 2, 3, 4, 5];
// const userArr2 = [6, 7, 8, 9, 10];


// const getNewArray = (arr1, arr2) => {
//   const newArray = [];
//   return newArray.concat(arr1, arr2)
// }

// console.log(getNewArray(userArr1, userArr2));



// *Решение с двумя циклами
// const userArr1 = [1, 2, 3, 4, 5];
// const userArr2 = [6, 7, 8, 9, 10];


// const getNewArray = (arr1, arr2) => {
//   const newArray = [];
//   for (const el of arr1) {
//     newArray.push(el)
//   }
//   for (const el of arr2) {
//     newArray.push(el)
//   }
//   return newArray;
// }

// console.log(getNewArray(userArr1, userArr2));


// ===================================================================================== //
// 6. Задача
// Написать функцию, на вход которой подаётся массив. В массиве могут быть любые типы данных. Функция возвращает число - количество ссылочных типов данных.


// const userArr = [1, '2', null, [2, 3], { one: 1, two: 2 }];

// const getQuantityReferenceDataTypes = (arr) => {
//   let countReferenceDataTypes = 0;
//   for (const el of arr) {
//     if (typeof el === 'object' && el !== null) {
//       countReferenceDataTypes++
//     }
//   }
//   return countReferenceDataTypes
// }

// console.log(getQuantityReferenceDataTypes(userArr));


// ===================================================================================== //
// 7. Задача
// Написать функцию, на вход которой подаётся массив. В массиве могут быть любые типы данных. Функция возвращает число - количество массивов.

// const userArr = [1, '2', null, [2, 3], { one: 1, two: 2 }, [4, 5], [6, 7]];

// const getQuantityArray = (arr) => {
//   let countArray = 0;
//   for (const el of arr) {
//     if (Array.isArray(el)) {
//       countArray++
//     }
//   }
//   return countArray
// }
// console.log(getQuantityArray(userArr));


// ===================================================================================== //
// 8. Задача
// Написать функцию, на вход которой подаётся массив, функция удаляет средний / средние элементы. Например: [3, 4, 7] -> [3, 7] Например: [1, 4, 6, 5] -> [1, 5] Например: [1, 4, 7, 8, 8, 7, 6, 5] -> [1, 4, 7, 7, 6, 5] Например: [1, 4, 7, 8, 9, 8, 7, 6, 5] -> [1, 4, 7, 8, 8, 7, 6, 5]


// const userarr1 = [3, 4, 7]; // length-3 del 1 (3/2=1.5)
// const userarr2 = [1, 4, 6, 5]; // length-4 del 2 (4/2=2)
// const userarr3 = [1, 4, 7, 8, 8, 7, 6, 5]; // length-8 del 2 (8/2=4)
// const userarr4 = [1, 4, 7, 8, 9, 8, 7, 6, 5]; // length-9 del 1 (9/2=4.5)


// const delMiddleElement = (array) => {
//   let startIndex = array.length / 2
//   console.log(startIndex);
//   if (array.length % 2 === 0) {
//     array.splice(startIndex - 1, 2)
//   } else {
//     array.splice(Math.floor(startIndex), 1)
//   }
//   return array
// }


// console.log(delMiddleElement(userarr1));
// console.log(delMiddleElement(userarr2));
// console.log(delMiddleElement(userarr3));
// console.log(delMiddleElement(userarr4));


// ===================================================================================== //
// TODO:9. Задача
// Написать функцию, которая принимает на вход 2 параметра: массив чисел и 1 числовой пареметр. Если в массиве не содержится значение параметра, то проверка успешна.


// const userArr = [1, 2, 3, 4, 5];
// let userNum = 6;


// const checkArray = (arr, param) => !arr.includes(param)

// console.log(checkArray(userArr, userNum));


// ===================================================================================== //
// 10. Задача
// Написать функцию, которая принимает на вход 3 параметра.

// Первый параметр - искомый массив;
// Второй параметр значение, которое ищем;
// Третий - слово 'end' или 'start'; Функция возвращает индекс первого встречного значения. Если такого значения не нашлось, то функция возвращает null.


// const getFirstIndex = (arr, num, str) => {
//   let result = null;
//   if (str === 'start') {
//     result = arr.indexOf(num)
//   } else if (str === 'end') {
//     result = arr.lastIndexOf(num)
//   } if (result === -1) {
//     return null
//   } else {
//     return result
//   }
// }

// console.log(getFirstIndex([1, 5, 2, 3, 4, 5], 5, 'start'));
// console.log(getFirstIndex([5, 1, 2, 3, 4, 5], 5, 'end'));
// console.log(getFirstIndex([5, 1, 2, 3, 4, 5], 7, 'end'));


// После рефакторинга
// function getFirstIndex(arr, value, find) {
//   const result = find === 'start' ? arr.lastIndexOf(value) : arr.indexOf(value)
//   return result === -1 ? null : result
// }

// console.log(getFirstIndex([10, 40, 20, 30, 40, 50], 43, 'start')); // null
// console.log(getFirstIndex([10, 40, 20, 30, 40, 50], 40, 'start')); // 1
// console.log(getFirstIndex([10, 40, 20, 30, 40, 50], 40, 'end')); // 4


// ===================================================================================== //
// 11. Задача
// Написать функцию, которая принимает на вход параметр и массив. Функция удаляет элемент из массива под этим индексом. Функция мутирует переданный массив. Если такого индекса нет, то функция выводит в консоль: Undefined delete item.


// const removesFromTheArray = (arr, value) => {
//   let findIndexInArray = arr.indexOf(value);
//   arr.splice(findIndexInArray, 1);
//   // if (findIndexInArray === -1) {
//   //   console.log('Undefined delete item');
//   // } else {
//   //   return arr
//   // }

//   // После рефакторинга
//   let result = findIndexInArray === -1 ? 'Undefined delete item' : arr
//   return result
// }

// console.log(removesFromTheArray([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(removesFromTheArray([1, 2, 3, 4, 5, 6, 7], 9));


// ===================================================================================== //
// 12. Задача
// Написать функцию, которая принимает на вход 2 параметра: 1 - массив. 2 - слово 'end' или 'start'. Функция мутирует исходный массив, удаляя либо первый элемент, либо последний.


// const delFirstOrLastElement = (arr, value) => {
//   if (value === 'start') {
//     arr.shift()
//   } else if (value === 'end') {
//     arr.pop()
//   }
//   return arr
// }

// console.log(delFirstOrLastElement([1, 2, 3, 4, 5], 'start'));
// console.log(delFirstOrLastElement([1, 2, 3, 4, 5], 'end'));


// ===================================================================================== //
// 13. Задача
// Написать функцию, которая принимает на вход строку. Функция возвращает строку задом наперёд.

//   Пример:
// Jack -> kcaJ
// Memory -> yromeM
// Snickers -> srekcins

// const getReverseString = (str) => {
//   let result = str.split('')
//   // let result = Array.from(str)
//   return result.reverse().join('')
// }


// После рефакторинга
// const getReverseString = (string) => string.split('').reverse().join('')


// console.log(getReverseString('Jack'));
// console.log(getReverseString('Memory'));
// console.log(getReverseString('Snickers'));


// ===================================================================================== //
// 14. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает ту же строчку, но удаляя оттуда все знаки восклицания.

// * Первый способ
// const getStringDelAllSymbols = (str) => {
//   const newArray = [];
//   const array = str.split('')
//   for (const el of array) {
//     if (el !== '!') {
//       newArray.push(el)
//     }
//   }
//   return newArray.join('')
// }

// console.log(getStringDelAllSymbols('happy!!!!'));

// * Второй способ
// function getString(str, symb) {
//   let newStr = '';
//   for (const el of str) {
//     if (el !== symb) {
//       newStr += el
//     }
//   }
//   return newStr
// }

// console.log(getString('happy!!!!', '!'));


// * Третий способ
// function getString(str, symb) {
//   return str.split(symb).join('')
// }

// console.log(getString('happy!!!!', '!'));


// ===================================================================================== //
// 15. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const testStr = 'Test string for 15 task!'

// console.log(Array.from(testStr));
// console.log(testStr.split(''));

// Получим массив из всех символов, содержащихся в строке.


// ===================================================================================== //
// 16. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const testString = 'Nice... Hello world.'

// console.log(testString.split('.').join('!'));

// Все точки в предложении были заменены на восклицательный знак.


// ===================================================================================== //
// 17. Задача
// Написать функцию, на вход можно подать много параметров. Функция из всех этих параметров отбирает только массивы и склеивает их в один единый. Функция возвращает получившийся массив. Если нету в переданных параметрах массива, то вернуть null.


// const getArray = (...params) => {
//   let newArray = [];
//   for (const el of params) {
//     if (Array.isArray(el)) {
//       newArray = newArray.concat(el)
//     }
//   }
//   return newArray.length === 0 ? null : newArray
// }

// console.log(getArray([1, 2], 'text', [3, 4], 55, [5, 6], null, [7, 8], true, [9, 10]));
// console.log(getArray('text', 55, null, true));


// ===================================================================================== //
// 18. Задача
// Написать функцию, на вход которой подаётся массив и число.Функция возвращает новый обрезанный массив, начиная с элемента под тем номером, который передали в функцию и заканчивая всегда последним элементом.Если указали некорректный номер элемента, то вернуть null.

// TODO: Спросить, на правильность применения методов!
// const getNewArray = (arr, value) => {
//   let newArray = [];
//   let result = arr.indexOf(value);
//   arr.splice(result, 2)
//   newArray = newArray.concat(arr)
//   if (result === -1) {
//     return null
//   }
//   return newArray
// }

// console.log(getNewArray([1, 2, 3, 4, 5], 2));


// ===================================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 19. Задача ★
// Написать функцию, которая принимает на вход параметры: массив чисел и числовые пареметры.Если в массиве не содержится значения параметров, то проверка успешна.


// const checkParamsInArray = (arr, ...params) => {
//   // console.log(params);
//   let result = arr.includes(...params)
//   // console.log(result);
//   for (const el of arr) {
//     if (el === +result) {
//       return false
//     } else {
//       return true
//     }
//   }
// }

// console.log(checkParamsInArray([1, 2, 3, 4, 5], 6, 7, 8));
// console.log(checkParamsInArray([1, 2, 3, 4, 5], 1));


// TODO: Как проверить, на наличие нескольких значений в массиве чисел?

// ===================================================================================== //
// ★ 20. Задача ★
// Написать функцию, на вход которой подаётся массив и много параметров.Функция возвращает новый массив, скопировав туда все параметры переданного, добавляя по очереди сначала в начало массива элемент, затем в конец, затем снова в начало и т.д.пока не закончатся перадаваемые параметры.Пример: ...
// ===================================================================================== //
// ★ 21. Задача ★
// Написать функцию, на вход которой подаётся строка.Функция возвращает ту же строчку, но удаляя оттуда все перечисленные знаки: ., !?:;


// const getDelAllSymbols = (string) => {
// let newString = '';
// for (const el of string) {
//   if (el !== '!') {
//     newString += el
//   }
// }
// return newString

// return string.split('!').join('')
// }

// console.log(getDelAllSymbols('lucky!!!!'));


// const getDelAllSymbols = (string, ...params) => {
//   console.log(params);
//   let newString = '';
//   for (const el of string) {
//     if (el !== '!') {
//       newString += el
//     }
//   }
//   return newString

// }

// console.log(getDelAllSymbols('.l?u!c:k;y,', '.', ',', '!', '?', ':', ';'));

//* Возможно здесь нужно применять цикл в цикле.

// ===================================================================================== //
// ★★ 22. Задача ★★
// Написать функцию, на вход которой подаётся массив и любое количество переменных любого типа.Функция возвращает переданный массив, удаляя из него остальные переданные параметры.