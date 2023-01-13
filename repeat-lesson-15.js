// Задачи по теме 15. Array methods.Part 2(callback - HOF)##
// 1. Задача
// Написать функцию, которая находит индекс первого числа в массиве, кратного 3.


// const userArr = [1, 7, 3, 4, 5, 9];

// const findFirstIndexInArray = userArr.findIndex((value) => {
//   return value % 3 === 0;
// })
// console.log(findFirstIndexInArray);


// *Рефакторинг
// const findFirstIndexInArray = userArr.findIndex((value) => value % 3 === 0)
// console.log(findFirstIndexInArray);



// TODO: Вопрос?
// const array = [12, 22, 32, 42, 52, 62];
// // debugger
// const log = (v, i, arr) => {
//   // arr.unshift(555) //* Добавляет в начало шесть элементов. Почему так?
//   arr.shift() //* Удаляет первые три элемента. Почему так?
//   arr.push(777) //* Добавляет в конец шесть элементов. Почему так?
//   arr.pop() //* Удаляет последние три элемента. Почему так?
// }

// array.forEach(log)
// console.log(array);


// const testArr = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < testArr.length; i++) {
//   console.log(i);
//   arr.shift()
// }

// [1, 2, 3, 4, 5, 6]
// [2, 3, 4, 5, 6]


// ================================================================================================ //
// 2. Задача
// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.


// const array = ['one', 'three', 'four', 'Moscow'];

// const findFirstNameLengthMoreFive = array.findIndex((value) => {
//   return value.length > 5
// })

// console.log(findFirstNameLengthMoreFive);

// *Рефакторинг
// const array = ['one', 'three', 'four', 'Moscow'];

// const findFirstNameLengthWhichFive = array.findIndex((value) => value.length > 5)

// console.log(findFirstNameLengthWhichFive);


// ================================================================================================ //

// 3. Задача
// Написать функцию, которая находит индекс первого булевого true из массива любых типов данных.


// const array = [10, '20', null, true, undefined, false, true];

// const finfIndexFirstBooleanType = array.findIndex((value) => {
//   return value === true
// })

// console.log(finfIndexFirstBooleanType);


// *Рефакторинг
// const array = [10, '20', null, true, undefined, false, true];

// const finfIndexFirstBooleanType = array.findIndex((value) => value === true)

// console.log(finfIndexFirstBooleanType);


// ================================================================================================ //

// 4. Задача
// Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число.


// const array = [2, 5, -7, 4, 9, -10];

// const getNegativeNumber = array.find((value) => {
//   return value < 0
// })

// console.log(getNegativeNumber);



// *Рефакторинг
// const array = [2, 5, -7, 4, 9, -10];

// const getNegativeNumber = array.find((value) => value < 0)

// console.log(getNegativeNumber);


// ================================================================================================ //

// 5. Задача
// Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки менее 4.


// const array = ['one', 'three', 'four', 'Moscow'];

// const getFirstNameLessFour = array.find((value) => {
//   return value.length < 4
// })

// console.log(getFirstNameLessFour);


// *Рефакторинг
// const array = ['one', 'three', 'four', 'Moscow'];

// const getFirstNameLessFour = array.find((value) => value.length < 4)

// console.log(getFirstNameLessFour);


// ================================================================================================ //

// 6. Задача
// Написать функцию, которая мутирует массив, заменяя все чётные числа на 777.


// const array = [10, 15, 20, 25, 30, 35];

// array.forEach((v, i, arr) => {
//   if (v % 2 === 0) {
//     arr[i] = 777;
//   }
// })
// console.log(array);


// ================================================================================================ //

// 7. Задача
// Написать функцию, которая мутирует массив, заменяя все строки на число 0.


// const array = [10, 'string', 20, 'letter', 30, 'daily', '10'];

// array.forEach((v, i, arr) => {
// if (typeof v === 'string') {
//   arr[i] = 0;
// }
// })

// console.log(array);


// ================================================================================================ //

