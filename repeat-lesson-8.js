// Задачи по теме 8. Array
// 1. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль количество элементов в массиве.

// const array = [1, 2, 3, 4, 5, 6];
// console.log(array.length);

// ============================================================================== //

// 2. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль индекс последнего элемента. Код должен работать для массива любой длины.

// const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // т.к начинается счет с 0, мы и применяем length + 1

// console.log(myArray.indexOf(myArray.length + 1));
// console.log(myArray[myArray.length - 1]);

// ============================================================================== //

// 3. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль самый первый и последний элементы. Код должен работать для массива любой длины.

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(array[0]);
// console.log(array[array.length - 1]);

// ============================================================================== //

// 4. Задача
// Создать массив любой длины, состоящий из чисел. Вывести значение предпоследнего элемента. Код должен работать для массива любой длины.

// const array = [1, 2, 3, 4, 5, 6, 7];

// console.log(array[array.length - 2]);

// =========================================================================== //

// 5. Задача
// Создать массив любой длины, состоящий из строк. Удалить последний элемент. А затем добавить 1 элемент в конец массива со значением new. Вывести в консоль получившийся массив.

// const array = ['one', 'two', 'three', 'four', 'five'];
// array.pop();
// array.push('new');
// console.log(array);

// 6. Создать массив любой длины, состоящий из строк. Удалить последний элемент и вывести получившийся массив. Затем вывести значение удалённого элемента.

// const array = ['one', 'two', 'three', 'four', 'five'];

// const newArray = array.pop();
// console.log(array);
// console.log(newArray);

// =========================================================================== //

// 7. Задача
// Создать массив с любым количеством элементов и любым типом данных внутри. Если элементов больше 5, то вывести в консоль "окей" Иначе ничего не выводить.

// const array = [1, 'one', 2, 'two', null, 3, 'three'];
// if (array.length > 5) {
//   console.log('okey');
// } else {
//   console.log();
// }

// =========================================================================== //

// 8. Задача
// Создать массив любой длины, состоящий из чисел. Если последний элемент чётный, то удалить его из массива, а затем вывести в консоль. В противном случае просто вывести первый элемент массива.

// const array = [9, 1, 2, 3, 4, 5, 8];
// if (array[array.length - 1] % 2 === 0) {
//   console.log(array.pop());
// } else {
//   console.log(array[0]);
// }

// =========================================================================== //

// 9. Задача
// Дан массив чисел. Вывести массив поэлементно в консоль.

// const numberList = [13, 54, 32, 75, 43, 65, 89, 53];

// for (let i = 0; i <= numberList.length; i++) {
//   console.log(numberList[i]);
// }

// for (const el of numberList) {
//   console.log(el);
// }

// =========================================================================== //

// 10. Задача
// Создать массив любой длины, состоящий из чисел. Если значение первого элемента больше значения последнего элемента, то добавить в конец массива текст more, Иначе удалить последний элемент.

// const array = [9, 8, 7, 6, 5, 4];
// // const array = [9, 8, 7, 6, 5, 10];
// if (array[0] > array[array.length - 1]) {
//   array.push('more')
// } else {
//   array.pop()
// }
// console.log(array);

// =========================================================================== //

