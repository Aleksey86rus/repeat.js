// 1. Задача
// Запросить у пользователя число. Если оно равно 108, то вывести в консоль: Ом.

// let userNum = Number(prompt('Write your number'));
// if (userNum === 100) {
//   console.log('Om');
// }

// ================================================================================ //
// 2. Задача
// Запросить у пользователя 2 числа. Вывести в консоль наименьшее число. Если числа одинаковые, то вывести любое из этих чисел.

// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));

// if (userNum1 <= userNum2) {
//   console.log(userNum1);
// } else {
//   console.log(userNum2);
// }

// ================================================================================ //

// 3. Задача
// Запросить одно число, проверить на чётность. Если число чётное, то вывести true, иначе false.


// let userNum = Number(prompt('write your number'));

// if (userNum % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(userNum % 2 === 0) ? true : false;

// result = userNum % 2 === 0 ? true : false;
// console.log(result);

// ================================================================================ //

// 4. Задача
// Запросить у пользователя число. Если оно чётное или делится на 7, то вывести в терминал: okey, иначе: error.

// let userNum = Number(prompt('Write your number'));

// if (userNum % 2 === 0 || userNum % 7 === 0) {
//   console.log('okey');
// } else {
//   console.log('error');
// }

// result = userNum % 2 === 0 || userNum % 7 === 0 ? 'okey' : 'error';
// console.log(result);

// ================================================================================ //

// 5. Задача
// Запросить 1 число и 1 строку. Если число чётное, то к строке добавить =even=. Иначе добавить к строке =odd=.


// let userNum = Number(prompt('Write your number'));
// let userText = prompt('Write your text');

// if (userNum % 2 === 0) {
//   console.log(userText + ' ' + '=even=');
// } else {
//   console.log(userText + ' ' + '=odd=');
// }


// ================================================================================ //

// 6. Задача
// Запросить 2 числа, проверить на чётность первое число, а второе - делится ли на 3.

// Если оба числа удовлетворяют условиям, то вывести: plus plus.
// Если хотя бы одно число удовлетворяет условиям, то: plus.
// Если ни одно не удовлетворяет, то: minus.

// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));

// if (userNum1 % 2 === 0 && userNum2 % 3 === 0) {
//   console.log('plus plus');
// } else if (userNum1 % 2 === 0 || userNum2 % 3 === 0) {
//   console.log('plus');
// } else {
//   console.log('minus');
// }

// ================================================================================ //

// 7. Задача
// Запросить имя и возраст. Если возраст больше или равно 18, то вывести: Добро пожаловать, <имя>!. Иначе вывести: <имя>, ваш возраст - <возраст>, вам доступ запрещён!.

// let userName = prompt('write your Name');
// let userAge = Number(prompt('write your Age'));

// if (userAge >= 18) {
//   console.log('Добро пожаловать ' + userName);
// } else {
//   console.log(userName + ' ваш возраст ' + userAge + ', вам доступ запрещен!.');
// }

// if (userAge >= 18) {
//   console.log(`Добро пожаловать ${userName}`);
// } else {
//   console.log(`${userName} ваш возраст ${userAge}, вам доступ запрещен!.`);
// }

// ================================================================================ //

// 8. Задача
// Создать 2 переменные, присвоить им значения: на улице холодно и на улице тепло соответственно. Запросить у пользователя с клавиатуры температуру на улице. Если температура выше 0, вывести надпись: на улице тепло, в противном случае вывести надпись: на улице холодно.


// let userText1 = 'на улице холодно';
// let userText2 = 'на улице тепло';
// let userTemt = Number(prompt('Enter the temperature that is outside'));

// if (userTemt > 0) {
//   console.log(userText2);
// } else {
//   console.log(userText1);
// }

// ================================================================================ //

// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.

// let userNum = Number(prompt('Wriye your number'));