// 8. Задача
// Написать функцию, которая выводит в консоль все чётные индексы, начиная с 2.

//             0  1  2  3  4  5  6  7  8  9
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.forEach((_, i) => {
//   if (i % 2 === 0 && i !== 0) {
//     console.log(i);
//   }
// })



// ================================================================================================ //

// 9. Задача
// Написать функцию, которая возвращает из массива чисел массив со всеми чётными числами.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const allEvenNumbers = array.filter((value) => {
//   return value % 2 === 0
// })

// console.log(array);
// console.log(allEvenNumbers);



// *Рефакторинг
// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const allEvenNumbers = array.filter((num) => num % 2 === 0)

// console.log(array);
// console.log(allEvenNumbers);


// ================================================================================================ //

// 10. Задача
// Написать функцию, которая возвращает из массива строк все строки, которые написаны строго в нижнем регистре(Если хотя бы одна буква большая, то такое слово не подходит).


// const array = ['Array', 'boolean', 'String', 'number', 'Undefined', 'true']

// const arrayToLowerCase = array.filter((v) => {
//   return v === v.toLowerCase();
// })

// console.log(array);
// console.log(arrayToLowerCase);


// *Рефакторинг
// const array = ['Array', 'boolean', 'String', 'number', 'Undefined', 'true']

// const arrayToLowerCase = array.filter((v) => v === v.toLowerCase())

// console.log(array);
// console.log(arrayToLowerCase);


// ================================================================================================ //

// 11. Задача
// Дан массив пользователей.
// а) Написать функцию, которая возвращает из массива всех пользователей, чьё имя длинее 4 символов;
// б) Написать функцию, которая возвращает из массива всех пользователей, чей возраст выше 20;

// const userList = [
//   { age: 20, name: 'Alex' },
//   { age: 10, name: 'Michael' },
//   { age: 110, name: 'Pavel' },
//   { age: 8, name: 'Oksana' },
//   { age: 15, name: 'Dima' },
//   { age: 45, name: 'Lexus' },
//   { age: 95, name: 'Deda' },
// ]

// a)
// const nameLongerFourSymbols = userList.filter((v, i, arr) => {
//   // return v.name.length > 4 //
//   return arr[i].name.length > 4
// })

// console.log(nameLongerFourSymbols);


// *Рефакторинг
// const bigNameList = userList.filter((user) => user.name.length > 4
// )

// console.log(nameLongerFourSymbols);


// ------------------------------------------------------------- //
// *Валиден ли вообще, такой синтаксис?
// const getNameListLongerFour = (arr) => {
//   return arr.filter((v) => {
//     return v.name.length > 4
//   })
// }

// console.log(getNameLongerFourSymbols(userList));
// ------------------------------------------------------------- //


// TODO:
// б)
// const ageHigher20 = userList.filter((v) => {
//   return v.age > 20
// })

// console.log(ageHigher20);


// *Рефакторинг
// const ageHigher20 = userList.filter((v) => v.age > 20)

// console.log(ageHigher20);


// ================================================================================================ //

// 12. Задача
// Написать функцию, которая выводит переданный массив в консоль в красивой форме:
// элемент №{ } значение: { }

// const array = [5, 'string', true, null];

// const beautifulArray = array.forEach((v, i) => {
//   console.log(`элемент № ${i} значение: ${v} `);
// })


// ================================================================================================ //

// 13. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает другой массив с индексами всех чётных чисел.

//             0  1  2  3  4  5  6  7  8   9  10
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

// const getArrayAllEvenIndex = (arr) => {
//   const newArray = [];
//   arr.forEach((v, i) => {
//     if (v % 2 === 0) {
//       newArray.push(i)
//     }
//   });
//   return newArray;
// }


// console.log(getArrayAllEvenIndex(array));


// *Рефакторинг
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

// const getArrayAllEvenIndex = (arr) => {
//   const newArray = [];
//   arr.forEach((v, i) => v % 2 === 0 && newArray.push(i))
//   return newArray;
// }

// console.log(getArrayAllEvenIndex(array));


// ================================================================================================ //

// 14. Задача
// Написать функцию, на вход которой подаётся массив, которая добавляет ко всем элементам массива префикс "ext-", не мутируя исходный, а возвращает новый массив.


// const array = [1, 2, 3, 4, 5];




// const addsAllElementPrefix = (arr) => {
//   // const newArray = [];
//   // arr.forEach((v) => {
//   //   newArray.push('ext-' + v)
//   // })
//   // return newArray
//   return arr.map((value) => 'ext-' + value)
// }
// console.log(addsAllElementPrefix(array));




// ================================================================================================ //

// 15. Задача
// Написать функцию, на вход которой подаётся массив, функция возвращает новый массив из чётных чисел, которые были во входном массиве.


// const array = [2, 5, 9, 10, 14, 16, 25];
// ?1.
// const getNewArrayAllEvenNumbers = (arr) => {
//   return arr.filter((v) => {
//     return v % 2 === 0
//   })
// }

// console.log(getNewArrayAllEvenNumbers(array));



// console.log(evenNumbers);
// console.log(array);


// ?3.
// const getNewArrayAllEvenNumbers = (arr) => {
//   const evenNumbers = arr.filter((v) => v % 2 === 0
//   )
//   return evenNumbers
// }


// * 4.
// const getNewArrayAllEvenNumbers = (arr) => {
//   return arr.filter((v) => v % 2 === 0)
// }

// console.log(getNewArrayAllEvenNumbers(array));

// *Какой вариант наиболее подходящий?


// ================================================================================================ //

// 16. Задача
// Написать функцию, которая находит первое положительное число в переданном массиве.


// const array = [-1, -3, 5, -7, 8];

// *1
// const findFirstPositiveNumber = array.find((v) => {
//   return v > 0
// })
// console.log(findFirstPositiveNumber);


// *2
// const getFirstPositiveNumber = (arr) => {
//   return arr.find((v) => {
//     return v > 0
//   })
// }

// console.log(getFirstPositiveNumber(array));


// *3
// const getFirstPositiveNumber = (arr) => {
//   const findFirstPositiveNumber = arr.find((v) => {
//     return v > 0
//   })
//   return findFirstPositiveNumber
// }
// console.log(getFirstPositiveNumber(array));


// ================================================================================================ //

// 17. Задача
// Написать функцию, на вход которой подаётся массив чисел, которая возвращает массив, в котором все числа уменьшаются в 2 раза.


// const array = [10, 20, 30, 40, 50];
// *1
// const decreaseAllNumbersByHalf = array.map((v) => {
//   return v / 2
// })

// console.log(decreaseAllNumbersByHalf);


// *2
// const getAllNumbersDecreaseByHalf = (arr) => {
//   return arr.map((v) => {
//     return v / 2
//   })
// }

// console.log(getAllNumbersDecreaseByHalf(array));


// *3
// const getAllNumbersDecreaseByHalf = (arr) => {
//   const decreaseAllNumbersByHalf = arr.map((v) => {
//     return v / 2
//   })
//   return decreaseAllNumbersByHalf
// }

// console.log(getAllNumbersDecreaseByHalf(array));


// ================================================================================================ //

// 18. Задача
// Написать функцию, на вход которой подаётся массив строк, функция возвращает массив чисел - длины строк каждого слова из исходного массива.Например:

// ['leg', 'pony', 'dog'] -> [3, 4, 3]


// const array = ['leg', 'pony', 'dog'];


// const lengthEveryWordsInTheArray = (arr) => {
//   return arr.map((v) => {
//     return v.length
//   })
// }

// console.log(lengthEveryWordsInTheArray(array));


// ================================================================================================ //

// 19. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция увеличивает в 10 раз все числа в массиве, но не мутирует его, а возвращает новый.


// const array = [5, 10, 15, 20, 25];

// const increasesBy10Times = array.map((v) => {
//   return v * 10
// })
// console.log(increasesBy10Times);
// console.log(array);


// const increasesBy10TimesAllNumbersInTheArray = (arr) => {
//   return arr.map((v) => {
//     return v * 10
//   })
// }

// console.log(increasesBy10TimesAllNumbersInTheArray(array));

// *Рефакторинг
// const increasesBy10TimesAllNumbersInTheArray = (arr) => {
//   return arr.map((v) => v * 10
//   )
// }

// console.log(increasesBy10TimesAllNumbersInTheArray(array));

// ================================================================================================ //

// 20. Задача
// Написать функцию, которая считает количество нечётных чисел в массиве.
// TODO: FIXME:


// const array = [2, 5, 8, 9, 1, 10, 8, 7];
// *1
// const countNegativeNumbers = (arr) => {
//   let oddNumbers = 0;
//   arr.forEach((v) => {
//     if (v % 2 !== 0) {
//       oddNumbers++
//     }
//   })
//   return oddNumbers
// }
// console.log(countNegativeNumbers(array));

// *2
// const countNegativeNumbers = (arr) => {
//   let oddNumbers = 0;
//   arr.forEach((v) => v % 2 !== 0 && oddNumbers++
//   )
//   return oddNumbers
// }
// console.log(countNegativeNumbers(array));


// *3
// const array = [2, 5, 8, 9, 1, 10, 8, 7];

// let oddNumbers = 0;
// const countNegativeNumbers = array.forEach((v) => {
//   if (v % 2 !== 0) {
//     oddNumbers++
//   }
// })
// console.log(oddNumbers);


// ================================================================================================ //

// 21. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает истину, если все числа в массиве чётные.


// const array = [2, 6, 8, 10, 12, 14];
// const array = [3, 6, 7, 10, 12, 14];

// *1
// const allNumbersEven = array.every((v) => {
//   return v % 2 === 0
// })

// console.log(allNumbersEven);

// *2
// const getTrue = (arr) => {
//   return arr.every((v) => v % 2 === 0)
// }

// console.log(getTrue(array));


// ================================================================================================ //

// 22. Задача
// Написать функцию, которая считает сумму всех отрицательных чисел.
// TODO: FIXME: reduce


// const array = [2, -5, 8, -7, 1, -4, -4];

// *1
// const getSumNegativeNumbers = (arr) => {
//   let sumNegativeNmubers = 0;
//   arr.forEach((v) => {
//     if (v < 0) {
//       sumNegativeNmubers += v
//     }
//   })
//   return sumNegativeNmubers
// }

// console.log(getSumNegativeNumbers(array));





// ================================================================================================ //

// TODO: 23. Задача
// Написать функцию, которая возвращает наибольшее и наименьшее число из переданного массива. (функция возвращает объект с двумя свойствами)

// 1. forEach -> 5 раз (1000)
// 2. sort ((5-1)x5) -> 20 итераций (999х1000) -> 999000
// 3. reduce -> 5 раз

// Найти сумму чисел в массиве
// const nums = [1, 654, 756, 876, 733]

// const sum = nums.reduce((prV, v) => prV + v, 0)
// console.log(sum);

// Найти наибольшее число
// const startValue = nums[0]
// const maxValue = nums.reduce((prV, v) => {
//   console.log(prV, v);
//   return v > prV ? v : prV
// }, startValue)
// console.log('____');
// console.log(maxValue);

// TODO:
// 1. Найти наименьшее число
// 2. Потом вернуться к задачи 
// 3. Подсказка: startValue -> object






// EF
// const userArray = [1, 2, 3, 4, 5];

// const objectTwoProp = (arr) => {
//   let maxNumber = arr[0];
//   let minNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]
//     } 
//     if (arr[i] < minNumber) {
//       minNumber = arr[i]
//     }
//   }
//   return {
//     maxNumber,
//     minNumber
//   }
// }

// console.log(objectTwoProp(userArray));


// ================================================================================================ //

// 24. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает true, если в массиве есть число, которое делится на 17.


// const userArray = [5, 3, 8, 17, 9, 4];

// const checkNumberDividedBy17 = (arr) => {
//   return arr.some((num) => num % 17 === 0
//   )
// }

// console.log(checkNumberDividedBy17(userArray));


// ================================================================================================ //

// 25. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает массив из отрицательных чисел.


// const userArray = [1, -2, -3, 4, 5];

// const getArrayNegativeNumbers = (array) => array.filter((num) => num < 0)


// console.log(getArrayNegativeNumbers(userArray));


// ================================================================================================ //

// FIXME:26. Задача (--------SORT----------)
// Написать функцию, которая принимает на вход массив чисел, функция мутирует исходный массив - сортируя его в порядке возрастания.


// const userArray = [55, 159, 2, 48, 79, 236, 88, 100];

// const sortNumber = (array) => {
//   return array.sort((a, b) => a - b)
// }

// console.log(sortNumber(userArray));


// * Рефакторинг
// const userArray = [55, 159, 2, 48, 79, 236, 88, 100];

// const sortNumber = (array) => array.sort((a, b) => a - b)

// console.log(sortNumber(userArray));



// * В sort помещаем функцию.
// const userArray = [55, 159, 2, 48, 79, 236, 88, 100];

// const sortResult = function (a, b) {
//   return a - b
// }

// const sortNumber = (array) => {
//   return array.sort(sortResult)
// }

// console.log(sortNumber(userArray));


// ================================================================================================ //

// 27. Задача
// Написать функцию, которая мутирует входный массив, заменяя всё чётные числа на слово 'even'.


// const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// // *For Очень хорошо замутировал исходный массив и так-же заменил все четные числа.
// const changeAllEvenNumbers = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       array[i] = 'even'
//     }
//   }
// }

// changeAllEvenNumbers(userArray)
// console.log(userArray);


// ================================================================================================ //

// 28. Задача
// Написать функцию, которая возвращает индекс первого встречного отрицательного числа.


// const userArr = [5, 8, -9, 10, -55];

// const getIndexFirstNegativeNumber = (array) => {
//   return array.findIndex((num) => {
//     if (num < 0) {
//       return num
//     }
//   })
// }

// console.log(getIndexFirstNegativeNumber(userArr));



// *Рефакторинг
// const getIndexFirstNegativeNumber = (array) => {
//   return array.findIndex((num) => num < 0
//   )
// }

// console.log(getIndexFirstNegativeNumber(userArr));


// ================================================================================================ //

// 29. Задача
// Написать функцию, которая мутирует входной массив строк, заменяя все строки на их длину.
// FIXME: мутирует

// const userList = ['one', 'four', 'seven'];

// const changeALLStringByLength = (array) => {
//   return array.map((string) => {
//     return string.length
//   })
// }

// console.log(changeALLStringByLength(userList));


// *Рефакторинг
// const changeALLStringByLength = (array) => {
//   return array.map((string) => string.length
//   )
// }

// console.log(changeALLStringByLength(userList));


// ================================================================================================ //

// TODO:30. Задача  (--------SORT----------)
// Написать функцию, которая принимает на вход массив чисел, функция возвращает отсортированный массив чисел в порядке убывания. Но не мутирует исходный массив.


// const userArray = [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6];
// const newArray = userArray.concat(); // ! Быстрее спред оператора
// spread operator
// console.log(...userArray); // Взять из массива все значения и вывести в консоль
// const copyArray = [...userArray] // Взять из массива все значения и вставить в новый массив

// function sortNumberArray(a, b) {
//   if (a > b) {
//     return -1
//   } if (a < b) {
//     return 1
//   } if (a == b) {
//     return 0
//   }
// }

// let result = [...userArray].sort((a, b) => a - b);
// console.log(result);
// console.log(userArray);


// ================================================================================================ //

// 31. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает объект с тремя свойствами - массивами:

// массив чётных чисел
// массив отрицательных чисел
// массив чисел, больших 10
// Например:

// Input:
// [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6]

// Output:
// {
//   evenArray: [6, 34, 6, -98, 432, 876, -76, -8, 56, 76, 6] // 11
//   negArray: [-43, -98, -76, -8, -7] // 5
//   moreTenArray: [34, 45, 432, 65, 876, 56, 76, 45] // 8
// }


// const numberArray = [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6];

// const getObjectWithThreeProp = (array) => {
//   const negArray = [];
//   const evenArray = [];
//   const moreTenArray = [];

//   array.forEach((num) => {
//     if (num % 2 === 0) {
//       negArray.push(num)
//     } 
//     if (num < 0) {
//       evenArray.push(num)
//     } else if (num > 10) {
//       moreTenArray.push(num)
//     }
//   });
//   return {
//     evenArray,
//     negArray,
//     moreTenArray
//   }
// }

// console.log(getObjectWithThreeProp(numberArray));


// ================================================================================================ //

// ★ Условие для следующих задач:
// Дан массив объектов, выполнить следующие задачи:

const users = [
  {
    id: 100,
    name: "John",
    age: 19,
    isMarried: false,
    scores: 78
  },
  {
    id: 101,
    name: "Peter",
    age: 13,
    isMarried: false,
    scores: 311
  },
  {
    id: 102,
    name: "John",
    age: 33,
    isMarried: false,
    scores: 0
  },
  {
    id: 103,
    name: "Alex",
    age: 14,
    isMarried: true,
    scores: 121
  },
  {
    id: 104,
    name: "Lila",
    age: 18,
    isMarried: true,
    scores: 999
  },
]

// ================================================================================================ //

// 32. Задача
// Написать функцию, которая получает из массива объектов - массив имён пользователей.


// const getArrayUserName = (userArray) => {
//   return userArray.map((userName) => userName.name
//   )
// }
// console.log(getArrayUserName(users));

// const arrayUserNames = getArrayUserName(users);

// ================================================================================================ //

// 33. Задача
// Написать функцию, которая принимает на вход массив пользователей, функция возвращает массив строк вида:

// <div>
//   <span>
//     Имя: <значение>
//   </span>
//   <span>
//     Возраст: <значение>
//   </span>
//   <span>
//     Семейное положение: <значение>
//   </span>
// </div>

// const getListCard = (userList) => {

// // return `<div>${array[0]}</div>`
//   // object[] -> string[] -> map
//   return userList.map((user) => {
//     return (`<div>
// <span>
//   Имя: ${user.name}
// </span>
// <span>
//   Возраст: ${user.age}
// </span>
// <span>
//   Семейное положение: ${user.isMarried}
// </span>
// </div>`)
//   })
// }
// console.log(getListCard(users));

// ================================================================================================ //

// 34. Задача
// Написать функцию, которая принимает на вход массив и имя, функция находит и возвращает объект по имени первого найденного в массиве.

// const getObjectFirstNameInArray = (userList, name) => {
//   return userList.find((user) => {
//     return user.name === name
//   })
// }

// console.log(getObjectFirstNameInArray(users, 'John'));




// ================================================================================================ //

// 35. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чьё количество очков выше или равно 100.


// const getUsersArray = (array) => {
//   return array.filter((user) => {
//     return user.scores >= 500
//   })
// }

// console.log(getUsersArray(users));


// ================================================================================================ //

// 36. Задача
// Написать функцию, которая принимает на вход массив, имя, возраст и семейное положение, функция возвращает массив, в котором добавлен новый пользователь.

// Количество очков задать равным 0;
// id сделать случайным целым число в диапазоне от 1000 до 2000 не вкл;


// const getListWithNewUser = (userList, name, age, isMarried) => {
//   userList.push(
//     {
//       id: Math.floor(Math.random() * (2000 - 1000) + 1000),
//       name,
//       age,
//       isMarried,
//       scores: 0
//     }
//   )
//   return userList
// }

// getListWithNewUser(users, 'Elena', 25, true);


// ================================================================================================ //

// 37. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив, добавляя каждому пользователю новое свойство: isTest: true.


// TODO: object[] -> object[] -> map


// *1
// const addedEveryUserNewProp = (userList) => {
//   userList.forEach((newProp) => {
//     newProp.isTest = true;
//   })
//   console.log(userList);
// }

// console.log(addedEveryUserNewProp(users));

// *2
// *Рефакторинг
// const addedEveryUserNewProp = (userList) => {
//   userList.forEach((newProp) => newProp.isTest = true)
//   console.log(userList);
// }

// console.log(addedEveryUserNewProp(users));


// *3
// *for
// const addedEveryUserNewProp = (userList) => {
//   for (let i = 0; i < userList.length; i++) {
//     userList[i].isTest = true
//   }
//   console.log(userList);
// }

// console.log(addedEveryUserNewProp(users));


// ================================================================================================ //

// 38. Задача
// Написать функцию, которая принимает на вход массив и id пользователя и новое семейное положение, функция возвращает массив, в котором меняется свойство isMarried на переданное.


//FIXME: callback
// const getArrayChangeProp = (userList, id, isMarried) => {
//   return userList.filter((v) => {
//     if (v.id === id) {
//       return v.isMarried = isMarried
//     }
//   })
// }

// console.log(getArrayChangeProp(users, 100, true));


// *Рефакторинг
// const getArrayChangeProp = (userList, id, isMarried) => {
//   return userList.filter((value) => value.id === id && (value.isMarried = isMarried))
// }

// console.log(getArrayChangeProp(users, 100, true));


// ================================================================================================ //

// 39. Задача
// Написать функцию, которая принимает на вход массив и id пользователя, функция возвращает новый массив, удаляя пользователя с переданным id.


//FIXME: callback
// const getNewArrayWithDelUser = (userList, userId) => {
//   return userList.filter((value) => {
//     if (value.id === userId) {
//       return delete value.id // о_О
//     }
//   })
// }

// console.log(getNewArrayWithDelUser(users, 101));



// *Рефакторинг
// const getNewArrayWithDelUser = (userList, userId) => {
//   return userList.filter((value) => value.id === userId && delete value.id)
// }

// console.log(getNewArrayWithDelUser(users, 101));


// ================================================================================================ //

// 40. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив совершеннолетних пользователей.

// const getArrayAdultUsers = (userList) => {
//   return userList.filter((value) => {
//     return value.age >= 14 // =)
//   })
// }

// console.log(getArrayAdultUsers(users));


// *Рефакторинг
// const getArrayAdultUsers = (userList) => {
//   return userList.filter((value) => value.age >= 14
//   )
// }

// console.log(getArrayAdultUsers(users));


// ================================================================================================ //

// FIXME: 41. Задача  ------- SORT --------
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в порядке увеличения очков.




// ================================================================================================ //

// ???????42. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает пользователя с самым большим количеством очков.

// TODO:

// let maxNumber = 0;
// const getUserWithTheMostPoints = (userList) => {

//   for (let i = 0; i < userList.length; i++) {
//     if (userList[i].scores > maxNumber) {
//       maxNumber = userList[i].scores
//     }
//   }
//   return userList.find((v) => {
//     return v.scores === maxNumber
//   })
// }

// console.log(getUserWithTheMostPoints(users));



// const array = [3, 7, 8, 9, 1, 15, 3, 4, 5]
// console.log(Math.max(...array)); // 15 - spread оператор

// ================================================================================================ //

// FIXME: 43. Задача  ------- SORT --------
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в алфавитном порядке имён.


// ================================================================================================ //

// 44. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей.


// *1
// const sumScoresAllUsers = (userList) => {
//   let sumAllScores = 0;
//   for (let i = 0; i < userList.length; i++) {
//     sumAllScores += userList[i].scores
//   }
//   console.log(sumAllScores);
// }

// sumScoresAllUsers(users);




// *2
// const sumScoresAllUsers = (userList) => {
//   let sumAllScores = 0;
//   return userList.reduce((prReturnValue, value) => {
//     return prReturnValue + value.scores
//   }, 0)
// }

// console.log(sumScoresAllUsers(users));




// *Рефакторинг
// const sumScoresAllUsers = (userList) => {
//   let sumAllScores = 0;
//   return userList.reduce((prReturnValue, value) => prReturnValue + value.scores, 0)
// }

// console.log(sumScoresAllUsers(users));


// ================================================================================================ //

// FIXME:45. Задача ------- SORT --------
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный от самого старшему к самому младшему.




// ================================================================================================ //

// FIXME:46. Задача ------- SORT --------
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный так, что сначала в массиве все женатые / замужние, а все холостяки внизу списка.


// ================================================================================================ //

// 47. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив лучших трёх по количеству очков.

// TODO: сортировка + slice



// ================================================================================================ //

// 48. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чья длина имени больше 4 символов.


// const getArrayLengthNameMoreFourSymb = (userList) => {
//   return userList.filter((user) => {
//     return user.name.length > 4
//   })
// }

// console.log(getArrayLengthNameMoreFourSymb(users));


// *Рефакторинг
// const getArrayLengthNameMoreFourSymb = (userList) => {
//   return userList.filter((user) => user.name.length > 4)
// }

// console.log(getArrayLengthNameMoreFourSymb(users));


// ================================================================================================ //

// TODO:49. Задача
// Написать функцию, которая принимает на вход массив, функция удаляет всех несовершеннолетних пользователей.

// FIXME:
// const delAllMinorsUsers = (userList, i) => {
//   return userList.filter((value) => {
//     if (value.age < 14) {
//       return
//     }
//   })
// }

// console.log(delAllMinorsUsers(users));
// console.log(users);







// Удаляем выбранный элемент из массива.
// const array = [1, 2, 3, 4, 5];
// let idx = array.indexOf(3);
// // console.log(idx);
// const newArr = [];
// for (let i = 0; i < array.length; i++) {
//   if (i !== idx) {
//     newArr.push(array[i])
//   }
// }
// console.log(newArr);





// ================================================================================================ //

// 50. Задача
// Написать функцию, на вход которой подаётся 2 массива пользователей, функция возвращает новый массив, состоящий из всех пользователей двух массивов.


// const getArrayAllUsersTwoArray = (userList1, userList2) => {
//   return userList1.concat(userList2)
// }

// console.log(getArrayAllUsersTwoArray(users, users));

// * Рефакторинг
// const getArrayAllUsersTwoArray = (userList1, userList2) => userList1.concat(userList2)

// console.log(getArrayAllUsersTwoArray(users, users));




// ★ Задачи повышенной сложности ★
// ================================================================================================ //

// ★ 51. Задача ★
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей, которые женаты.
// ================================================================================================ //

// ★ 52. Задача ★
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех совершеннолетних пользователей.
// ================================================================================================ //

// ★ 53. Задача ★
// Написать функцию, которая возвращает первое встречное слово, в котором хотя бы 2 буквы заглавные
// ================================================================================================ //

// ★ 54. Задача ★
// Написать в функцию, на вход которой подаётся массив чисел Функция должна для каждого элемента этого массива вывести сумму двух его соседей и вернуть этот новый массив.Для элемента массива, являющихся крайними, одним из соседей считается элемент, находящийся на противоположном конце этого массива.Например, если на вход подаётся массив: 1 3 5 6 10, то на выход ожидается новый массив: 13 6 9 15 7
// Если на вход пришло одно число, то вывести его же
// ================================================================================================ //

// ★ 55. Задача ★
// Реализовать свои варианты функции hof:

// forEach;
// find;
// findIndex;
// map;
// filter;
// some;
// every;
// reduce;