// 11. Задача
// Создать массив любой длины, состоящий из чисел. Добавлять к каждому третьему элементу массива строку: =x3=. Вывести в консоль получившийся массив.
//             0  1  2
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= array.length; i++) {
//   if ((i + 1) % 3 === 0) {
//     array[i] += ' =x3='
//   }
// }
// console.log(array);


// =========================================================================== //

// 12. Задача
// Дан массив чисел. Вывести в консоль элементы массива в столбик в обратном порядке.

// const numberList = [99, 88, 77, 66, 55];

// for (let i = numberList.length; i >= 0; i--) {
//   console.log(numberList[i]);
// }


// for (let i = 0; i <= numberList.length - 1; i++) {
//   // console.log(i);
//   console.log(numberList[i]);
//   // console.log(numberList[numberList.length - 1]);
// }
// console.log(numberList.length);
// console.log(numberList);

// =========================================================================== //

// 13. Задача
// Создать пустой массив. Заполнить его тремя элементами, которые введёт пользователь с клавиатуры. Вывести в консоль получившийся массив.

// const userArray = [];

// for (let i = 1; i <= 3; i++) {
//   let userElem = prompt('Write your element');
//   userArray.push(userElem);
// }
// console.log(userArray);


// =========================================================================== //

// 14. Задача
// Запросить у пользователя число - кол-во элементов будущего массива. И в зависимости от введённого числа пользователь заполняет с клавиатуры все элементы сам. Вывести в консоль получившийся массив.

// let userArray = prompt('Write your number');
// const newUserArray = [];

// for (let i = 1; i <= userArray; i++) {
//   const userEl = prompt(`Write your element ${i - 1}/${userArray}`);
//   newUserArray.push(userEl)
// }
// console.log(newUserArray);

// =========================================================================== //

// 15. Задача
// Дан массив чисел. Вывести в консоль только положительные значения.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// for (let i = 0; i <= numberArray.length; i++) {
//   if (numberArray[i] >= 0) {
//     console.log(numberArray[i]);
//   }
// }


// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// const newArr = [];
// for (let i = 0; i <= numberArray.length; i++) {
//   if (numberArray[i] >= 0) {
//     newArr.push(numberArray[i])
//   }
// }
// console.log(newArr);

// =========================================================================== //

// 16. Задача
// Вывести в консоль самое большое значение из массива.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// let maxNumber = numberArray[0];

// for (let i = 0; i <= numberArray.length; i++) {
//   if (numberArray[i] > maxNumber) {
//     maxNumber = numberArray[i];
//   }
// }
// console.log(maxNumber);

// for (const el of numberArray) {
//   if (el > maxNumber) {
//     maxNumber = el;
//   }
// }
// console.log(maxNumber);


// =========================================================================== //

// 17. Задача
// Вывести в консоль сумму всех чисел массива.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let sum = 0;
// for (const el of numberArray) {
//   sum += el;
// }
// console.log(sum);

// =========================================================================== //

// 18. Задача
// Вывести в консоль индекс самого минимального значения из массива numberArray.

//                    0   1  2    3   4  5  6   7    8  9  10  11
// const numberArray = [-13, 6, 12, -11, 5, 4, -19, 13, -1, 0, 5, -9];

// let minNumber = numberArray[0];
// let minIndex = 0;

// for (let i = 0; i <= numberArray.length; i++) {
//   // debugger
//   if (numberArray[i] < minNumber) {
//     minNumber = numberArray[i];
//     minIndex = i;
//   }
// }
// console.log(minIndex);

// =========================================================================== //

// 19. Задача
// Вывести в консоль сумму всех чётных чисел массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// let sum = 0;

// for (const el of numberArray) {
//   if (el % 2 === 0) {
//     sum += el;
//   }
// }
// console.log(sum);

// =========================================================================== //

// 20. Задача
// Вывести в консоль сумму всех чисел кратных 3 массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// let sum = 0;

// for (const el of numberArray) {
//   if (el % 3 === 0) {
//     sum += el;
//   }
// }
// console.log(sum);

// =========================================================================== //

// 21. Задача
// Перенести значения, кратные 3 из массива numberArray в массив newArr;

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// const newArr = [];


// for (const el of numberArray) {
//   if (el % 3 === 0) {
//     newArr.push(el)
//   }
// }
// console.log(newArr);


// =========================================================================== //

// 22. Задача
// Написать программу, которая посчитает количество строк и чисел в массиве varArray. Результат вывести в консоль с подписью, где число строк, а где чисел.

// const varArray = [15, 12, 'text', true, 6, 7, 21, [], false, 0, 1, '', -1, 'world', 'piece'];

// let countStrings = 0;
// let countNumbers = 0;

// for (const el of varArray) {
//   if (typeof el === 'string') {
//     countStrings++;
//   } if (typeof el === 'number') {
//     countNumbers++
//   }
// }
// console.log(countStrings);
// console.log(countNumbers);

// =========================================================================== //

// 23. Задача
// Написать программу, которая посчитает количество массивов внутри массива testArray.

// const testArray = [11, 17, [18, 10], -5, 7, [], 9, [-1], [4, 5]];

// let countArray = 0;

// for (const el of testArray) {
//   if (typeof el === 'object') {
//     countArray++;
//   }
// }
// console.log(countArray);

// =========================================================================== //

// 24. Задача
// Дан массив чисел. Вывести в консоль среднее арифметическое отрицательных элементов массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, -4, 19, 13, -1, 0, 5, -9];

// let countNegativeNumb = 0;
// let negativeNumbArr = 0;
// let arithmeticMeanNum = 0;

// for (const el of numberArray) {
//   if (el < 0) {
//     countNegativeNumb++;
//     arithmeticMeanNum = (negativeNumbArr += el) / countNegativeNumb;
//   }
// }
// console.log(countNegativeNumb);
// console.log(negativeNumbArr);
// console.log(arithmeticMeanNum);

// =========================================================================== //

// 25. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [3, 7, 4];
// const newArr = arr;
// newArr.push(7);
// console.log(arr); // ? [3,7,4,7]

// =========================================================================== //

// 26. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [2, 1, 5];

// const newArr = arr;
// arr.pop();

// console.log(newArr); // ? [2,1]
// =========================================================================== //

// 27. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [2, 1, 5];
// const newArr = arr;
// const antArr = newArr;

// antArr.unshift(5, 4);

// console.log(arr); // ? [5,4,2,1,5]
// console.log(newArr); // ? [5,4,2,1,5]
// console.log(antArr); // ? [5,4,2,1,5]


// console.log(arr === antArr); // ? true
// console.log(newArr === antArr); // ? true
// console.log(newArr === arr); // ? true
// =========================================================================== //

// 28. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [6, 9, 3];
// const list = arr;

// list[2] = 7;
// arr[4] = 12;

// console.log(arr); // ? [6,9,7,12]
// console.log(list); // ?
// console.log(list.length); // ? 5

// console.log(arr === list); // ? true

// =========================================================================== //

// 29. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [1, 2];
// const copyArr = arr;
// const othArr = arr;

// copyArr.push(1, 2);
// othArr.shift();

// console.log(arr); // ? [2,1,2]
// console.log(copyArr); // ?[2,1,2]
// console.log(othArr); // ?[2,1,2]

// console.log(arr === copyArr); // ? true
// console.log(copyArr === othArr); // ? true
// console.log(othArr === arr); // ? true


// =========================================================================== //

// ***** Коприрование массива *****

// 30. Задача
// Дан массив. Написать программу, которая скопирует массив targetList в другую переменную. При изменении скопированного массива (при добавлении, удалении) исходный массив не должен изменяться.

// const targetList = [4, 5, true, 3, 'text', 1, null];
// const newArray = [];

// for (const el of targetList) {
//   newArray.push(el);
// }

// newArray.unshift(55);
// newArray[3] = false

// console.log(targetList);
// console.log(newArray);
// console.log(newArray === targetList);

// =========================================================================== //

// 31. Задача
// Даны 2 массива, перенести каждый третий элемент из массива basicList в массив everyThreeList. Программа должна работать для массива любой длины.

// const basicList = [-11, 3, 23, -14, 5, 43, 3, 14, -1, 65, 5, -9, 10, 11, 17, 2, 1];
// let everyThreeList = [];

// for (let i = 0; i < basicList.length; i++) {
//   if ((i + 1) % 3 === 0) {
//     everyThreeList.push(basicList[i]);
//   }
// }
// console.log(everyThreeList);

// =========================================================================== //

// 32. Задача
// Дан массив чисел, вывести в консоль произведение всех нечётных положительных чисел.

// const numberArray = [-199, 6, 22, -31, 7, -6, 1, 11, -3, 0, 5, -99];
// let sum = 1;
// for (const el of numberArray) {
//   if (el % 2 !== 0 && el > 0) {
//     sum *= el;
//   }
// }
// console.log(sum);

// =========================================================================== //

// 33. Задача
// Дан массив чисел, вывести в консоль количество отрицательных чисел.

// const numberList = [-199, 30, 10, 15, -1, -12, 43, 38, -7, 3, 5, -4, -99];
// let countNegativeNumbers = 0;

// for (const el of numberList) {
//   if (el < 0) {
//     countNegativeNumbers++
//   }
// }
// console.log(countNegativeNumbers);

// =========================================================================== //

// 34. Задача
// Дан массив чисел, вывести в консоль общее количество массивов и null.

// const list = [[-199, 30, 10, 15], -1, null, '43', null, [-7, 3, 5], 'null', -99, [], 4, null];

// let countTypesObject = 0;

// for (const el of list) {
// if (Array.isArray(el) || typeof el === 'object') {
//   countTypesObject++
// }

//   if (Array.isArray(el) || el === null) {
//     countTypesObject++
//   }
// }
// console.log(countTypesObject);

// console.log(typeof list[2]);
// console.log(typeof list[0]);

// =========================================================================== //

// 35. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr1 = [3, 4, 5];
// const arr2 = [3, 4, 5];
// console.log(arr1 === arr2); // ? false

// const copyArr1 = arr1;
// console.log(copyArr1 === arr1); // ? true

// =========================================================================== //

// 36. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log([] === []); // false
// console.log([1] === [1]); // false
// console.log([11] === [13]); // false
// console.log([[1]] === [[1]]); // false

// const arr = [1, [2]];
// const arrTest = arr;
// console.log(arrTest === arr); // true
// console.log(arrTest[0] === arr[0]); // true
// console.log(arrTest[1] === arr[1]); // true

// =========================================================================== //

// TODO 37. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(String([])); // ''
// console.log(String([1])); // '1'
// console.log(String([0])); // '0'
// console.log(String([1, 1])); // '1,1'
// console.log(String([[1, 2]])); // '1,2'
// console.log(String([[1]])); // '1'

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([0])); // 0
// console.log(Number([1, 1])); // NaN
// console.log(Number([[1, 2]])); // NaN
// console.log(Number([[1]])); // 1


