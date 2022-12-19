// Задачи по теме 9. Function
// 1. Задача
// Написать функцию, которая выводит сообщение Hello world! 5 раз.

// function getMessage(message) {
//   let i = 1;
//   while (i <= 5) {
//     i++;
//     console.log(message);
//   }
// }

// getMessage('Hellow world!');


// ========================================================================= //

// 2. Задача
// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.

// function getNameDataType(variable) {
//   return typeof variable;
// }

// console.log(getNameDataType('text'));
// console.log(getNameDataType(null));
// console.log(getNameDataType(100));
// console.log(getNameDataType(true));
// console.log(getNameDataType(undefined));
// console.log(getNameDataType({}));

// ========================================================================= //

// 3. Задача
// Написать функцию, которая проверяет, является ли переменная типом string

// function checkTypeString(str) {
//   return typeof str === 'string'
// }

// console.log(checkTypeString('Text'));
// console.log(checkTypeString(100));

// ========================================================================= //

// 4. Задача
// Написать функцию, которая проверяет, является ли переменная типом null

// function checkTypeNull(typeNull) {
//   return typeNull === null
// }

// console.log(checkTypeNull(null));

// ========================================================================= //

// 5. Задача
// Написать функцию, на вход которой подаётся 2 переменных, функция проверяет является ли первая переменная типом number, а вторая - string. (Т.е. функция возвращает true или false)


// function checksDataType(numb, str) {
//   return typeof numb === 'number' || typeof str === 'string';
// }

// console.log(checksDataType(100, 'text'));

// ========================================================================= //

// 6. Задача
// Написать функцию, на вход которой подаётся 2 числа, если сумма этих чисел равна 15, то возвращается true иначе false.

// function checkSum(num1, num2) {
//   return num1 + num2 === 15;
// }

// console.log(checkSum(7, 8));
// console.log(checkSum(8, 8));

// ========================================================================= //

// 7. Задача
// Написать функцию, на вход которой подаётся 2 числа, если первое число равно 5, а второе 3, то возвращается true иначе false

// function checkNumbers(num1, num2) {
//   return num1 === 5 && num2 === 3;
// }

// console.log(checkNumbers(5, 3));
// console.log(checkNumbers(3, 5));

// ========================================================================= //

// 8. Задача
// Написать функцию, которое проверяет равно ли переданное число 10.

// function isNumberTen(numb) {
//   return numb === 10;
// }

// console.log(isNumberTen(10));
// console.log(isNumberTen(20));

// ========================================================================= //

// 9. Задача
// Написать функцию, которая проверяет переданное число на чётность.

// function isEvenNumber(numb) {
//   return numb % 2 === 0;
// }

// console.log(isEvenNumber(10));
// console.log(isEvenNumber(11));

// ========================================================================= //

// 10. Задача
// Написать функцию, которая проверяет переданное число на то, делится ли оно на 10 или нет.


// function isShareNumber(numb) {
//   return numb % 10 === 0;
// }

// console.log(isShareNumber(10));
// console.log(isShareNumber(11));

// ========================================================================= //

// 11. Задача
// Написать функцию, которая проверяет переданное число на крастность 17.

// function isShareNumber(numb) {
//   return numb % 17 === 0;
// }

// console.log(isShareNumber(170));
// console.log(isShareNumber(17));
// console.log(isShareNumber(18));

// ========================================================================= //

// 12. Задача
// Написать функцию, на вход которой подаётся 2 числа, функция проверяет равны ли эти числа.

// function checkNumbers(num1, num2) {
//   return num1 === num2;
// }

// console.log(checkNumbers(10, 20));
// console.log(checkNumbers(10, 10));

// ========================================================================= //

// 13. Задача
// Написать функцию, на вход которой подаётся 2 или 3 или 4 перемнных, функция возвращает true / false, в зависимости от того являются ли все переменные типом string.


// function checkAllVarTypeString(par1, par2, par3 = '', par4 = '') {
//   return typeof par1 === 'string' &&
//     typeof par2 === 'string' &&
//     typeof par3 === 'string' &&
//     typeof par4 === 'string';
// }


// console.log(checkAllVarTypeString('one', 'two', 'three', 'four'));
// console.log(checkAllVarTypeString('one', 'two', 'three'));
// console.log(checkAllVarTypeString('one', 'two'));


// ========================================================================= //

