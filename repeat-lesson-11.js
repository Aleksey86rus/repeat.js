// Задачи по теме 11. String-ext
// 1. Задача
// Создать любую переменную типа string. Вывести посимвольно в консоль двумя способами:

// for;
// for of;

// let userStr = 'AlisA';

// // for (let i = 0; i <= userStr.length; i++) {
// //   console.log(userStr[i]);
// // }

// for (const el of userStr) {
//   console.log(el);
// }

// ================================================================================== //
// 2. Задача
// Написать функцию, на вход которой подаётся строка, функция возвращает индекс последнего элемента не зависимо от количества символов.

// let userStr = 'textd';

// function getIndexLastEl(str) {
//   return str.length - 1
// }

// console.log(getIndexLastEl(userStr));

// ================================================================================== //

// 3. Задача
// Написать функцию, на вход которого подаётся строка. Функция должна вернуть первый символ, предпоследний и последний.


// let userStr = 'concert';

// function getIndFirstPenultimateAndLastSymb(str) {
//   return {
//     first: str[0],
//     penult: str[str.length - 2],
//     last: str[str.length - 1]
//   }
// }

// function getIndFirstPenultimateAndLastSymb(str) {
//   return [
//     str[0],
//     str[str.length - 2],
//     str[str.length - 1]
//   ]
// }
// console.log(getIndFirstPenultimateAndLastSymb(userStr));

// ================================================================================== //

// 4. Задача
// Написать функцию, на вход которой подаётся две строки. Если первая строка длинее второй, то к первой доклеивается вторая, иначе - наоборот. Функция возвращает результирующую строку.

// let userStr1 = 'concert';
// let userStr2 = 'Moscow';

// function getResultString(str1, str2) {
//   if (str1.length > str2.length) {
//     return str1 + ' ' + str2
//   } else {
//     return str2 + ' ' + str1
//   }
// }

// function getResultString(str1, str2) {
//   return str1.length > str2.length ? str1 + ' ' + str2 : str2 + ' ' + str1
// }
// console.log(getResultString(userStr1, userStr2));

// ================================================================================== //

// 5. Задача
// Написать функцию, на вход которой подаётся строка, функция возвращает количество, встречающихся букв a незасивимо от того какой язык: русский или английский.


// let userStr = 'abracadabra';
// // let userStr = 'абракадабра';

// function getQuantitySymbolA(str) {
//   let count = 0;
//   for (const el of str) {
//     (el === 'a' || el === 'а') && count++
//   }
//   return count
// }

// console.log(getQuantitySymbolA(userStr));

// ================================================================================== //

// 6. Задача
// Написать функцию, на вход которой подаётся 2 параметра (1 параметр - строка, 2 параметр - символ). Функция возвращает число - количество встречающихся символов в строке.


// let userStr = 'universe';
// let userSymb = 'e';

// function getQuntitySymbolInString(str, symb) {
//   let countSymb = 0
//   for (const el of str) {
//     if (el === symb) countSymb++
//   }
//   return countSymb
// }

// console.log(getQuntitySymbolInString(userStr, userSymb));

// ================================================================================== //

// 7. Задача
// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет содержится ли вторая строка в первой.


// let userStr1 = 'black hole';
// let userStr2 = 'hole';

// function checkIfItContains(str1, str2) {
//   return str1.includes(str2)
// }

// console.log(checkIfItContains(userStr1, userStr2));

// ================================================================================== //

// 8. Задача
// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет равны ли эти строки независимо от регистра.

// let userStr1 = 'black';
// let userStr2 = 'Black';

// function checkStringEqual(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(checkStringEqual(userStr1, userStr2));

// ================================================================================== //

// TODO 9. Задача
// Написать функцию, на вход которой подаётся 3 строки, которая проверяет есть вторая или третья строка в первой. 
//Функция может работать как с двумя переменными, так и с тремя.


// let userStr1 = 'black white yellow undefined';
// let userStr1 = 'black white yellow';


// function checkSecondAndThirdStrInSecond(str1, str2, str3 = 'test') {
//   return str1.includes(str2) || str1.includes(str3)
// }

// console.log(checkSecondAndThirdStrInSecond(userStr1, 'test', 'black'));

