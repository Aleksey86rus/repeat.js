// Задачи по теме 12. Number-ext
// 1. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(Number("0")); // 0
// console.log(Number("10")); // 10
// console.log(Number("")); // 0
// console.log(Number(null)); // 0
// console.log(Number("  ")); // 0
// console.log(Number(true)); // 1
// console.log(Number("  10  ")); // 10
// console.log(Number("+10")); // 10

// console.log(Number("20px")); // NaN
// console.log(Number(undefined)); // NaN
// console.log(Number(false)); // 0
// console.log(Number(" /10 ")); // NaN
// console.log(Number("true")); // NaN
// console.log(Number("00100")); // 100
// console.log(Number(" ")); // 0
// console.log(Number(" -10 ")); // -10

// ====================================================================== //
// 2. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(parseInt("15.5px")); // 15
// console.log(parseFloat("15.5px")); // 15.5
// console.log(parseInt("")); // NaN
// console.log(parseFloat(false)); // NaN
// console.log(parseInt("true")); // NaN
// console.log(parseInt(null)); // NaN

// console.log(parseInt("0")); // 0
// console.log(parseFloat("10")); // 10
// console.log(parseInt(" ")); // NaN
// console.log(parseInt(undefined)); // NaN
// console.log(parseFloat("00200")); // 200
// console.log(parseFloat("  ")); // NaN

// ====================================================================== //

// 3. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(isNaN('10')); // false
// console.log(isNaN("15.5px")); // true
// console.log(isNaN("15.5")); // false
// console.log(isNaN("")); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN(true)); // false
// console.log(isNaN('22px' - '1px')); // true


// let a1 = isNaN(true)
// let a2 = isNaN(false)
// let a3 = isNaN(null)
// let a4 = isNaN(10)
// let a5 = isNaN('10')
// let a6 = isNaN(' ')
// let a7 = isNaN('')

// console.log(a1); // false
// console.log(a2); // false
// console.log(a3); // false
// console.log(a4); // false
// console.log(a5); // false
// console.log(a6); // false
// console.log(a7); // false


// let b1 = isNaN('10px')
// let b2 = isNaN(undefined)
// let b3 = isNaN('px10')
// let b4 = isNaN('dfgs')
// let b5 = isNaN(NaN)

// console.log(b1); // true
// console.log(b2); // true
// console.log(b3); // true
// console.log(b4); // true
// console.log(b5); // true



// console.log(isNaN(null)); // false
// console.log(isNaN(false)); // false
// console.log(isNaN(7)); // false
// console.log(isNaN(10 - '3')); // false
// console.log(isNaN("   ")); // false
// console.log(isNaN("030")); // false
// console.log(isNaN(94 + '6')); // false

// ====================================================================== //

// 4. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(199.0506.toFixed(3)); // 199.051
// console.log(199.0505.toFixed(3)); // 199.050
// console.log(199.0504.toFixed(3)); // 199.050
// console.log(Math.floor(6.99999)); // 6
// console.log(Math.ceil(50.01)); // 51
// console.log(Math.round(99.9)); // 100
// console.log(Math.max(3, 67, -99, 30, 5)); // 67

// console.log(251.65474.toFixed(3)); // 251.655
// console.log(Math.floor(33.333)); // 33
// console.log(Math.ceil(5.5)); // 6
// console.log(Math.round(0.0000001)); // 0
// console.log(Math.min(0, 437, -289, -421, 335)); // -421

// ====================================================================== //

// 5. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log((181.12534).toFixed(3)); // 181.125
// console.log(Math.floor(50.01)); // 50
// console.log(Math.ceil(0.0000001)); // 1
// console.log(Math.round(5.5)); // 6

// console.log(867.654745.toFixed(5)); // 867.654745
// console.log(Math.floor(99.9)); // 99
// console.log(Math.round(50.01)); // 50
// console.log(Math.ceil(251.45)); // 252

// ====================================================================== //

// 6. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(300..toFixed(2)); // 300.00
// console.log(Math.floor(251.655)); // 251
// console.log(Math.ceil(3.99999)); // 4
// console.log(Math.round(251.655)); // 252

// console.log(2351.65474.toFixed(2)); // 2351.65
// console.log(Math.ceil(99.9)); // 100
// console.log(Math.round(3.99999)); // 4
// console.log(Math.floor(0.0000001)); // 0
// ====================================================================== //

// 7. Задача
// Написать функцию которая возвращает целое случаное число от 0 до 2 не вкл.


// const getRandomCellNumber = function (min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min)
//   // return Math.ceil(Math.random() * (max + 1 - min) + min)
//   // return Math.random() * (max + 1 - min) + min
// }

// console.log(getRandomCellNumber(0, 2));
// console.log(getRandomCellNumber(0, 2));
// console.log(getRandomCellNumber(0, 2));
// console.log(getRandomCellNumber(0, 2));


// const getRandomCellNumber = function () {
//   return Math.floor(Math.random() * 2)
// }

// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());

// ====================================================================== //

// 8. Задача
// Написать функцию которая возвращает целое случаное число от 1 до 2 не вкл.


// const getRandomCellNumber = function () {
//   // return Math.floor(Math.random() * (2 - 1) + 1)
//   return Math.floor(Math.random() * (2 - 1) + 1)
// }

// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());
// console.log(getRandomCellNumber());


// [0, 1) * (2 - 1)
// [0, 1) + 1
// [1, 2) -> [1, 2]


// ====================================================================== //

// 9. Задача
// Написать функцию, на вход которой подаётся строка с размерностью (px, rem, em, cm, pt ...). Функция возвращает число, убирая размерность.


// const getNumberNotDimension = function (str) {
//   return parseInt(str)
// }

// console.log(getNumberNotDimension('10.5px'));
// console.log(getNumberNotDimension('20rem'));
// console.log(getNumberNotDimension('30em'));
// console.log(getNumberNotDimension('40cm'));
// console.log(getNumberNotDimension('50pt'));

// ====================================================================== //

// 10. Задача
// Написать функцию которая возвращает целое случаное число от 1 до 10 не вкл.

// const getRandomInt = function () {
//   return Math.floor(Math.random() * (10 - 1) + 1)
// }

// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());

// ====================================================================== //

// 11. Задача
// Написать функцию которая возвращает целое случаное число от 1 до 10 вкл.

// const getRandomInt = function () {
//   return Math.floor(Math.random() * (10 + 1 - 1) + 1)
// }

// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());

// ====================================================================== //

// 12. Задача
// Написать функцию, которая переводит метры в сантиметры. На вход в функцию подаётся строка с числом метров: 3.5m. Функция возвращает строку с количество сантиметров: 350cm.

// let userInt = '3.5m';
// const getQuantityCm = function (str) {
// let result = parseFloat(str) * 100
// return `${result}cm.`
// }
// console.log(getQuantityCm(userInt));


// let userInt = '3.5m';
// const getQuantityCm = function (str) {
//   return `${parseFloat(str) * 100}cm.`
// }

// console.log(getQuantityCm(userInt));

// ====================================================================== //

// 12. Задача
// Написать функцию которая возвращает целое случаное число в диапазоне от a, до b. Два числа подаются на вход в функцию. Где a < b. Если это условие не выполняется, то возвращается null.


// const getRandomInt = (numA, numB) => {
//   if (numA < numB) {
//     return Math.floor(Math.random() * (5 + 1 - 1) + 1)
//   } else {
//     return null
//   }
// }

// console.log(getRandomInt(1, 5));
// console.log(getRandomInt(1, 5));
// console.log(getRandomInt(1, 5));
// console.log(getRandomInt(1, 5));
// console.log(getRandomInt(1, 5));

// console.log(getRandomInt(5, 1));

// ====================================================================== //

// 13. Задача
// Написать функцию, на вход которой подаётся нецелое число и строка (режим округления):

// В большую сторону (more);
// В меньшую сторону (less);
// Как в математике (math); Функция возвращает округлённое число.


// const getIntNumber = (num, str) => {
//   if (str === 'more') {
//     return Math.ceil(num)
//   } if (str === 'less') {
//     return Math.floor(num)
//   } if (str === 'math') {
//     return Math.round(num)
//   }
// }

// console.log(getIntNumber(10.5, 'more'));
// console.log(getIntNumber(10.5, 'less'));
// console.log(getIntNumber(10.5, 'math'));

// ====================================================================== //

// 14. Задача
// Создать массив и заполнить его случайными числами (random) в диапазоне от 1 до 5 не вкл. Количество элементов в массиве - 10 шт. Далее выполнять задачи по очереди:

// Вывести массив в терминал в строчку;
// Посчитать количество троек и вывести в консоль;
// Затем заменить все единицы на тройки, а 4 - на единицы;
// Посчитать кол-во единиц и вывести в консоль;


// const arrRandomNumbers = [];
// let countThree = 0;
// let countOne = 0;
// for (let i = 0; i < 10; i++) {
//   arrRandomNumbers[i] = Math.floor(Math.random() * (5 - 1) + 1);
//   if (arrRandomNumbers[i] === 3) {
//     countThree++
//   } if (arrRandomNumbers[i] === 1) {
//     arrRandomNumbers[i] = 3;
//     countThree++
//   } if (arrRandomNumbers[i] === 4) {
//     arrRandomNumbers[i] = 1
//     countOne++
//   }
// }
// console.log(arrRandomNumbers.join(' '));
// console.log(countThree);
// console.log(countOne);

// ====================================================================== //
// 15. Задача
// Написать функцию, которая создаёт массив из случайных чисел (random) в заданном (от a до b вкл) диапазоне и заданной длины (l) Если не передать ни один из трёх параметров, то создаётся массив из 10 элементов из случанйых чисел диапазона от 0 до 10 вкл.

// Example:
// const newRandArr = createRandomArray(5, 0, 1);
// console.log(newRandArr); // Создаёт массив из 5 элементов, заполненных только 0 и 1: [0, 1, 1, 0, 1]

//! Не забывать по ПАРАМЕТРЫ ПО УМОЛЧАНИЮ в случаюях когда функция возвращает undefined
// const arr = [];
// const getRandomInt = (length = 10, min = 0, max = 10) => {
//   for (let i = 0; i < length; i++) {
//     arr[i] = Math.floor(Math.random() * (max + 1 - min) + min)
//   }
//   console.log(arr);
// }

// getRandomInt(5, 1, 4);
// getRandomInt(5, 1, 4);
// getRandomInt(5, 1, 4);
// getRandomInt(5, 1, 4);
// getRandomInt();
// getRandomInt();
// getRandomInt();
// getRandomInt();

// ====================================================================== //

// 16. Задача
// Написать функцию randColorFromArr, на вход которой подаётся массив цветов, функция возвращает случайный цвет из этого массива.




// const colorArr = ['black', 'red', 'orange', 'blue', 'green', 'white', 'pink', 'violet', 'purple', 'yellow', 'cyan'];

// const randColorFromArr = function (arr) {
//   let randNumbInArr = Math.floor(Math.random() * 11)
//   return arr[randNumbInArr]
// }
// console.log(randColorFromArr(colorArr));


// *Получили массив индексов!
// const randColorFromArr = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 11)
//   }
//   console.log(arr);
// }

// randColorFromArr(colorArr);

// ====================================================================== //

// ★ Задачи повышенной сложности ★
// TODO ★ 18. Задача ★
// Написать функцию randColorFromArr, на вход которой подаётся массив цветов, функция возвращает массив с 3 случайными цветами, при этом цвета не должны повторяться.

// const colorArr = ['black', 'red', 'orange', 'blue', 'green', 'white', 'pink', 'violet', 'purple', 'yellow', 'cyan']

// const randColorFromArr = (arr) => {
//   const newColorArr = [];
//   let randNumbInArr1 = Math.floor(Math.random() * 11)
//   let randNumbInArr2 = Math.floor(Math.random() * 11)
//   let randNumbInArr3 = Math.floor(Math.random() * 11)

//   newColorArr.push(arr[randNumbInArr1], arr[randNumbInArr2], arr[randNumbInArr3])
//   return newColorArr;
// }

// console.log(randColorFromArr(colorArr));

// ====================================================================== //

// FIXME: Написать функцию, которая выводит в консоль числа от 1 до n, где n - целое число, которая принимает на вход функция.
// При этом функция выводит 'Fizz' вместо чисел, кратных 3 Выводит 'Buzz' вместо чисел, кратных 5 И выводит 'FizzBuzz' вместо чисал, крастных как 3, так и 5

// Пример:
// functionName(5);

// console:
//     1
//     2
//     'Fizz'
//     4
//     'Buzz'

// TODO  Порядок действий !! Началт с 3ки.
// let num = 6;

// const intNumber = (intNum) => {
//   for (let i = 1; i <= intNum; i++) {
//     if (i % 3 === 0 && i > 0) {
//       console.log('Fizz');
//     } if (i % 5 === 0 && i > 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// intNumber(num);

// ====================================================================== //

// ★ FIXME:17. Задача ★
// Написать функцию: (консольная игра "угадай число"). На вход в функцию идёт несколько параметров:

// Диапазон загадываемого числа от до вкл;
// Кол-во попыток;
// Наличие подсказок: true или false;
// Перед тем, как игрок приступает к угадыванию ему сообщается в консоле:

// В каком диапазоне загадано число;
// Сколько есть попыток;
// Включены ли подсказки;
// Механика:

// Число генерируется с помощью метода Math.random();
// Пользователя запрашивают через числа prompt();
// Подсказки: Если мы не угадали число, то нам подсказывают - загаданное число больше или меньше того, что мы ввели;
// Кол-во оставшихся попыток выводить в консоль каждый раз, когда мы не угадываем число;
// После того, как мы угадали число, в консоль выводится: Победа, вы угадали число: <число> и функция прекращает работу;
// После того, как расходуются все попытки, в консоль выводится: Проигрыш, вы не угадали число: <число>;
// ====================================================================== //

// 23. ★★ Задача ★★
// Почему выражение 0.1 + 0.2 === 0.3 возвращает false?
// ====================================================================== //

// 24. ★★ Задача ★★
// Напишите функцию, которая сравнивает два числа с определенной погрешностью. Функция возвращает true, если числа равны иначе false Функция должна сравнивать как положительные, так и отрицательные числа Пример: compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true