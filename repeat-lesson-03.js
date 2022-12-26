// Задачи по теме 3. Number

// 1. Задача
// Пользователь вводит с клавиатуры 2 числа. Выполнить деление первого на второе и записать в подробном виде:
// 10 : 5 = 2

// let userNumber1 = Number(prompt('Write your number 1'));
// let userNumber2 = Number(prompt('Write your number 2'));

// console.log(`${userNumber1} : ${userNumber2} = ${userNumber1 / userNumber2}`);
// ------------------------------------------------------------------------


// 2. Задача
// Запросить у пользователя 1 число. Прибавить к нему 10, записать в подробном виде:
// 25 + 10 = 35

// let userNumber = Number(prompt('Write your number'));

// console.log(userNumber + ' + 10 = ' + (userNumber + 10));
// console.log(`${userNumber} + 10 = ${userNumber + 10}`);


// ------------------------------------------------------------------------


// 3. Задача
// Запросить у пользователя 1 число. Из 100 вычитаем запрошенное число, записать в подробном виде:
// 100 - 17 = 83

// let userNum = Number(prompt('Write your number'));

// console.log('100 - ' + userNum + ' = ' + (100 - userNum));
// console.log(`100 - ${userNum} = ${100 - userNum}`);


// ------------------------------------------------------------------------

// 4. Задача
// Запросить 2 числа, выполнить умножение в подробном виде:
// 5 × 7 = 35

// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));


// // // console.log(`${userNum1} x ${userNum2} = ${userNum1 * userNum2}`);
// console.log(userNum1 + ' x ' + userNum2 + ' = ' + userNum1 * userNum2); // без скобок записали потому что умножение имеет приоритет выше чем сложение.
// ------------------------------------------------------------------------

// 5. Задача
// Запросить 2 числа, выполнить вычитание в подробном виде:
// 10 - 13 = -3


// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));

// console.log(userNum1 + ' - ' + userNum2 + ' = ' + (userNum1 - userNum2));
// console.log(`${userNum1} - ${userNum2} = ${userNum1 - userNum2}`);

// ------------------------------------------------------------------------


// 6. Задача
// Запросить два числа, выполнить сначала умножение с этими числами, затем результат разделить на 2. Записать в подробном виде:
// 10 × 50 : 2 = 250


// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));

// console.log(userNum1 + ' x ' + userNum2 + ' : 2 = ' + (userNum1 * userNum2 / 2));
// console.log(`${userNum1} x ${userNum2} : 2 = ${userNum1 * userNum2 / 2}`);
// ------------------------------------------------------------------------

// 7. Задача
// Запросить у пользователя число. Вывести в консоль удвоенное число. Операцию записать в подробном виде:
// 17 × 2 = 34

// let userNum = Number(prompt('Write your number'));

// console.log(userNum + ' x 2 = ' + (userNum * 2));
// console.log(`${userNum} x 2 = ${userNum * 2}`);

// ------------------------------------------------------------------------

// 8. Задача
// Запросить у пользователя имя. Запросить у пользователя его возраст. Вывести в консоль:
// Тебя зовут <имя>, после дня рождения тебе будет <возраст> лет!

// let userName = prompt('Write your name');
// let userAge = Number(prompt('Write your age'));

// console.log('Тебя зовут ' + userName, 'после дня рождения тебе будет ' + (userAge + 1) + ' лет!');

// ------------------------------------------------------------------------

// 9. Задача
// Измени значение в переменной seven, чтобы в консоль вывелась цифра 10. Используя только оператор инкремента.

// let seven = 9;
// console.log(++seven);

// let seven = 9;
// seven++;
// console.log(seven);
// ------------------------------------------------------------------------

// 10. Задача
// Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// let tetraVar = 4;
// console.log(7 + tetraVar++ - 3 * --tetraVar);

// 7 + 4 - 3 * 4 = -1

// let index = 1; // 2
// console.log(1); // 1
// console.log(3); // 3

// ------------------------------------------------------------------------

// 11. Задача
//Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// let tetraVar = 0;
// console.log(1 + ++tetraVar - 3 * --tetraVar + 2 * (++tetraVar + ++tetraVar));


// 1 + 1 - 3 * 0 + 2 * (1 + 2) = 1 + 1 - 3 * 0 + 2 * 3 = 1 + 1 - 0 + 6 = 2 - 0 + 6 = 8
// ------------------------------------------------------------------------