// FIXME: 
// 1) Как проверить содержатся ли 2 подстроки в первой
// 2) Как работает параметр по умолчанию?
// Что такое значение по умолчанию?
// Зачем он нужен?
// Когда он срабатывает? (Когда срабатывает присваивание внутри скобок str3 = 'test')
// Когда нужен параметр по умолчанию, а когда нет?


// console.log(checkSecondAndThirdStrInSecond(userStr1, 'black', 'typo')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'typo', 'typo')); // false
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'typo', 'black')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'white', 'yellow')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'n427', 'yellow')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'white', 'boom')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'life', 'boom')); // false
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'life', 'black')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'yellow', 'black')); // true


// console.log(checkSecondAndThirdStrInSecond(userStr1, 'life', undefined)); // false
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'life')); // false
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'life', 'undefined')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'black')); // true
// console.log(checkSecondAndThirdStrInSecond(userStr1, 'yellow')); // true




{/* <string>.includes(<string>, <number>) */ }

// function showMessage(from, text = "текст не добавлен") {
//   return (from + ": " + text);
// }

// console.log(showMessage("Аня")); // Аня: текст не добавлен
// ================================================================================== //

// 10. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает строку в нижнем регистре и убирает лишние пробелы по бокам.

// let userStr1 = '    Yellow ';

// function getStringToLowerCase(str) {
//   return str.trim().toLowerCase()
// }

// console.log(getStringToLowerCase(userStr1));

// ================================================================================== //

// 11. Задача
// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет начинается ли первая строка со второй строки или заканчивается ей?

// let userStr1 = 'black yellow';
// let userStr2 = 'yellow';
// // let userStr2 = 'black';

// function checkFirstString(str1, str2) {
//   return str1.startsWith(str2) || str1.endsWith(str2)
// }

// console.log(checkFirstString(userStr1, userStr2));

// ================================================================================== //

// 12. Задача
// Получить массив строк с числами из строки: 100==!==200==!==500==!==700

// let userStr = '100==!==200==!==500==!==700';

// console.log(userStr.split('==!=='));

// ================================================================================== //

// 13. Задача
// Получить массив имён из строки: Pavel, Paul, David, Michael, Paper

// let userStr = 'Pavel, Paul, David, Michael, Paper';

// console.log(userStr.split(', '));

// ================================================================================== //

// 14. Задача
// Получить массив овощей из строки: carot: unknown, potato: unknown, cabage

// let userStr = 'carot: unknown, potato: unknown, cabage';

// console.log(userStr.split(', '));

// ================================================================================== //

// 15. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log('Tester'.split('').join('')); // Tester
// console.log('23(!)11(!)15(!)51'.split('(!)')); // [23,11,15,51]
// console.log('Tester'.split('').join(', ')); // T, e, s, t, e, r
// console.log('23(!)11(!)15(!)51'.split('(!)').join(',')); // 23,11,15,51
// console.log('Super'.split('').reverse().join('')); // repuS

// console.log(['Peter', 'John', 'Smith', 'Bob', 'Gale'].join(', ')); // Peter, John, Smith, Bob, Gale
// console.log([111, 222, 333, 444].join('-!-')); // 111-!-,222-!-,333-!-,444
// console.log(Array.from('Super').reverse().join('')); // repuS
// console.log('test - word -  - paper - -').split(' - '); // ?

//'-'
// ['test', 'word', '', paper, '-']
// console.log(': unknown, carrot: unknown, potato: unknown, cabage: unknown,'.split(': unknown,')); // [carrot, potato, cabage] //?

// const test = '+10+5+7+'
// const test2 = '10+5+7'
// const test3 = 'bread, eggs, water, cola'

// console.log(test.split('+'));
// console.log(test2.split('+'));
// console.log(test3.split(', '));

// ================================================================================== //

// 16. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает массив, состоящий из символов этой строки. Решить задачу двумя способами.

// let userStr = 'result';

// function getArrayFromSymbols(string) {
//   // return string.split('')
//   return Array.from(string)
// }

// console.log(getArrayFromSymbols(userStr));

// ================================================================================== //

// 17. Задача
// Написать функцию, на вход которой подаётся 2 параметра (1 параметр - строка, 2 параметр - символ). Функция возвращает строку, состоящая без символа.

// let userText = 'Test'