// if (userNum >= 0 && userNum < 10) {
//   console.log('thin');
// } else if (userNum >= 10 && userNum <= 20) {
//   console.log('medium');
// } else if (userNum >= 21 && userNum < 50) {
//   console.log('extra');
// }

// ================================================================================ //

// 10. Задача
// Пользователя просят ввести число. Если он не попал в промежуток от 10 до 21 вкл, то вывести в консоль: Luck.


// let userNum = Number(prompt('write your number'));

// if (userNum < 10 || userNum >= 21) {
//   console.log('Luck');
// }

// ================================================================================ //

// 11. Задача
// Ввести с клавиатуры имя и возраст. Если возраст в пределах 18-27 включительно, то вывести надпись: ИМЯ, явитесь в военкомат, где ИМЯ - это имя, введенное ранее с клавиатуры. Если возраст не находится в указанных пределах, то ничего выводить не нужно.


// let userName = prompt('Write your name');
// let userAge = Number(prompt('Write your age'));

// if (userAge >= 18 && userAge <= 27) {
//   console.log(userName + ' явитесь в военкомат');
// }

// ================================================================================ //

// 12. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают возраст и программа определяет, нужно ему в школу или уже пора в институт. Но она работает неправильно. Например, пятилетнего ребенка отправляют в институт!

// let age = prompt();
// 	if (age < 18)
// 		if (age >= 6)
// 			console.log("нужно ходить в школу");
// 	else
//   console.log("пора в институт");

// let age = Number(prompt('Write your age'));
// if (age >= 0 && age <= 6) {
//   console.log("нужно ходить в сад");
// } else if (age >= 7 && age <= 17) {
//   console.log("нужно ходить в школу");
// } else {
//   console.log('пора в инситут');
// }


// let age = Number(prompt('Write your age'));
// if (age <= 6) {
//   console.log("нужно ходить в сад");
// } else if (age >= 7 && age <= 17) {
//   console.log("нужно ходить в школу");
// } else {
//   console.log('пора в инситут');
// }

// ================================================================================ //

// 13. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают ввести любой текст. Если количество символов в введённом слове больше 7, то в консоль выводится текст в верхнем регистре, иначе - в нижнем регистре.

// let textuser = prompt();
// 	if textuser > 7:
// 		console.log(TEXTUSER);
// 	else
// 		console.log(textuser);


// let textUser = prompt();
// if (textUser.length > 7) {
//   console.log(textUser.toUpperCase());
// } else {
//   console.log(textUser.toLowerCase());
// }

// ================================================================================ //

// 14. Задача
// Сделать рефакторинг кода и исправьте ошибки. Пользователя просят ввести 1 число с клавиатуры.

// Если это число чётное, то вывести только: even;
// Если это число делится на 7, то вывести только: multiple;
// Но если это число и чётное, и делится на 7, то вывести только: even & multiple;
// let chislo = prompt();
// if (chislo / 2) {
// 	console.log("even");
// }
// if (chislo / 7); {
// 	console.log("multiple");
// }
// if (chislo / 7 || chislo / 2) {
// 	console.log("even & multiple");
// }


// let userNum = Number(prompt('Write your number'));

// if (userNum % 7 === 0 && userNum % 2 === 0) {
//   console.log("even & multiple");
// } else if (userNum % 2 === 0) {
//   console.log("even");
// } else if (userNum % 7 === 0) {
//   console.log("multiple");
// }

// ================================================================================ //

// 15. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковые ли эти строки.

// Если строки одинаковые, то программа должна вывести сообщение строки одинаковые;
// Если строки разные, то программа должна вывести сообщение строки разные;

// let userStr1 = prompt('Write your text1');
// let userStr2 = prompt('Write your text2');

// if (userStr1 === userStr2) {
//   console.log('Строки одинаковые');
// } else {
//   console.log('Строки разные');
// }

// ================================================================================ //

// 16. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковое ли количество символов.

// Если строки одинаковые имееют одинаковое количество символов, то вывести сообщение Количество совпадает;
// Если строки имеют разное количество символов, то программа должна вывести сообщение Не совпадает;

