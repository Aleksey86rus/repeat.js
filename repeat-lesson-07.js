// 1. Задача
// Вывести 5 раз любую фразу в консоль, пользуясь циклами.Сделать эту задачу 3 способами:

// цикл for;
// цикл while;
// цикл do -while;

// for (let i = 0; i < 5; i++) {
//   console.log('five');
// }

// let i = 0;
// while (i < 5) {
//   console.log('five');
//   i++
// }

// let i = 0;
// do {
//   console.log('five');
//   i++
// } while (i < 5);

// =========================================================================================== //
// 2. Задача
// Вывести в консоль: "*******" - 7 звёздочек, пользуясь исключительно переменной STAR.

// const STAR = '*';

// for (let i = 0; i < 7; i++) {
//   STAR += '*'
//   console.log(STAR);
// }

// let star = '*';
// for (let i = 1; i < 7; i++) {
//   star += '*';
// }
// console.log(star);

// =========================================================================================== //

// 3. Задача
// Вывести в консоль, пользуйтесь переменной STAR:

// const STAR = '*';
// *
// **
// ***

// let star = '';
// for (let i = 0; i < 3; i++) {
// star += '*'
//   console.log(star);
// }

// =========================================================================================== //

//   4. Задача
// Вывести в консоль, пользуйтесь переменной circle:

// const circle = 'O';
// O
// OOO
// OOOOO
// OOOOOOO

// let result = '';
// for (let i = 1; i <= 7; i++) {
//   result += circle ;
// if (i % 2 === 0) {continue};
// console.log(result);
// }

// =========================================================================================== //

// 5. Задача
// Вывести числа в консоль в столбик из промежутка от 1 до 20 вкл.

// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }

// =========================================================================================== //

// 6. Задача
// Вывести числа в консоль в столбик из промежутка от 3 до 15 не вкл.

// for (let i = 3; i < 15; i++){
//   console.log(i);
// }

// =========================================================================================== //

// 7. Задача
// Вывести числа в консоль в столбик из промежутка от 1 до 10 вкл., доклеивая к чётным числам: even.

// for (let i = 1; i <= 10; i++) {
//   // if (i % 2 === 0) {
//   //   console.log(i + ' even');
//   // } else {
//   //   console.log(i);
//   // }

//   console.log(i % 2 === 0 ? i + " even" : i);
// }

// В цикле просходит итерация.
// i = 1
// => if (false) т.к единица явл. не четным числом.
// => i++
// => i = 2
// => if (true)
// => к i присваиваем 'even'
// => значение выводится в консоль - '2 even'
// =>

// ЦИКЛ
// 1 итерация
// i = 1
// for (i <= 10) -> true

// ТЕЛО ЦИКЛА:
// if (false)
// log(1)

// i++ | i = 2 | ~ i = i + 1

// 2 итерация
// i = 2
// (i <= 10) -> true

// ТЕЛО ЦИКЛА:
// if (true) -> i += ' even' // i = i + ' even'
// i = '2 even'
// log('2 even')

// i++ | i = i + 1
// ~'2 even1' (NaN)

// 2 итерация
// i = '2 even1'
// ('2 even1' <= 10) -> (NaN <= 10)
// NaN <= 10 -> false

// КОНЕЦ ЦИКЛА

// =========================================================================================== //

// 8. Задача
// Вывести числа в консоль в столбик из промежутка от 1 до 10 вкл., доклеивая каждому третьему: = x3 =.

// for (let i = 1; i <= 10; i++) {
// // if (i % 3 === 0) {
// //   console.log(i + ' = x3 =');
// // } else {
// //   console.log(i);
// // }
// console.log(i % 3 === 0 ? i + ' = x3 =' : i);
// }

// =========================================================================================== //

// 9. Задача
// Вывести числа в консоль в столбик из промежутка от 1 до 10 вкл., доклеивая к нечётному числу: - odd.

// for (let i =1; i <= 10; i++) {
//   // if (i % 2 !== 0) {
//   //   console.log(i + '-odd');
//   // } else {
//   //   console.log(i);
//   // }
// console.log(i % 2 !== 0 ? i + '-odd' : i);
// }
// =========================================================================================== //