// function getStringNotSymbol(str, symb) {
//   let newStr = '';
//   for (const el of str) {
//     if (el !== symb) {
//       newStr += el
//     }
//   }
//   return newStr
// }

// console.log(getStringNotSymbol(userText, 'T'));


// function getStringNotSymbol(str) {
//   return str.slice(1, 4)
// }

// console.log(getStringNotSymbol(userText));

// ================================================================================== //

// 18. Задача
// Написать функцию, которая обрезает переданное слово со второго символа до предпоследнего включительно.

// let userStr = 'beauty'

// const myFunc = str => {
//   return str.slice(2, 5)
// }
// console.log(myFunc(userStr));

// ================================================================================== //

// 19. Задача
// Написать функцию cropString, на вход которой подаётся 3 параметра (1 параметр - строка, 2 - число (начало обрезки), 3 - число (конец обрезки)). Функция возвращает строку, состощая из символов, начиная от 2 параметра, заканчивая 3 вкл.

// Например:
// console.log(cropString("tester", 2, 4)); // "ste"


// let userStr = 'tester';

// const myFunc = (str, start, end) => {
//   return str.slice(start, end)
// }

// console.log(myFunc(userStr, 2, 4));

// ================================================================================== //

// 20. Задача
// Написать функцию generateLink, на вход которой подаётся 3 параметра: адрес, текст, класс для тега a. Функция возвращает строку вида:
// <a href="ссылка" class="класс">текст</a>.


// const myFunc = (adress, clas, text) => {
//   return `<a href="https://${adress}" class="${clas}">${text}</a>`
// }

// console.log(myFunc('vk.com', 'start__link', 'ВКонтакте'));

// ================================================================================== //

// 21. Задача
// Написать функцию, на вход которой подаётся строка из функции generateLink 16 задачи. Функция возвращает объект, состоящий из свойств:

// link: адрес ссылки;
// content: содержимое тега a;
// className: имя класс;


// const BackObjectOfProp = (link, className, text) => {
//   return {
//     link,
//     content: text,
//     class: className
//   }
// }

// console.log(BackObjectOfProp('https://vk.com', 'start__link', 'ВКонтакте'));

// ================================================================================== //

// 22. Задача
// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Расширение файла;

// const getObject = (pathToFile) => {
//   const indexDisk = pathToFile.indexOf(':');
//   const disk = pathToFile.slice(0, indexDisk);

//   const indexExt = pathToFile.lastIndexOf('\s');
//   const ext = pathToFile.slice(indexExt - 1)

//   return {
//     disk,
//     ext
//   }
// }

// console.log(getObject('E:\Frontend\js-native\js'));

// ================================================================================== //

// 23. Задача
// Написать функцию, на вход которой подаётся строка в kebab-case, функция возращает эту же строку в lowerCamelCase cssToJs("background-color") == 'backgroundColor'; cssToJs("list-style-image") == 'listStyleImage'; cssToJs("-webkit-transition") == 'webkitTransition';

// let userBackground = 'background-color';
// let userListStyleImage = 'list-style-image';
// let userWebkitTransition = 'webkit-trasition';


// const getStringLowerCamelCase = (str) => {
//   let background = str.split('-');

//   for (let i = 1; i < background.length; i++) {
//     background[i] = background[i][0].toUpperCase() + background[i].slice(1)
//   }
//   return background.join('')
// }

// console.log(getStringLowerCamelCase(userBackground));
// console.log(getStringLowerCamelCase(userListStyleImage));
// console.log(getStringLowerCamelCase(userWebkitTransition));

// ================================================================================== //

// 24. Задача
// Написать функцию, на вход которой подаётся строка, содержащая класс по БЭМ, вида: class = "about__btn about__btn_disabled" В функцию подаётся строка только вида, описанного сверху Вывести в консоль:

// Название блока;
// Название элемента;
// Название модифитора;


// const GetBemClass = (block, element, modifier) => {

//   console.log(
//     `Название блока: ${block}
//   Название элемента: ${element}
//   Название модификатора:${modifier}`);

// }

// console.log(GetBemClass('div class=\"about\"', 'about__btn', '_disabled'));

// ================================================================================== //

// 25. Задача
// Создать переменную: stringTask = "aaaccaaaccaacacaacc". Написать функцию, которая возвращает объект со следующими данными:

// Сколько % в строке символов "a" и "c";
// Программа должна работать с любым (в пределах разумного) количеством символов "a" и "с";

// let stringTask = 'aaaccaaaccaacacaacc';

// let stringTaskLength = stringTask.length;
// let countLetterA = 0;
// let countLetterC = 0;
// let percentLetterA = 0;
// let percentLetterC = 0;

// const getObjectForPercentLetter = (str) => {
//   for (const el of str) {
//     if (el === 'a') {
//       countLetterA++
//     } else if (el === 'c') {
//       countLetterC++
//     }
//     percentLetterA = (countLetterA / stringTaskLength) * 100;
//     percentLetterC = (countLetterC / stringTaskLength) * 100
//   }
//   return {
//     'Количество символов \'а\'': String(Math.floor(percentLetterA) + ' %'),
//     'Количество символов \'с\'': String(Math.floor(percentLetterC) + ' %')
//   };
// }

// console.log(getObjectForPercentLetter(stringTask));

// ================================================================================== //

// 26. Задача
// Создать функцию, которая удаляет первый и последний символы строки, которая подаётся на вход в функцию. Функция возвращает новую строку. Если в строке меньше двух символов, то возвращать пустую строку.

// let userStr = 'modifier';
// let userStr = 'mo';

// const getNewStr = (str) => {
//   if (str.length < 2) {
//     return '';
//   } else {
//     return str.slice(1, str.length - 1)
//   }
// }

// console.log(getNewStr(userStr));


// const getNewStr = (str) => {
//   let newString = str.split('');
//   newString.shift()
//   newString.pop()
//   if (newString.length < 2) {
//     return ''
//   }
//   return newString.join('')
// }

// console.log(getNewStr(userStr));

// ================================================================================== //

// 27. Задача
// Написать функцию, которая возвращает перевёрнутую строку строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// let userStr1 = 'world';
// let userStr2 = 'word';

// const getReverseString = (str) => {
//   return str.split('').reverse().join('')
// }

// console.log(getReverseString(userStr1));
// console.log(getReverseString(userStr2));
// ================================================================================== //

// 28. Задача
// Написать функцию, которая удаляет все пробелы из строки. Функция возвращает новую строку.

// let userStr = '   hello  ';

// const getNewStr = (str) => {
//   let newString = str.trim()
//   return newString
// }

// console.log(getNewStr(userStr));

// ================================================================================== //

// 29. Задача
// Написать функцию, на вход которой подаётся 2 строки: имя и фамилия. Функция возвращает одну строку - инициалы через точки.

// Alexander Volkov --> A.V.

// let userName = 'Alexander';
// let userLastName = 'Volkov';

// const getInitials = (name, surname) => {
//   return name.slice(0, 1).padEnd(2, '.').concat(surname.slice(0, 1)).padEnd(4, '.')

// }

// console.log(getInitials(userName, userLastName));

// console.log(userName.padEnd(10, '.'));
// console.log(userName.padStart(10, '.'));

// ================================================================================== //

// TODO 30. Задача
// Написать функцию, на вход которой подаётся строка с текстом. Функция переворачивает все символы в слове наоборот, оставляя порядок слов тем же самым.

// Example:
// "The greatest victory is that which requires no battle" -->
// "ehT testaerg yrotciv si taht hcihw seriuqer on elttab"


// let userStr = 'The greatest victory is that which requires no battle';

// const getReverseStr = (str) => {
//   let newStr = str.split('')
//   // for (let i = 0; i < newStr.length; i++) {
//   //   newStr[i]
//   // }


//   return newStr.join('')
// }

// console.log(getReverseStr(userStr));


// let userStr = 'The greatest';

// for (let i = 0; i < userStr.length; i++) {
//   console.log(userStr[i].split(' ').reverse());
// }


// console.log(userStr.split('').reverse().join(''));


// ================================================================================== //

// 31. Задача
// Написать функцию, которая преобразует массив строк в массив чисел, где каждое число - количество символов в строке. Функция возвращает новый массив.

// Example: ['a', 'as', 'red', 'test'] --> [1, 2, 3, 4]

// const userArray = ['a', 'as', 'red', 'text'];