// let userStr1 = prompt('Write your text1');
// let userStr2 = prompt('Write your text2');

// if (userStr1.length === userStr2.length) {
//   console.log('Количество совпадает');
// } else {
//   console.log('Не совпадает');
// }

// ================================================================================ //

// 17. Задача
// Есть секретное слово для доступа к закрытой информации, но у пользователя сломалась клавиатура, и теперь невозможно набирать буквы в верхнем регистре. Напиши программу, которая будет сравнивать введенную строку со строкой из переменной secret, не учитывая регистр.
// Если введенная строка равна строке из переменной secret, программа выводит на экран сообщение доступ разрешен. В ином случае - доступ запрещен.

// let secret = "AmIGo";

// let userSecret = prompt('Write your word');

// if (userSecret === secret.toLowerCase()) {
//   console.log('Доступ разрешен');
// } else {
//   console.log('Доступ запрещен');
// }

// ================================================================================ //

// ★ Задачи повышенной сложности ★
// ★ 18. Задача ★
// Запросить у пользователя 3 числа. Найти наибольшее число. Если числа одинаковые, то вывести любое число.

// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));
// let userNum3 = Number(prompt('Write your number 3'));


// if (userNum1 >= userNum2) {
//   if (userNum1 >= userNum3) {
//     console.log(userNum1);
//   } else {
//     console.log(userNum3);
//   }
// } else {
//   if (userNum2 > userNum3) {
//     console.log(userNum2);
//   } else {
//     console.log(userNum3);
//   }
// }


// ================================================================================ //

// ★ 19. Задача ★
// Запросить у пользователя с клавиатуры число.

// Если пользователь нажал отмену, то вывести в консоль: Нажата отмена;
// Если пользователь нажал ок и это было число, то вывести его;
// Если пользователь нажал ок и это было не число, то вывести в консоль: Это не число;
// Если пользователь нажал ок с пустым текстом, то вывести в консоль: Пользователь ничего не ввёл;

// let userNum = prompt('Write your number');

// if (userNum === '') {
//   console.log('Пользовватель ничего не ввел');
// } else if (userNum === null) {
//   console.log('Нажата отмена');
// } else if (isNaN(userNum)) {
//   console.log('Это не число');
// } else {
//   console.log(Number(userNum));
// }


// let userNum = Number(prompt('Write your number'));

// console.log(userNum); // ничего => Ok and cancel => number 0
// console.log(typeof userNum); //  ok and cancel => 'number'
// console.log(typeof !userNum); // 'abs' => ok => 'boolean' / 'abs' => cancel => 'boolean'
// console.log(typeof userNum); // 'abs' => ok => 'number' / 'abs' => cancel => 'number'
// console.log(userNum); // 'abs' => ok => NaN / 'abs' => cancel => number 0
// console.log(!userNum); // 'abs' => ok => true / 'abs' => cancel => true
// console.log(userNum); // number 10 => ok => number 10 / number 10 => cancel => nummer 0
// console.log(!userNum); // number 10 => ok => false / number 10 => cancel => true
// console.log(isNaN(userNum)); // number 10 => ok => false / number 10 => cancel => false
// console.log(isNaN(userNum)); // 'abc' => ok => true / 'abc' => cancel => false



// let userNum = prompt('Write your number');

// console.log(typeof userNum); // Ok => 'string' / cancel => 'object'
// console.log(typeof userNum); // 'abs' => ok => 'string' / 'abs' => cancel => 'object'
// console.log(typeof userNum); // number 10 => ok => 'string' / number 10 => cancel => 'object'
// console.log(userNum); // number 10 => ok => '10' / number 10 => cancel => null
// console.log(userNum); // ok => пустая строка / cancel => null
// console.log(Number(userNum)); // number 10 => ok => number 10 / number 10 => cancel => number 0
// console.log(isNaN(userNum)); // 'abc' ok => true / 'abc' => cancel => false
// console.log(isNaN(userNum)); // number 500 ok => false / number 500 => cancel => false
// console.log(Number(isNaN(userNum))); // 'abc' ok => number 1 / 'abc' => cancel => number 0
// console.log(Number(isNaN(userNum))); // number 500 ok => number 0 / number 500 => cancel => number 0