// 14. Задача
// Написать функцию, на вход которой подаётся число, функция возвращает текст: Делится на 5, если переданное число делится на 5. Иначе возвращает: Не делится.
// ========================================================================= //

// 15. Задача
// Сделать рефакторинг кода.

// function isTwenty(num) {
//     if (num == 20) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isTwenty(num) {
//   return num === 20;
// }

// ========================================================================= //

// 16. Задача
// Написать функцию, которая складывает 2 или 3 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function multiplyNumbers(num1, num2, num3 = 0) {
//   if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
//     return num1 + num2 + num3;
//   } else {
//     return 'error'
//   }
// }

// function multiplyNumbers(num1, num2, num3 = 0) {
//   return typeof num1 === 'number' &&
//   typeof num2 === 'number' &&
//   typeof num3 === 'number' ? num1 + num2 + num3 : 'error'
// }


// console.log(multiplyNumbers(10, 20, 70));
// console.log(multiplyNumbers(10, 20));
// console.log(multiplyNumbers(10, 'text'));


// ========================================================================= //

// 17. Задача
// Написать функцию, которая перемножает 2, 3 или 4 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function getResult(num1, num2, num3 = 1, num4 = 1) {
//   return typeof num1 === 'number' &&
//     typeof num2 === 'number' &&
//     typeof num3 === 'number' &&
//     typeof num4 === 'number' ? num1 * num2 * num3 * num4 : 'error'
// }


// console.log(getResult(10, 20, 30, 40));
// console.log(getResult(10, 20, 30));
// console.log(getResult(10, 20));
// console.log(getResult(10, 20, '30'));

// ========================================================================= //

// 18. Задача
// Написать функцию, которая склеивает переданные 2 строки через пробел.

// function glueTogetherStrings(str1, str2) {
//   // return str1 + ' ' + str2
//   return `${str1} ${str2}`
// }

// console.log(glueTogetherStrings('one', 'two'));

// ========================================================================= //

// 19. Задача
// Написать функию, которая вычисляет площадь окружности. На вход одно число - радиус окружности.

// let radius = 20;

// function alcAreaCircle(numb) {
//   return parseInt(Math.PI * numb ** 2)
// }

// console.log(alcAreaCircle(radius));

// ========================================================================= //

// 20. Задача
// Написать функцию, которая выводит столбик (от 1 до 10 включительно) из таблицы умножения на то число, которое подали на вход в функцию.

// function getTableMultiply(numb) {
//   let i = 1;
//   while (i <= 10) {
//     // console.log(i * numb);
//     console.log(`${i} x ${numb} = ${i * numb}`);
//     i++;
//   }
// }

// getTableMultiply(5);

// ========================================================================= //

// 21. Задача
// Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.

// function getRectangleArea(length, width = length) {
//   return length * width
// }

// console.log(getRectangleArea(10, 20));
// console.log(getRectangleArea(10));

// ========================================================================= //


// 22. Задача
// Написать функцию, которой передаём, имя, фамилия и возраст. Функция выводит в консоль, например: Ты Иван Петров с возрастом 17 лет..

// let userFirstName = 'Иван';
// let userLastName = 'Петров';
// let userAge = 17;

// function getUserData(firstName, lastName, age) {
//   console.log(`Ты ${firstName} ${userLastName} с возрастом ${userAge} лет..`);
// }

// getUserData(userFirstName, userLastName, userAge);

// ========================================================================= //

// 23. Задача
// Написать функцию, которая принимает пол человека ('M','F') в виде строки.

// Функции возвращает строку: Ваш пол мужской если ввели M.
// Функции возвращает строку: Ваш пол женский если ввели F.
// Если ничего не передано или передана любая другая строка, то вывести: Ваш пол не опеределен
// Функция должна работать с любым регистром.


// const USER_MALE = 'Ваш пол мужской';
// const USER_FEMALE = 'Ваш пол женский';
// const USER_NOTHING = 'Ваш пол не определен';

// let userMessage = prompt('Write your text');
// function getUserGender(gender) {
//   if (gender.toLowerCase() === 'm') {
//     return USER_MALE
//   } else if (gender.toLowerCase() === 'f') {
//     return USER_FEMALE
//   } else {
//     return USER_NOTHING
//   }
// }

// console.log(getUserGender(userMessage));

// ========================================================================= //

// ===== Функции с массивами ===== //
// 24. Задача
// Написать функцию, на вход которой подаётся массив, функция возвращает среднее арифметическое чисел.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arithmeticMeanNumb = 0;