// 12. Задача
// Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

//let tetraVar = 5;

//                   6                         7             6
//console.log(3 - ++tetraVar - 3 + 1 * 2 * (++tetraVar + --tetraVar));

// 3 - 6 - 3 + 1 * 2 * (7 + 6) =
// 3 - 6 - 3 + 1 * 2 * 13 =
// 3 - 6 - 3 + 26 = 20

// ------------------------------------------------------------------------

// 13. Задача
// Считай с клавиатуры три целых числа. Выведи на экран их среднее арифметическое в подробнов виде.
// Среднее арифметическое - это число, равное сумме всех чисел, деленной на их количество.



// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));
// let userNum3 = Number(prompt('Write your number 3'));

// console.log(userNum1 + ' + ' + userNum2 + ' + ' + userNum3 + ' / 2 = ' + ((userNum1 + userNum2 + userNum3) / 3));
// console.log(`${(userNum1 + userNum2 + userNum3) / 3}`);

// ------------------------------------------------------------------------


// 14. Задача
// Что выведется в консоль?

// console.log("6" + 10); // 610
// console.log(20 + "5"); // 25
// console.log("10" + "10"); // 1010

// console.log("6" - 10); // -4
// console.log(20 / "5"); // 4
// console.log("10" * "10"); // 100

// console.log("10" + 7 + 5 + "3"); // 10753
// console.log("10" - 7 + 5 + "3"); // 83
// console.log("10" + (7 + 5) + "3"); // 10123

// console.log(7 + 5 + String("5") + "3"); // 1253
// console.log(Number("10") + 7 + 5 + "3"); // 223
// console.log(Number("10") + Number(String(7)) + String(5) + 3); // 1753

// console.log(Number("")); // 0
// console.log(Number('0')); // 0
// console.log(Number(' ')); // 0

// console.log(Number('   ')); // 0
// console.log(Number('2')); // 2
// console.log(Number('2px')); // NaN

// ------------------------------------------------------------------------

// 15. Задача
// Укажите все значения NaN:

// console.log("2px" - 2); // NaN
// console.log(0 + 3);
// console.log("10" + 10);
// console.log("3" - 4);
// console.log("4px" * 2); // NaN
// console.log(10 - "7");
// console.log(7 - "2px"); // NaN
// console.log("4px" + 2);
// console.log("8px" / 2); // NaN
// ------------------------------------------------------------------------

// 16. Задача
// Сделать рефакторинг кода:

// let index = 0;
// index = index + 1;
// console.log(index);

//* let index = 0;
//* index += 1;
//* console.log(index);


// let anotherNum = 10;
// anotherNum = anotherNum / 5;
// console.log(anotherNum);

//* let anotherNum = 10;
//* anotherNum /= 5;
//* console.log(anotherNum);


// let indexTest = 5;
// indexTest = indexTest -1;
// console.log(indexTest);

//* let indexTest = 5;
//* indexTest -= 1;
//* console.log(indexTest);


// ------------------------------------------------------------------------

// 17. Задача
// Программист написал код, который выводит в консоль значение индекса, увеличенное на 1. Но в консоль выводится не то, что он хочет. Исправьте код.

// let index = 100;
// console.log(++index);

// ------------------------------------------------------------------------

// ★ Задачи повышенной сложности ★
// 18. ★ Задача ★
// Легенда: Вы заходите в магазин и видите огромную очередь, вам нужно рассчитать время ожидания в очереди.
// Пользователь вводит кол-во людей в очереди. Фиксированное время приема одного покупателя всегда равна 5 минутам.

// Пример ввода:
// Введите кол-во людей: 40

// Пример вывода:
// Вы должны отстоять в очереди 3 часа и 20 минут.

// let numPeople = Number(prompt('Введите количество людей:'));
// let people = numPeople * 5;
// let hour = (Math.floor(people / 60))
// let min = people % 60;
// console.log(`Вы должны отстоять в очереди ${hour} часа и ${min} минут.`);


// ------------------------------------------------------------------------



// 19. ★ Задача ★
// В переменной number записано целое число. В переменную lastDigit нужно записать последнюю цифру этого числа. Для вычисления используй переменную number и оператор «остаток от деления».

// let number = 546;
// console.log(number % 10);


// 20. ★★ Задача ★★
// Решить задачу 18 без использования функций parseInt и Math.floor.

// let target = 76.543654
// console.log((target - target % 60) / 60);