// console.log(Number([1, 1])); // NaN
// console.log(typeof Number([1])); // 'number'
// console.log(typeof Number([1, 5])); // 'number'
// console.log(typeof [1, 5]); // 'object'
// console.log(typeof Number([])); // 0


// console.log(Boolean([])); // true
// console.log(Boolean([0])); // true
// console.log(Boolean([0, 0])); // true
// console.log(Boolean([1, 1])); // true
// console.log(Boolean([[1, 2]])); // true
// console.log(Boolean([[1]]));  // true


//Следующие значения всегда ложны:
// ложь
// 0(ноль)
// ""(пустая строка)
// NULL
// undefined
// NaN(специальное значение номера означает Not - a - Number!)
// Все остальные значения являются правдивыми, включая "0"(ноль в кавычках), "ложь"(ложь в кавычках), пустые функции, пустые массивы и пустые объекты.

// =========================================================================== //

// Написать функцию, на вход которой подаётся массив и символ + или -. Функция возвращает наибольшее число из массива, если вторым параметром был передан + иначе функция вернёт наименьшее значение.

// const userArray = [1, 2, 3, 4, 5];
// let maxNumb = userArray[0];
// let minNumb = userArray[0];

// function bigNumbInArray(array, symb) {
//   if (symb === '+') {
//     for (const el of array) {
//       if (el > maxNumb) {
//         maxNumb = el
//       }
//     }
//     return maxNumb
//   } else {
//     for (const el of array) {
//       if (el < maxNumb) {
//         minNumb = el
//       }
//     }
//     return minNumb
//   }
// }