// const getQuntitySymbolForString = (arr) => {
//   const arrLength = []
//   for (let i = 0; i < arr.length; i++) {
//     arrLength.push(arr[i].length)
//   }
//   return arrLength
// }
// console.log(getQuntitySymbolForString(userArray));


// let userArray = ['textd'];
// console.log(userArray.join().length);

// ================================================================================== //

// TODO 32. Задача
// Написать функцию, на вход которой подаётся массив с словами. Функция мутирует массив, переворачия все слова в массиве наоборот.

// const userArray = ['one', 'two', 'three', 'four']

// const newUserArray = [];


// const getMutatesArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     newUserArray.push(arr[i])
//   }
//   return newUserArray.reverse()
// }

// console.log(getMutatesArray(userArray));

// ================================================================================== //

// 33. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает объект, в котором есть 3 свойства:

// Количество заглавных букв;
// Количество строчных букв;
// Количество чисел;




// ================================================================================== //

// 34. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает строку, удаляя оттуда все цифры

// Examples:
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// ================================================================================== //

// 35. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает строку, удаляя оттуда все сивмолы пробела

// '8 j 8   mBliB8g  imjB8B8  jl  B'               --> '8j8mBliB8gimjB8B8jlB'
// '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'   --> '88Bifk8hB8BB8BBBB888chl8BhBfd'
// '8aaaaa dddd r     '                            --> '8aaaaaddddr'
// ================================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 36. Задача ★
// Написать функцию generateLink, на вход которой подаётся 3 параметра: текст, адрес и класс для тега a. Функция возвращает строку вида:
// <a href="ссылка" class="класс">текст</a>.

// Если адрес не передан. то вставить #;
// Если класс не передан. то атрибут class прописывать не нужно;
// ================================================================================== //

// ★ 37. Задача (Продолжение 18 задачи) ★
// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Папка, в которой лежит файл;
// Расширение файла;
// ================================================================================== //

// ★ 38. Задача ★
// Дан объект user, выполнить удаление свойств с помощью цикла, которые содержут слово delete в ключе.

// const user = {
//     name: "Lucas",
//     age: 29,
//     "delete me": 'text',
//     delete: 105,
//     'deleteProp': false
// };
// ================================================================================== //

// ★ 39. Задача ★
// Написать функцию stringClean, которая удаляет из строки все цифры.

// '8j8mBliB8gimjB8B8jlB' --> 'jmBliBgimjBBjlB'
// '97Bifk8hB65BB3BBBB8451chl0BhBfd' --> 'BifkhBBBBBBBchlBhBfd'
// '8aaaaa dd5dd 7r0' --> 'aaaaa dd5dd r'
// ================================================================================== //

// ★ 40. Задача ★
// Написать функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке. Большая буква и маленькая должны считаться одинаковой буквой. Если строка пустая, то вернуть пустой объект.

// Пример:
// console.log(lettersCount('aAAbbccde'));

// output:
// {
//     a: 3,
//     b: 2,
//     c: 2,
//     d: 1,
//     e: 1,
// }
// ================================================================================== //

// ★ 41. Задача ★
// Написать функцию, на вход которой подаётся строка с простым матемтическим выражением: 11 + 3, или 7*9. Функция возвращает результат сложения/умножения/деления и т.п. Примечание: функцию eval() не использовать!
// ================================================================================== //

// ★ 42. Задача ★
// Даны переменные типа string. Написать функцию, которая преобразует эти переменные к типу number, убрав лишние знаки.

// const a = "1_234_567_890"; // 1234567890
// const b = "4_5435_6548_9430"; // 4543565489430
// const c = "1_"; // 1
// const d = "_2"; // 2
// ================================================================================== //

// ★ 43. Задача ★
// Написать функцию, на вход которой в функцию подаётся строка дата в формате: "ДД.ММ.ГГГГ" Функция возвращает true, если такая дата существует, иначе false.

// Необходимо учесть високосные года;
// Функция работает только с положительными годами (наша эра);
// Выполнить программу без использования Date();
// ================================================================================== //

// ★ 44. Задача ★
// Написать программу-кодировщик: s = 'aabbbсaaaa' преобразуется в 'a2b3с1a4', то есть группы одинаковых символов исходной строки заменяются на этот символ и количество его повторений в этой позиции строки. Кодировщик должен учитывать регистр:

// "aBc" -> "a1B1c1"