// function arithmeticMeanNumber(arr) {
//   for (const el of arr) {
//     arithmeticMeanNumb += el / arr.length
//   }
//   return arithmeticMeanNumb
// }

// console.log(arithmeticMeanNumber(array));


// ========================================================================= //

// 25. Задача
// Написать функцию, которая принимает массив. Функция возвращает одно число – количество чётных чисел.

// const array = [2, 45, 89, 63, 22, 12, 9, 70, 10];
// let countEvenNumbers = 0;

// function getEvenNumbers(arr) {
//   for (const el of arr) {
//     if (el % 2 === 0) {
//       countEvenNumbers++
//     }
//   }
//   return countEvenNumbers
// }

// console.log(getEvenNumbers(array));

// ========================================================================= //

// 26. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все чётные числа на строку even.

// const array = [2, 45, 89, 63, 22, 12, 9, 70, 10];

// function changeAllEvenNumbers(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = 'even';
//     }
//   }
//   return arr
// }
// console.log(changeAllEvenNumbers(array));

// ========================================================================= //

// 27. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все отрицательные числа на положительные.

// const array = [2, 45, -89, 63, 22, -12, 9, -70, 10];

// function changeOddOnEven(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = -arr[i]
//     }
//   }
//   return arr
// }

// console.log(changeOddOnEven(array));

// ========================================================================= //

// 28. Задача
// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 7.

// const array = [2, 45, 49, 63, 7, 12, 9, 70, 10];
// const newarray = [];

// function numbShareToSeven(arr) {
//   for (const el of arr) {
//     if (el % 7 === 0) {
//       newarray.push(el)
//     }
//   }
//   return newarray
// }

// console.log(numbShareToSeven(array));

// ========================================================================= //

// 29. Задача
// Написать функцию, на вход которой подаётся массив из строк, функция возвращает новый массив из строк, чья длина больше 3 символов.


// const array = ['one', 'two', 'three', 'four', 'five'];

// console.log(array);
// const newarray = [];

// function getLengthStrMoreThree(arr) {
//   for (const el of array) {
//     if (el.length > 3) {
//       newarray.push(el)
//     }
//   }
//   return newarray
// }

// console.log(getLengthStrMoreThree(array));

// ========================================================================= //

// 30. Задача
// Написать функцию, на вход которой подаётся массив из чисел, функция изменяет текущий массив, заменяя каждый второй элемент массива на строку =x2=.

// const array = [10, 21, 3, 47, 55, 16, 37, 81, 95, 104];

// function changeSecondElOnString(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if ((i + 1) % 2 === 0) {
//       arr[i] = '=x2='
//     }
//   }
//   return arr
// }

// console.log(changeSecondElOnString(array));

// ========================================================================= //

// 31. Задача
// Написать функцию, на вход которой подаётся массив из строк, функция изменяет текущий массив, заменяя каждый третий элемент массива на строку число - количество символов в элементе.

// const array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];

// function changeEveryThirdElOnString(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if ((i + 1) % 3 === 0) {
//       arr[i] = String(arr[i].length)
//     }
//   }
//   return arr
// }

// console.log(changeEveryThirdElOnString(array));

// ========================================================================= //

// 32. Задача
// Написать функцию, на вход которой подаётся массив, функция удаляет первый и последний элементы из массива.

// const array = [10, 21, 3, 47, 55, 16, 37, 81, 95, 104];

// function deleteFirstAndLastElInArray(arr) {
//   arr.shift();
//   arr.pop()
//   return arr
// }

// console.log(deleteFirstAndLastElInArray(array));

// ========================================================================= //

// 33. Задача
// Написать функцию, на вход которой подаётся 2 массива, функция добавляет к первому массиву все значения из второго.

// const array = [10, 21, 3, 47, 55, 16, 37, 81, 95, 104];
// const array2 = [55, 155, 255, 355, 455, 555];

// function addsToTheFirstAllElementsOfTheSecond(arr, arr2) {
//   for (const el of arr2) {
//     arr.push(el)
//   }
//   return arr
// }

// console.log(addsToTheFirstAllElementsOfTheSecond(array, array2));

// ========================================================================= //

// 34. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//     return x + y; // 7
// }

// console.log(test(3, 4, 5, 7));

// ========================================================================= //

//TODO 35. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//   return x + y; // NaN
// }