// let a = 10;
// let b = '10';
// let c = '10px';
// console.log(isNaN(a)); // false
// console.log(isNaN(b)); // false
// console.log(isNaN(c)); // true


// ================================================================================ //

// ★ 20. Задача ★
// Не выполняя код, дать ответ, что выведется в консоль и почему. Как решить ReferenceError?

// let isAccess = true;
// if (isAccess) {
//   var test = "mp4";
// }
// if (isAccess) {
//   let anotherTest = "mkv";
// }
// console.log(test);
// console.log(anotherTest);


// let isAccess = true;
// let anotherTest; // let область видимость от 406 строки и до конца файла. Здесь мы ее объявили.

// if (isAccess) {
//   var test = "mp4"; // var область видимости от 409 и выше будет (undefined) от 409 и ниже будет 'mp4'
// }
// if (isAccess) {
//   anotherTest = "mkv"; // а здесь присвоили ей значение.
// }

// console.log(test);
// console.log(anotherTest);

//let / const = имеют блочую видимость, другими словами от скобки до скобки.

// ================================================================================ //

// ★ 21. Задача ★
// Выполнить задачу, пользуясь оператором switch.
// Пользователя просят ввести 1 символ:

// Если это "a", то вывести в консоль "alpha";
// Если это "b", то вывести в консоль "beta";
// Если это "c", то вывести в консоль "gamma";
// Если это "1", то вывести в консоль "4";
// Если это "2", то вывести в консоль "8";
// Если это "3", то вывести в консоль "15"; Во всех остальных случаях выводим: "error";


// let userNum = prompt('Write your symbol');

// switch (userNum) {
//   case 'a':
//     console.log('alpha');
//     break;
//   case 'b':
//     console.log('beta');
//     break;
//   case 'c':
//     console.log('gamma');
//     break;
//   case '1':
//     console.log(Number(4));
//     break;
//   case '2':
//     console.log(Number(8));
//     break;
//   case '3':
//     console.log(Number(15));
//     break;
//   default:
//     console.error('error');
// }

// ================================================================================ //

// ★ 22. Задача ★
// Решить задачи: 1, 3, 5, 9, пользуясь тернарным оператором.


// 1. Задача
// Запросить у пользователя число. Если оно равно 108, то вывести в консоль: Ом.


// let userNum = Number(prompt('Write your number'));

// userNum === 108 ? console.log('Oм') : null;
// userNum === 108 && console.log('Ом')


// ================================================================================ //


// 3. Задача
// Запросить одно число, проверить на чётность. Если число чётное, то вывести true, иначе false.

// let userNum = Number(prompt('Write your number'));

// userNum % 2 === 0 ? console.log(true) : console.log(false);

// ================================================================================ //

// 5. Задача
// Запросить 1 число и 1 строку. Если число чётное, то к строке добавить =even=. Иначе добавить к строке =odd=.

// let userNum = Number(prompt('Write your number'));
// let userStr = prompt('Write your text');

// userNum % 2 === 0 ? console.log(userStr + ' =even=') : console.log(userStr + ' =odd=');;

// ================================================================================ //

// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.

// let userNum = Number(prompt('Write your number'));

// userNum >= 0 && userNum <= 10 ? console.log('thin') : userNum >= 10 && userNum <= 20 ? console.log('medium') : userNum >= 21 && userNum < 50 ? console.log('extra') : null;

// let message = (userNum >= 0 && userNum < 10) ? 'thin' : (userNum >= 10 && userNum <= 20) ? 'medium' : (userNum >= 21 && userNum < 50) ? 'extra' : null;

// console.log(message);