// console.log(bigNumbInArray(userArray, '+'));


// TODO const userArray = [1, 2, 3, 4, 5];
// let maxNumb = userArray[0];
// let minNumb = userArray[0];

// function bigNumbInArray(array, symb) {
//   for (const el of array) {
//     if (el > maxNumb) {
//       maxNumb = el
//     } else if (el < maxNumb) {
//       minNumb = el
//     }
//   }
//   return (symb === '+') ? maxNumb : minNumb
// }

// console.log(bigNumbInArray(userArray, '+'));

// =========================================================================== //

// 39. Задача
// Написать функцию, на вход которой подаётся массив с любыми типами данных. Функция возвращает объект, в котором сумма всех чисел и выполнена конкатенация строк. Остальные типы данных проигнорировать.

// const myArray = [10, 20, 'ten', 'twenty', null, [1, 2], 15, 'mouse']
// let sumOllNumbers = 0;
// let ollString = '';

// function getObject(arr) {
//   for (const el of arr) {
//     if (typeof el === 'number') {
//       sumOllNumbers += el;
//     } if (typeof el === 'string') {
//       ollString += el
//     }
//   }
//   return {
//     'Сумма всех чисел в массиве': sumOllNumbers,
//     'Все строки в массиве': ollString
//   }
// }

// console.log(getObject(myArray));


// =========================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 40. Задача ★
// Дан массив товаров и цен в корзине, посчитать сумму всей покупки и вывести результат в консоль.

// const cartList = [
//     ['carot', 200],
//     ['potato', 300],
//     ['milk', 80],
//     ['mushrooms', 600],
//     ['beet', 200],
//     ['сabbage', 300]
// ];


// =========================================================================== //