// 10. Задача
// Вывести числа в консоль в столбик из промежутка от 1 до 10 вкл., доклеивая каждому второму: = x2 =.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' =x2 =');
//   } else {
//     console.log(i);
//   }
// }

// =========================================================================================== //

// 11. Задача
// Вывести все числа в консоль в столбик из промежутка от 1 до 30 вкл., доклеивая числу, которое делится на 4: * 4 *.

// for (let i = 1; i <= 30; i++){
// if (i % 4 === 0) {
//   console.log(i + ' * 4 *');
// } else {
//   console.log(i);
// }
// }

// let i = 1;
// // debugger
// while (i <= 30) {
//   if (i % 4 === 0) {
//    console.log(i + ' * 4 *');
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// // debugger
// do {
//   if (i % 4 === 0) {
//     console.log(i + ' * 4 *');
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 30);

// for (let i = 1; i <= 30; i++) {
// console.log(i % 4 === 0) ? i + '* 4 *' : i;
// console.log(i % 4 === 0 ? i + '* 4 *' : i);
// }

// =========================================================================================== //

// 12. Задача
// Вывести все числа в консоль в столбик из промежутка от 1 до 30 вкл., доклеивая числу, которое не делится на 4: =!/4=.

// for (let i = 1; i <= 30; i++) {
//   if (i % 4 !== 0) {
//     console.log(i + '=!4=');
//   } else {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i <= 30) {
//   if (i % 4 !== 0) {
//     console.log(i + '=!4=');
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// do {
//   if (i % 4 !== 0) {
//     console.log(i + '=!4=');
//   } else {
//     console.log(i);
//   }
//   i++;
// } while(i <= 30);

// for (let i = 1; i <= 30; i ++){
//   console.log(i % 4 !== 0 ? i + '=!4=': i);
// }

// =========================================================================================== //

// 13. Задача
// Выводить только чётные числа в консоль в столбик из промежутка от 5 до 30 не вкл.

// for (let i = 5; i < 30; i++) {
//   if (i === 5) {
//     console.log(i);
//   } else if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 5;
// while (i < 30) {
//   console.log(i);
//   i++;
// }

// let i = 5;
// do {
//   console.log(i);
//   i++
// } while (i < 30);


// =========================================================================================== //

// 14. Задача
// Выводить только нечётные числа в консоль в столбик из промежутка от 5 до 30 не вкл.


// for (let i = 5; i < 30; i++){
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


// let i = 5;
// while (i < 30) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 5;
// // debugger
// do {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 30);

// =========================================================================================== //

// 15. Задача
// Выводить только каждое 5 число из промежутка от 1 до 50 не вкл.

// for (let i = 1; i < 50; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }


// let i = 5;
// while (i < 50) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }


// let i = 5;
// do {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 50);


// =========================================================================================== //

// 16. Задача
// Вывести промежуток чисел от 1 до 30.

// Кажому шестому числу добавить ~* ~;
// Кажому третьему числу добавить ^ _ ^;
// Остальным - ???;


// for (let i = 1; i <= 30; i++){
//   if (i % 6 === 0) {
//     console.log(i + '~* ~');
//   } else if (i % 3 === 0) {
//     console.log(i + '^ _ ^');
//   } else {
//     console.log('???');
//   }
// }

// let i = 1;
// while (i <= 30) {
//   if (i % 6 === 0) {
//     console.log(i + '~* ~');
//   } else if (i % 3 === 0) {
//     console.log(i + '^ _ ^');
//   } else {
//     console.log('???');
//   }
//   i++;
// }

// let i = 1;
// do {
//   if (i % 6 === 0) {
//     console.log(i +'~* ~');
//   } else if (i % 3 === 0) {
//     console.log(i + '^ _ ^');
//   } else {
//     console.log('???');
//   }
//   i++;
// } while (i <= 30);


// =========================================================================================== //

// 17. Задача
// Запросить у пользователя число. Вывести все чётные числа от 1 до того числа, которое ввёл пользователь с клавиатуры.

// let userNum = Number(prompt('Write your number'));