// console.log(test(3));
// ========================================================================= //

// 36. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//   console.log(x + y); // 10
// }

// console.log(test(3, 7));
// ========================================================================= //

// 37. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(test(3, 7));
// console.log(test(true, 1));
// console.log(test('1', 0));

// function test(x, y) {
//   return x + y;
// }
// ========================================================================= //

// 38. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//   return x * y;
// }

// console.log(test('3', '7')); // 21
// console.log(test(false, 1)); // 0
// console.log(test('1', 0)); // 0
// console.log(test('1', 'true')); // NaN
// ========================================================================= //

// 39. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x = 1, y = 1) {
//   return x * y;
// }
// console.log(test(null));
// console.log(test(undefined));

// console.log(test(4)); // 4
// console.log(test(null, 5)); // 0
// console.log(test(undefined, 5)); // 5
// console.log(test(undefined, undefined)); // 1
// ========================================================================= //

// 40. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(test(3, 2, 1)); // 6
// console.log(test(null, null, 2)); // 0
// console.log(test(undefined, undefined, 5)); // 5
// console.log(test(undefined, undefined, undefined)); // 1
// console.log(test(3, 2, undefined)); // 6
// console.log(test(3, 2, null)); // 0
// console.log(test(3, 2)); // 6

// function test(x, y, z = 1) {
//   return x * y * z;
// }
// ========================================================================= //

// 41. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(sum(3, sum(4, 5))); // 12
// console.log(sum(sum(3, -1), 7)); // 9
// console.log(sum(sum(0, -5), sum(3, 7))); // 5
// console.log(sum(sum(3, sum(12, 5)), sum(sum(4, 8), 13))); // 45
// console.log(sum(sum(sum(5, 3), sum(7, -15)), sum(sum(10, 10), sum(-15, -5)))); // 0

// function sum(x, y) {
//   return x + y;
// }
// ========================================================================= //

// 42. Задача
// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наибольшее из них.

// const array = [10, 21, 3, 47, 55, 16, 37, 81, 95, 104];
// let minNumber = array[0];
// function getTheLargestNumber(arr) {
//   for (const el of arr) {
//     if (el > minNumber) {
//       minNumber = el
//     }
//   }
//   return minNumber
// }

// console.log(getTheLargestNumber(array));

// ========================================================================= //

// ★ Задачи повышенной сложности ★
// ★ 43. Задача ★
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(test(5));
// function test(x) {
//     let multi1 = 10;
//     return multi1 * x;
// }
// console.log(multi1);

// console.log(anotherTest(5));
// function anotherTest(x) {
//     var multi2 = 10;
//     return multi2 * x;
// }
// console.log(multi2);

// console.log(otherTest(5));
// function otherTest(x) {
//     const multi3 = 10;
//     return multi3 * x;
// }
// console.log(multi3);

// console.log(otherTest(5));
// function otherTest(x) {
//     const multi3 = 10;
//     return multi3 * x;
//     return multi3 * 10;
// }
// console.log(multi3);
// ========================================================================= //

// ★ 44. Задача ★
// Написать функцию, которая вычисляет факториал числа. На вход подаётся целое число. Функция возвращает -1, если:

// На вход подали не число;
// На вход подали отрицательное число;
// На вход подали не целое число;
// Примеры:
// 1! = 1
// 2! = 1 x 2 = 2
// 3! = 1 x 2 x 3 = 6
// 7! = 1 х 2 х 3 х 4 х 5 х 6 х 7 = 5040
// 0! = 1 (Искл)
// ========================================================================= //

// ★★ 45. Задача ★★
// Написать функцию, которая возвращает массив с частью последовательности: 1 2 2 3 3 3 4 4 4 4 5 5 ... (число повторяется столько раз, чему оно равно)
// На вход в функцию подаётся одно неотрицательное число (целое число n) - столько элементов последовательности должна быть в возвращаемом массиве.

// Например n = 7, то программа выведет массив с числами:
// 1 2 2 3 3 3 4 (т.е. 7 элементов из последовательности)
// ========================================================================= //

// ★★★ 46. Задача ★★★
// Написать функцию, которая принимает на вход одно число. Функция выводит таблицу рамером NxN, заполненную числами от 1 до n ** 2 вкл. по спирали, выходящей из левого верхнего угла и закрученной по часовой стрелке:

// Например: spiral(5)

// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9
// P.S. Между числами только 1 пробел, красиво делать не обязательно