// TODO ★ 41. Задача ★
// Создать пустой массив. Пользователя запрашивают вводить числа до тех пор, пока он не введёт слово Хватит. Как только пользователь ввёл слово, вывести массив чисел.

// Массив должен состоять из типа number, не string;
// Слово Хватит не зависит от регистра, можно написать, как с маленькой, так и с большой буквы;


// const newArray = [];
// let userWorld = 'хватит';

// while (true) {
//   let userNumb = prompt('Write your numbers');
// let userWorld = 'Хватит';
// хватит === Хватит // хватит === хватит
// Хватит === Хватит // Хватит === хватит
// хВАТИТ === Хватит // хВАТИТ === хватит
// хВатит === Хватит // хВатит === хватит
// ...
//userNumb === userWorld || userNumb === userWorld.toLowerCase()

// хватит === хВаТиТ
// хватит === Хватит
// хватит === Хватит
// хватит === хватит
// хватит === хватиТ
//   if (userWorld !== userNumb.toLowerCase()) {
//     newArray.push(Number(userNumb));
//   } else {
//     break;
//   }
// }

// console.log(newArray);



// const USER_WORLD = 'хватит';
// const PROMPT_MESSAGE = 'Write your numbers';

// const numList = [];
// let isRun = true;

// while (isRun) {
//   const userMessage = prompt(PROMPT_MESSAGE);
//   if (userMessage.toLowerCase() !== USER_WORLD) {
//     numList.push(+userMessage);
//   } else {
//     break;
//   }
// }


// Number() <-> +

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }


// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }


// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// =========================================================================== //

// ★ 42. Задача ★
// Выполнить сортировку массива array. Четные элементы отправьте в массив arrayEven, а нечетные - в arrayOdd. А если встречается значение 0, то проигнорировать его (Переносить в arrayEven не нужно).

// array = [0, 9, 2, 7, -2, 4, 34, -7, 0, -12, 28, 14, 0, 0, 15, 22, 0];
// arrayEven = [];
// arrayOdd = [];


// for (const el of array) {
//   if (el % 2 === 0 && el > 0) {
//     arrayEven.push(el);
//   } else if (el % 2 !== 0) {
//     arrayOdd.push(el);
//   }
// }

// console.log(arrayEven);
// console.log(arrayOdd);

// =========================================================================== //

// TODO ★ 43. Задача ★
// Дан массив чисел, написать программу, которая отсортирует исходный массив в порядке возрастания. Без использования метода sort();

// const array = [15, 32, 17, 77, 25, 0];


// 15 17 32 25 0 77 (1 большая итерация)
// 15 17 25 0 32 77
// 15 17 0 25 32 77
// 15 0 17 25 32 77
// 0 15 17 25 32 77

// (1 большая итерация)
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > array[i + 1]) {
//     const temp = array[i]
//     array[i] = array[i + 1]
//     array[i + 1] = temp
//   }
// }


// for (let k = 0; k < array.length - 1; k++) {
//   // debugger
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       const temp = array[i]
//       array[i] = array[i + 1]
//       array[i + 1] = temp
//       // newArray.push(array[i + 1], array[i])
//     }
//   }
// }



// console.log(array);


// console.log(newArray);

// console.log(minElementInArray);
// console.log(maxElementInArray);


const array = [15, 32, 17];

for (let i = 0; i <= array.length; i++) {
  for (let k = array.length; k <= 5; k++) {
    console.log(array[i]);
  }

}


// =========================================================================== //

// TODO ★ 44. Задача ★
// Дан массив. Вывести в консоль все элементы массива в матричном виде:

// const array = [
//     [11, 12, 13, 14, 15],
//     [21, 22, 23, 24, 25],
//     [31, 32, 33, 34, 35],
//     [41, 42, 43, 44, 45]
// ];

// output:
// 11 12 13 14 15
// 21 22 23 24 25
// 31 32 33 34 35
// 41 42 43 44 45





// =========================================================================== //

// TODO ★ 45. Задача ★
// Дан массив. Заменить в массиве значения: 11, 22, 33, 44, 55 на строку 00.

// const array = [
//   [11, 12, 13, 14, 15],
//     [21, 22, 23, 24, 25],
//     [31, 32, 33, 34, 35],
//     [41, 42, 43, 44, 45],
//     [51, 52, 53, 54, 55]
// ];


// ==================================================================================== //
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

// const newArr = [...test]

// console.log(newArr === test);
// console.log(newArr);
// console.log(test);

// ================================================================================== //