// for (let i = 1; i < userNum; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < userNum; i++) {
// console.log(i % 2 === 0 ? i : 'odd');
// }

// =========================================================================================== //

// 18. Задача
// Вывести числа в столбик от 3 до 21 вкл, добавляя всем символ + 5 =.

// for (let i = 3; i <= 21; i++) {
//   console.log(i + ' + 5 = ');
// }

// let i = 3;
// while (i <= 21) {
//   console.log(i + ' + 5 =');
//   i++;
// }

// let i = 3;
// do {
//   console.log(i + ' + 5 =');
//   i++;
// } while(i <= 21);

// =========================================================================================== //

// 19. Задача
// Запросить у пользователя число, умножить его на 4, вывести выражение в красивом виде:
// 10 x 4 = 40

// let userNum = Number(prompt('Wriye your number'));

//   console.log(`${userNum} x 4 = ${userNum * 4}`);

// =========================================================================================== //

// 20. Задача
// Вывести столбик из таблицы умножения на число 5, диапазон столбика от 1 до 10 вкл.

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} x 5 = ${i * 5}` );
// }

// =========================================================================================== //

// 21. Задача
// Вывести столбик из таблицы умножения на число 10, диапазон столбика от 2 до 10 вкл.

// for (let i = 2; i <= 10; i++) {
//   console.log(`${i} x 10 = ${i * 10}` );
// }

// =========================================================================================== //

// 22. Задача
// Вывести часть столбика из таблицы умножения на число 6, диапазон столбика от 1 до 10 вкл. При этом столбик должен состоять только из чётных чисел.

// # Результат должен получиться следующим:
// 2 x 6 = 12
// 4 x 6 = 24
// 6 x 6 = 36
// 8 x 6 = 48
// 10 x 6 = 60

// for (let i = 1; i <= 10; i++){
//   if (i % 2 === 0) {
//     console.log(`${i} x 6 = ${i * 6}`);
//   }
// }

// =========================================================================================== //

// 23. Задача
// Посчитать сумму всех чисел в диапазоне от 3 до 7 не вкл.


// let sum = 0;

// for (let i = 3; i < 7; i++){
// sum += i;
// };
// console.log(sum);



// let sum = 0;
// let i = 3;
// while (i < 7) {
//   sum += i;
//   i++;
// }
// console.log(sum);


// let sum = 0;
// let i = 3;
// do {
//   sum += i;
//   i++;
// } while (i < 7);

// console.log(sum);

// =========================================================================================== //

// 24. Задача
// Посчитать сумму всех чисел в диапазоне от 5 до 15 не вкл.

// let sumNum = 0;

// for (let i = 5; i < 15; i++){
//   sumNum += i;
// }
// console.log(sumNum);

// =========================================================================================== //

// 25. Задача
// Посчитать сумму только нечётных чисел в диапазоне от 4 до 12 вкл.

// let sum = 0;

// for (let i = 4; i <= 12; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// =========================================================================================== //

// 26. Задача
// Посчитать сумму чисел, кратных 4 в диапазоне от 2 до 26 не вкл.

// let sum = 0;

// for (let i = 2; i < 26; i++){
//   if (i % 4 === 0) {
//     sum += i
//   }
// }
// console.log(sum);


// =========================================================================================== //

// 27. Задача
// Посчитать сумму чисел, кратных 2 в диапазоне от 2 до 10 вкл.

// let sum = 0;

// for (let i = 2; i <= 10; i++){
//   if (i % 2 === 0) {
//     sum += i
//   }
// }
// console.log(sum);


// =========================================================================================== //

// 28. Задача
// Посчитать сумму чисел, кратных 12 в диапазоне от 12 до того числа, который пользователь введёт с клавиатуры.

// let userNum = Number(prompt('Write your number'));

// let sum = 0;
// for (let i = 12; i <= userNum; i++) {

//   if (i % 12 === 0) {
//     sum += i
//   }
// }

//   console.log(sum);

// =========================================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 29. Задача ★
// У пользователя запрашиваются числа по одному до тех пор, пока он не введёт ноль. Как только пользователь ввёл 0 в консоль выводится сумма квадратов всех считанных чисел.

//   Пример:
// 1
//   - 3
// 5
//   - 6
//   - 10
// 13
// Результат: 340

// let sum = 0;
// while (true) {
//   let num = Number(prompt('Write your number'));
//   sum += num ** 2;
//   if (num === 0) {
//     break;
//   }
// }
// console.log(sum);



// let sum;
// do {
//   num = Number(prompt('Write your number'));
// } while (num <= 10 && num)


// let sum = 0;
// // debugger
// do {
//   num = prompt('Write your number');
// sum += num * 5;
// if (num === null) {
//   break;
// }
// } while (true)
// console.log(sum);

// =========================================================================================== //

// ★ 30. Задача ★
// Запросить у пользователя 2 числа - число a и число b Вывести в консоль среднее арифметическое всех чисел из этого промежутка от a до b включительно, которые кратны 3.

// Пример:
// Ввели 2 числа: -5 и 12
// В этом отрезке 6 чисел, которые делятся на 3:
// -3 0 3 6 9 12. Их среднее арифметическое равно 4.5
// Примечание:

// Учесть случай, когда промежуток задан неверно(например: 12 и - 5);
// Учесть случай, когда чисел, делящихся на 3 - нет;

// let a = Number(prompt('Write your number 1'))
// let b = Number(prompt('Write your number 2'))



// if (b <= a) {
//   console.log('Промежуток задан не верно');
// } else {
//   let sum = 0;
// let count = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 3 === 0) {
//    sum += i;
// count++;
//     }
// }
// if (count === 0) {
//   console.log('Чисел делящихся на 3 нет');
// } else {
//   console.log(sum / count);
// }
// }

// =========================================================================================== //

// ★★ 31. Задача ★★
// Напишите код, который выводит в консоль все простые числа из интервала от 2 до n(n - вводит пользователь). Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

//   Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Для n = 10 результат должен быть 2, 3, 5, 7.

// let userNum = Number(prompt('Write your number'));

// for (let i = 2; i <= userNum; i++) {
//   // debugger
//   if (i / 1 === i ) {
//     console.log(i);
//   }
// }


// =========================================================================================== //

// ★★ 32. Задача ★★
// Вывести таблицу умножения от 1 до 5 в таком же формате, как показано снизу. Количество пробелов должно соответствовать, чтобы таблицы выглядела красиво.

//    1  2  3  4  5

// 1  1  2  3  4  5

// 2  2  4  6  8  10

// 3  3  6  9  12 15

// 4  4  8  12 16 20

// 5  5  10 15 20 25



// let a = '';
// let b = '1';

// for (let i = 1; i <= 5; i++) {
//   a += i + ' ';
// }
// console.log(a);
// console.log(b + ' ');


// =========================================================================================== //

// ★ Задачи на вложенные циклы ★
// ★ 33. Задача ★
// С помощью вложенных циклов и символа * нарисуйте:

// const STAR = '*';
// *
// **
// ***
// ****

// let star = '';
// for (let i = 1; i <= 4; i++) {
//   star += '*';
//   console.log(star);
// }


// let star = '';

// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <= 4; j++) {
//     star += '*'
//   }
//   console.log(star);
// }

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) {
//     // console.log(j);
//     // console.log(i);

//     document.write(i)
//   }
// }


// let star = '';
// for (let i = 1; i <= 2; i++) {
//   // 2 итерация
//   for (let j = 1; j <= 4; j++) {
//     star += '*'
//     // window.document.write('*')
//     window.document.write(star)
//     // console.log('*');
//     window.document.write('<br>')
//   }
// }


// for (let i = 5; i <= 10; i++) {


// }


// const user = {
//   name: 'alex',
//   age: 30,
//   array: [1, 654, 654]
// }
// const test = 'access'

// // alert(test)
// // alert(user)
// console.log(user);
// console.log(String(user)); // '[object Object]'





// НУ
// star: ''
// UI: <span></span>


// 1 итерация
// i = 1
// 1 - 1 итерация
// j = 1

// star: '*'
// UI: <span>*</span>

// j++
// 1 - 2
// j = 2

// star: '**'
// UI: <span>***</span>


// j++
// 1 - 3
// j = 3

// star: '***'
// UI: <span>******</span>

// j++
// 1 - 4
// j = 4

// star: '****'
// UI: <span>**********</span>

// j++
// j = 5 - end cycle


// star: '****'
// UI: <span>**********<br></span>


// i++
// 2 iteration

// i = 2

// 2 - 1
// j = 1

// star: '*****'
// UI: <span>**********<br>*****</span>



// let star = '';
// for (let i = 0; i <= 4; i++) {
// star += '*';
// console.log(star);
// }


// =========================================================================================== //

// ★ 34. Задача ★
// С помощью вложенных циклов нарисуйте:

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// let result = '';
// // debugger
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     result += i + ' '
//   }
//   result += '\n';
// }
// console.log(result);




// 1: кол-во итераций каждого цикла увеличивается на 1 - внутренний
// 2: значение в теле цикла также увеличивается на 1 - внешний

// let result = ''
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     result += i + " "
//   }
//   result += '\n'
// }

// console.log(result);



// =========================================================================================== //

// ★ 35. Задача ★
// С помощью вложенных циклов нарисуйте:

// 1
// X X
// 3 3 3
// X X X X
// 5 5 5 5 5


// let result = '';

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i % 2 === 0) {
//       result += 'x' + ' ';
//     } else {
//       result += i + ' ';
//     }
//   }
//   result += '\n';
// }
// console.log(result);

// =========================================================================================== //

// ★ 36. Задача ★
// С помощью вложенных циклов и символа * нарисуйте:

// ****
// ***
// **
// *


// let result = '';

// for (let i = 4; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

// =========================================================================================== //

// ★ 37. Задача ★
// С помощью вложенных циклов нарисуйте:

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


// 7 6 5 4 3 2 1
// 9 8 7 6 5 4 3 2 1
// 2 1
// 1
// 11 10 9 8 7 6 5 4 3 2 1


// 1: В каждой строчки значение уменьшается на 1
// 2: Количество цифр в строке уменьшается на 1
// 3: Каждая следующая строчка начинается на число меньше предыдущего на 1

// let i = 5; - Начальное значение
// i >= 1 (i = 1 - конечно значение)

// i > 1 (i = 2 - конечно значение)
// i < 10 (i = 9 - конечно значение)


// let j = i; - Начальное значение 5, 4, 3, 2, 1


// let result = '';

// for (let i = 5; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     result += j + ' ';
//   }
//   result += '\n'
// }
// console.log(result);


// =========================================================================================== //

// ★ 38. Задача ★
// С помощью вложенных циклов нарисуйте:

// U U U U 1
// U U U 2 1
// U U 3 2 1
// U 4 3 2 1
// 5 4 3 2 1

// U U U U 1 / U U U 2 1 / U U 3 2 1 / U 4 3 2 1 / 5 4 3 2 1


// let a = ' U ';
// let b = ' ';
// // let c = '';
// // let d = '';
// // let e = '';


// for (let i = 1; i <= 1; i++) {

//   for (let k = 1; k <= 4; k++) {
//     b += a + i;
//   }
// }

// console.log(b);



// =========================================================================================== //

// ★ 39. Задача ★
// С помощью вложенных циклов нарисуйте:

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1


// let result = '';

// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j <= 5; j++) {
//     result += j + ' '
//   }
//   result += '\n'
// }

// console.log(result);

// ★ 39.5. Задача ★
// 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20 -
// 21 - 22 - 23 - 24 - 25 - 26 - 27 - 28 - 29 - 30 -
// 31 - 32 - 33 - 34 - 35 - 36 - 37 - 38 - 39 - 40 -
// 41 - 42 - 43 - 44 - 45 - 46 - 47 - 48 - 49 - 50 -



// =========================================================================================== //

// ★★ 40. Задача ★★
// С помощью вложенных циклов нарисуйте:

// 01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09 - 10
// 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20
// 21 - 22 - 23 - 24 - 25 - 26 - 27 - 28 - 29 - 30
// 31 - 32 - 33 - 34 - 35 - 36 - 37 - 38 - 39 - 40
// 41 - 42 - 43 - 44 - 45 - 46 - 47 - 48 - 49 - 50



// 01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09 - 10 -
// 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20 -
// 21 - 22 - 23 - 24 - 25 - 26 - 27 - 28 - 29 - 30 -
// 31 - 32 - 33 - 34 - 35 - 36 - 37 - 38 - 39 - 40 -
// 41 - 42 - 43 - 44 - 45 - 46 - 47 - 48 - 49 - 50 -


// let numbers = '';
// let b = 0;
// // debugger
// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 10; k++) {
//     b += 1;
//     if (b < 10) {
//       numbers += ` 0${b} -`
//     } else {
//       numbers += ` ${b} -`;
//     }
//     // numbers += (b < 10) ? ` 0${b} -` : ` ${b} -`;

//   }
//   numbers += '\n';
// }
// console.log(numbers);




// let a = '';
// b = 0;
// debugger
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 10; j++) {
//     b += 1
//     a += (b < 10) ? `0${b} ` : `${b} `
//   }
//   a += '\n'
// }

// console.log(a)

// =========================================================================================== //

// ★★ 41. Задача ★★
// С помощью вложенных циклов и символа * нарисуйте:

//   *****
//  *******
// *********

// let a = '';
// let b = '';
// // debugger
// for (let i = 1; i <= 5; i++) {
//   a += '*'
//   for (let k = 1; k <= 1; k++) {
//     b += '&'
//   }
// }
// console.log(a);
// console.log(b);

// =========================================================================================== //

// ★★ 42. Задача ★★
// С помощью вложенных циклов и символа * нарисуйте:

// *********
//  *******
//   *****
//    ***
//     *

// let result = '';
// // debugger
// for (let i = 1; i <= 5; i++) {
//   for (let k = 9; k >= i; k-=2) {
//     result += '*';
//   }
//   result += '\n'
// }
// console.log(result);

// * * * * * * * * * 9
// * * * * * * * * 8
// * * * * * * * 7
// * * * * * * 6
// * * * * * 5



// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9


// =========================================================================================== //

// ★★ 43. Задача ★★
// С помощью вложенных циклов и символа * нарисуйте:

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// =========================================================================================== //

// ★★★ 45. Задача ★★★
// С помощью вложенных циклов нарисуйте:

// 01-02-03-04-05-06-07-08-09-10
// 11-12-13-14-15-16-17-18-19-20
// 21-22-23-24-25-26-27-28-29-30
// 31-32-33-34-35-36-37-38-39-40

// let number = '';
// let b = 0;
// for (let i = 0; i <= 4; i++) {
//   for (let k = 0; k < 10; k++) {
//     b += 1;
//     if (b < 10) {
//       number += `0${b}-`
//     } else if (
//       b !== 10 &&
//       b !== 20 &&
//       b !== 30 &&
//       b !== 40 &&
//       b !== 50) {
//       number += `${b}-`
//     } else {
//       number += `${b}`
//     }
//   }
//   number += '\n'
// }
// console.log(number);


let number = '';
let b = 0;
for (let i = 0; i <= 4; i++) {
  for (let k = 0; k < 10; k++) {
    b += 1;
    if (b < 10) {
      number += `0${b}-`
    } else if (k === 9) {
      number += `${b}`
    } else {
      number += `${b}-`
    }
  }
  number += '\n'
}
console.log(number);

[5436, 546, 4].push(3, 3, 6765, 7, 65)


const test = ['let', 'const', 'var']

test.join()

'gfdgfdgd'.includes()


// push(...items: number[]): number
// New elements to add to the array.
// Appends new elements to the end of an array, and returns the new length of the array.


// Неглубокое копирование (поверхностное копирование shallow copy)
// const newArr = [];
// for (let i = 0; i < test.length; i++) {
//   newArr.push(test[i])
// }

// const newArr = [];
// for (const el of test) {
//   newArr.push(el)
// }

// const newArr = test.concat()

const newArr = [...test]

console.log(newArr === test);
console.log(newArr);
console.log(test);


// TODO:
// FIXME:
// CHECK:
