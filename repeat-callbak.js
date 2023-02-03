// Задачи по теме 15. Array methods. Part 2 (callback - HOF)##
// 1. Задача
// Написать функцию, которая находит индекс первого числа в массиве, кратного 3.

// const userArray = [1, 2, 3, 49, 55, 6, 7, 8, 9, 10]

// const findFirstNumberInArray = (array) => {
//   return array.findIndex((v) => v % 3 === 0)
// }

// console.log(findFirstNumberInArray(userArray));


// ********************************************************************************* //
// 2. Задача
// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.

// const userListName = ['Eva', 'Mike', 'George', 'Danila'];

// const getIndexLengthMoreFive = (array) => {
//   return array.findIndex((userName) => userName.length > 5)
// }

// console.log(getIndexLengthMoreFive(userListName));


// ********************************************************************************* //

// 3. Задача
// Написать функцию, которая находит индекс первого булевого true из массива любых типов данных.

// const userList = [true, 10, '10', true, 20, false, undefined];

// const getIndexFirstBoolType = (array) => {
//   return array.findIndex((dataType) => dataType === true)
// }

// console.log(getIndexFirstBoolType(userList));

// ********************************************************************************* //

// 4. Задача
// Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число.

// const userListNumbers = [2, -9, 8, 4, -15, 22];

// const getFirstNegativeNumber = (array) => {
//   return array.find((numb) => numb < 0)
// }

// console.log(getFirstNegativeNumber(userListNumbers));


// ********************************************************************************* //

// 5. Задача
// Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки менее 4.

// const userListName = ['Eva', 'Mike', 'George', 'Danila'];

// const getFirstNameLessFour = (array) => {
//   return array.find((name) => name.length < 4)
// }

// console.log(getFirstNameLessFour(userListName));


// ********************************************************************************* //

// 6. Задача
// Написать функцию, которая мутирует массив, заменяя все чётные числа на 777.

// const userNumberList = [4, 5, 9, 10, 25, 47, 30, 71, 80];

// const changeAllEvenNumbers = (userArray) => {
//   userArray.forEach((numb, i, arr) => {
//     if (numb % 2 === 0) {
//       arr[i] = 777
//     }
//   })
// }

// changeAllEvenNumbers(userNumberList);
// console.log(userNumberList);

// ********************************************************************************* //

// 7. Задача
// Написать функцию, которая мутирует массив, заменяя все строки на число 0.

// const userArray = ['one', 55, '22', 100, 'good'];

// const changeAllStrings = (array) => {
//   array.forEach((str, i, arr) => {
//     if (typeof str === 'string') {
//       arr[i] = 0
//     }
//   })
// }
// changeAllStrings(userArray);
// console.log(userArray);


// ********************************************************************************* //

// 8. Задача
// Написать функцию, которая выводит в консоль все чётные индексы, начиная с 2.

// const userNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getAllEvenNumbers = (array) => {
//   array.forEach((i) => {
//     if (i % 2 === 0 && i !== 0) {
//       console.log(i);
//     }
//   })
// }
// getAllEvenNumbers(userNumbersArray);


// ********************************************************************************* //

// 9. Задача
// Написать функцию, которая возвращает из массива чисел массив со всеми чётными числами.


// const userArray = [10, 55, 63, 22, 114, 12, 89, 100];

// const getArrayWithAllEvenNumbers = (array) => {
//   return array.filter((el) => el % 2 === 0)
// }

// console.log(getArrayWithAllEvenNumbers(userArray));


// ********************************************************************************* //

// 10. Задача
// Написать функцию, которая возвращает из массива строк все строки, которые написаны строго в нижнем регистре (Если хотя бы одна буква большая, то такое слово не подходит).

// const userStringsArray = ['five', 'Less', 'VsCode', 'Javascript', 'love'];

// const getAllStringLowerCase = (array) => {
//   return array.filter((el) => el === el.toLowerCase())
// }

// console.log(getAllStringLowerCase(userStringsArray));



// ********************************************************************************* //

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
// const getAllUsersNameMoreFourSymb = (array) => {
//   return array.filter((userName) => userName.name.length > 4)
// }

// console.log(getAllUsersNameMoreFourSymb(userList));

// b)
// const getAllUsersAgeMore20 = (array) => {
//   return array.filter((userName) => userName.age > 20)
// }

// console.log(getAllUsersAgeMore20(userList));

// ********************************************************************************* //

// 12. Задача
// Написать функцию, которая выводит переданный массив в консоль в красивой форме:
// элемент №{} значение: {}


// const userList = [true, 10, '10', true, 20, false, undefined];

// const getArrayInBeautifulForm = (array) => {
//   array.forEach((el, i, arr) => {
//     const result = {
//       'элемент №': i,
//       'значение': el
//     }
//     console.log(result);
//     // console.log(`элемент №: ${i},значение: ${el}`);
//   })
// }

// console.log(getArrayInBeautifulForm(userList));


// ********************************************************************************* //

// 13. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает другой массив с индексами всех чётных чисел.


// const userArray = [10, 55, 63, 22, 114, 12, 89, 100];

// const getArrayWithIndexAllEvenNumbers = (array) => {
//   const newArray = [];
//   array.forEach((el, i) => el % 2 === 0 && newArray.push(i)
//   )
//   return newArray
// }

// console.log(getArrayWithIndexAllEvenNumbers(userArray));

// console.log(userArray);


// ********************************************************************************* //

// 14. Задача
// Написать функцию, на вход которой подаётся массив, которая добавляет ко всем элементам массива префикс "ext-", не мутируя исходный, а возвращает новый массив.


// const userList = [111, 222, 333, 444, 555];

// const getNewArray = (array) => {
//   return array.map((el) => '-ext' + el)
// }

// console.log(getNewArray(userList));


// ********************************************************************************* //

// 15. Задача
// Написать функцию, на вход которой подаётся массив, функция возвращает новый массив из чётных чисел, которые были во входном массиве.

// const userList = [11, 20, 33, 40, 55, 100];

// const getNewArrayEvenNumbers = (array) => {
//   const newArray = [];
//   array.forEach((el) => el % 2 === 0 && newArray.push(el))
//   return newArray
// }

// console.log(getNewArrayEvenNumbers(userList));

// ********************************************************************************* //

// 16. Задача
// Написать функцию, которая находит первое положительное число в переданном массиве.

// const userList = [-11, 20, -33, 40, 55, 100];

// const findFirstPositiveNumber = (array) => {
//   return array.find((el) => el > 0)
// }

// console.log(findFirstPositiveNumber(userList));


// ********************************************************************************* //

// 17. Задача
// Написать функцию, на вход которой подаётся массив чисел, которая возвращает массив, в котором все числа уменьшаются в 2 раза.


// const userList = [11, 20, 33, 40, 55, 100];

// const getArrayAllNumbersLessTwo = (array) => {
//   return array.map((el) => el / 2)
// }


// console.log(getArrayAllNumbersLessTwo(userList));

// ********************************************************************************* //

// 18. Задача
// Написать функцию, на вход которой подаётся массив строк, функция возвращает массив чисел - длины строк каждого слова из исходного массива. Например:

// ['leg', 'pony', 'dog'] -> [3, 4, 3]


// const userList = ['leg', 'pony', 'dog'];

// const getArrayNumbers = (array) => {
//   return array.map((el) => el.length)
// }
// console.log(getArrayNumbers(userList));


// ********************************************************************************* //

// 19. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция увеличивает в 10 раз все числа в массиве, но не мутирует его, а возвращает новый.


// const userList = [11, 20, 33, 40, 55, 100];

// const increasesAllNumbersIn10 = (array) => {
//   return array.map((el) => el * 10)
// }

// console.log(increasesAllNumbersIn10(userList));

// console.log(userList);

// ********************************************************************************* //

// 20. Задача
// Написать функцию, которая считает количество нечётных чисел в массиве.

// const userList = [11, 20, 33, 40, 55, 100];

// const getSumNegativeNumbers = (array) => {
//   return array.reduce((prV, v) => v % 2 !== 0 ? v + prV : prV, 0)
// }

// console.log(getSumNegativeNumbers(userList));


// ********************************************************************************* //

// 21. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает истину, если все числа в массиве чётные.


// const userList = [10, 20, 30, 40, 50, 100];
// const userList = [10, 20, 30, 40, 50, 100, 9];

// const checksAllNumbersOnParity = (array) => {
//   return array.every((el) => el % 2 === 0)
// }

// console.log(checksAllNumbersOnParity(userList));


// ********************************************************************************* //

// 22. Задача
// Написать функцию, которая считает сумму всех отрицательных чисел.

// const userNumberList = [5, -9, 36, -12, 3, -55];

// const sumNegativeNumbers = (array) => {
//   return array.reduce((prV, el) => el < 0 ? el + prV : prV, 0)
// }

// console.log(sumNegativeNumbers(userNumberList));


// ********************************************************************************* //

// FIXME: 23. Задача
// Написать функцию, которая возвращает наибольшее и наименьшее число из переданного массива. (функция возвращает объект с двумя свойствами)

// const getMinMaxValues = (array) => {
//   const values = {
//     min: array[0],
//     max: array[0],
//   }

//   return array.reduce((returnValue, value) => {
//     if (returnValue.min > value) {
//       returnValue.min = value
//     } else {
//       returnValue.max = value
//     }

//     return returnValue
//   }, values)
// }

// console.log(getMinMaxValues([3, 15, 9, 20]));





// ********************************************************************************* //

// 24. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает true, если в массиве есть число, которое делится на 17.


// const userNumberList = [5, 9, 36, 2, 3, 55, 17];
// const userNumberList = [5, 9, 36, 2, 3, 55,];

// const checksInArrayNumberShares17 = (array) => {
//   return array.some((el) => el % 17 === 0)
// }

// console.log(checksInArrayNumberShares17(userNumberList));


// ********************************************************************************* //

// 25. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает массив из отрицательных чисел.


// const userNumberList = [5, 9, -36, 2, -3, 55, -17];

// const getArrayNegativeNumbers = (array) => {
//   return array.filter((el) => el < 0)
// }

// console.log(getArrayNegativeNumbers(userNumberList));
// console.log(userNumberList);


// ********************************************************************************* //

// 26. Задача
// Написать функцию, которая принимает на вход массив чисел, функция мутирует исходный массив - сортируя его в порядке возрастания.


// const userNumberList = [5, 9, -36, 2, -3, 55, -17];

// const getSortArray = (array) => {
//   return array.sort((a, b) => a - b)
// }

// console.log(getSortArray(userNumberList));

// console.log(userNumberList);

// ********************************************************************************* //

// !27. Задача TODO:        *** forEach = НЕ ЗАМУТИРОВАЛ ***
// Написать функцию, которая мутирует входный массив, заменяя всё чётные числа на слово 'even'.

// const userNumberList = [5, 9, 36, 2, -3, 55, 20];

// const changeAllEvenNumbers = (array) => {
//   array.forEach((el, i, arr) => el % 2 === 0 && (arr[i] = 'even'))
// }

// console.log(userNumberList);
// changeAllEvenNumbers(userNumberList);
// console.log(userNumberList);


// !  *** for = ЗАМУТИРОВАЛ ***
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



// ********************************************************************************* //

// 28. Задача
// Написать функцию, которая возвращает индекс первого встречного отрицательного числа.


// const userNumberList = [5, 9, 36, 2, -3, 55, 20];

// const getFirstNegativeIndex = (array) => {
//   return array.findIndex((el) => el < 0)
// }

// console.log(getFirstNegativeIndex(userNumberList));


// ********************************************************************************* //

// 29. Задача
// Написать функцию, которая мутирует входной массив строк, заменяя все строки на их длину.

// const userList = ['one', 'two', 'three', 'four', 'five'];

// const changeAllStringsInLehgtn = (array) => {
//   array.forEach((el, i, arr) => arr[i] = el.length
//   )
// }

// changeAllStringsInLehgtn(userList);
// console.log(userList === userList);

// ********************************************************************************* //

// 30. Задача
// Написать функцию, которая принимает на вход массив чисел, функция возвращает отсортированный массив чисел в порядке убывания. Но не мутирует исходный массив.


// const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const getSortArray = (array) => {
//   const newArray = [...array].sort((a, b) => b - a);
//   return newArray
//   // console.log(userArray === newArray);
// }

// console.log(getSortArray(userArray));


// ********************************************************************************* //

// 31. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает объект с тремя свойствами-массивами:

// массив чётных чисел
// массив отрицательных чисел
// массив чисел, больших 10
// Например:

// Input:
// [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6]

// Output:
// {
//     evenArray: [6, 34, 6, -98, 432, 876, -76, -8, 56, 76, 6]
//     negArray: [-43, -98, -76, -8, -7]
//     moreTenArray: [34, 45, 432, 65, 876, 56, 76, 45]


// const userNumbersList = [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6];

// const getObjWithThreeProp = (array) => {
//   const evenArray = array.filter((el) => el % 2 === 0)
//   const negArray = array.filter((el) => el < 0)
//   const moreTenArray = array.filter((el) => el > 10)
//   return {
//     evenArray,
//     negArray,
//     moreTenArray
//   }
// }

// console.log(getObjWithThreeProp(userNumbersList));


// }
// ********************************************************************************* //

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
// ********************************************************************************* //

// 32. Задача
// Написать функцию, которая получает из массива объектов - массив имён пользователей.

// const getArrayUsersName = (array) => {
//   return array.map((el) => el.name)
// }

// console.log(getArrayUsersName(users));


// 33. Задача
// Написать функцию, которая принимает на вход массив пользователей, функция возвращает массив строк вида:

//     <div>
//         <span>
//             Имя: <значение>
//         </span>
//         <span>
//             Возраст: <значение>
//         </span>
//         <span>
//             Семейное положение: <значение>
//         </span>
//     </div>



// const getListCard = (userList) => {
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


// ********************************************************************************* //

// 34. Задача
// Написать функцию, которая принимает на вход массив и имя, функция находит и возвращает объект по имени первого найденного в массиве.

// const getObjFirstName = (array, userName) => {
//   return array.find((el) => el.name === userName)
// }

// console.log(getObjFirstName(users, 'Peter'));

// ********************************************************************************* //

// 35. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чьё количество очков выше или равно 100.


// const usersArrayQuantityPointMore100 = (array) => {
//   return array.filter((user) => user.scores >= 100)
// }

// console.log(usersArrayQuantityPointMore100(users));


// ********************************************************************************* //

// 36. Задача
// Написать функцию, которая принимает на вход массив, имя, возраст и семейное положение, функция возвращает массив, в котором добавлен новый пользователь.

// Количество очков задать равным 0;
// id сделать случайным целым число в диапазоне от 1000 до 2000 не вкл;


// const getArrayAddedNewuser = (array, name, age, isMarried) => {
//   array.push({
//     id: Math.floor(Math.random() * (2000 - 1000) + 1000),
//     name,
//     age,
//     isMarried,
//     scores: 0
//   })
//   return array
// }

// console.log(getArrayAddedNewuser(users, 'Donald', 55, true));


// ********************************************************************************* //

// 37. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив, добавляя каждому пользователю новое свойство: isTest: true.

// const getArrayAddedAllUsersNewProp = (array) => {
//   return array.map((el) => el.isTest = true)
// }

// console.log(getArrayAddedAllUsersNewProp(users));

// console.log(users);


// ********************************************************************************* //

// 38. Задача
// Написать функцию, которая принимает на вход массив и id пользователя и новое семейное положение, функция возвращает массив, в котором меняется свойство isMarried на переданное.

// const getArrayChangePrototype = (array, id, isMarried) => {
//   return array.map((el) => el.id === id && (el.isMarried = isMarried))
// }

// console.log(getArrayChangePrototype(users, 100, true));
// console.log(users);


// ********************************************************************************* //

// TODO^39. Задача
// Написать функцию, которая принимает на вход массив и id пользователя, функция возвращает новый массив, удаляя пользователя с переданным id.


// const getNewArrayDeletOneUser = (userList, id) => {
//   return userList.filter((user) => user.id !== id)
// }

// console.log(getNewArrayDeletOneUser(users, 100));
// console.log(users);

// map - Read
// filter - Delete
// map + ... - UPDATE
// ... - Create

//


// isNaN() - является не числом

//! Элемент полность не удалился из массива. Образовалось empty


// ********************************************************************************* //
// 40. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив совершеннолетних пользователей.


// const getArrayAdultsUsers = (array) => {
//   return array.filter((el) => el.age >= 18)
// }

// console.log(getArrayAdultsUsers(users));


// ********************************************************************************* //

// FIXME:41. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в порядке увеличения очков.


// const getArraySort = (array) => {
//   // const newArray = [];
//   return array[0]
// }

// console.log(getArraySort(users));



// ********************************************************************************* //

// ! 42. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает пользователя с самым большим количеством очков.
// !Просмотреть на валидность решения задачи.

// const getUserMaxScores = (array) => {
//   return array.reduce((prV, v) => {
//     v.scores > prV ? v.scores : prV
//     // return array.find((el) => el.scores === v.scores)
//   }, user[0]) // TODO:
// }

// console.log(getUserMaxScores(users));



// ********************************************************************************* //

// 43. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в алфавитном порядке имён.

// const getArraySortName = (array) => {
//   const newArray = [...array].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
//   return newArray
// }

// console.log(getArraySortName(users));


// ********************************************************************************* //

// 44. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей.

// const getSumAllPointAllUsers = (array) => {
//   return array.reduce((prV, el) => {
//     return el.scores + prV
//   }, 0)
// }

// console.log(getSumAllPointAllUsers(users));

// ********************************************************************************* //

// 45. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный от самого старшему к самому младшему.


// const getNewarraySortfromSeniorToJunior = (array) => {
//   const newArray = [...array].sort((a, b) => a.age > b.age ? 1 : -1);
//   return newArray
// }

// console.log(getNewarraySortfromSeniorToJunior(users));

// ********************************************************************************* //

// 46. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный так, что сначала в массиве все женатые/замужние, а все холостяки внизу списка.


// const getNewArraySortIsMarried = (array) => {
//   const newArray = [...array].sort((a, b) => a.isMarried < b.isMarried ? 1 : -1)
//   return newArray
// }

// console.log(getNewArraySortIsMarried(users));


// ********************************************************************************* //

// FIXME:47. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив лучших трёх по количеству очков.

// [...sort]
// slice

// ********************************************************************************* //

// 48. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чья длина имени больше 4 символов.


// const getUsersLengthNameMoreFour = (array) => {
//   return array.filter((el) => el.name.length > 4)
// }

// console.log(getUsersLengthNameMoreFour(users));

// ********************************************************************************* //

// TODO:49. Задача
// Написать функцию, которая принимает на вход массив, функция удаляет всех несовершеннолетних пользователей.

// const deleteUsersAgeLess14 = (array) => {
//   return array.filter((el) => delete el.age < 18)
// }

// console.log(deleteUsersAgeLess14(users));
// console.log(users);


// ********************************************************************************* //

// 50. Задача
// Написать функцию, на вход которой подаётся 2 массива пользователей, функция возвращает новый массив, состоящий из всех пользователей двух массивов.


// const userArrayOne = [1, 2, 3, 4, 5];
// const userArrayTwo = [6, 7, 8, 9, 10];

// const getNewArrayAllUsersTwoArray = (arrayOne, arrayTwo) => {
//   return arrayOne.concat(arrayTwo)
// }

// console.log(getNewArrayAllUsersTwoArray(userArrayOne, userArrayTwo));

// ********************************************************************************* //

// ★ Задачи повышенной сложности ★
// ★ 51. Задача ★
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей, которые женаты.
// ********************************************************************************* //

// ★ 52. Задача ★
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех совершеннолетних пользователей.
// ********************************************************************************* //

// ★ 53. Задача ★
// Написать функцию, которая возвращает первое встречное слово, в котором хотя бы 2 буквы заглавные
// ********************************************************************************* //

// ★ 54. Задача ★
// Написать в функцию, на вход которой подаётся массив чисел Функция должна для каждого элемента этого массива вывести сумму двух его соседей и вернуть этот новый массив. Для элемента массива, являющихся крайними, одним из соседей считается элемент, находящийся на противоположном конце этого массива. Например, если на вход подаётся массив: 1 3 5 6 10, то на выход ожидается новый массив: 13 6 9 15 7
// Если на вход пришло одно число, то вывести его же
// ********************************************************************************* //

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


// calculator('3 + 7') // '10'
// calculator('3 * 7') // '21'
// calculator('9 / 3') // '3'
// calculator('10 - 3') // '7'

// calculator('11 - 3') // 'Error'
// calculator('V - 3') // 'Error'
// calculator('V / II') // 'II'
// calculator('5 / 2') // '2'

// calculator('V - III') // 'II'


// Бросить ошибку
// throw new Error("В чём ошибка?") // Бросается ошибка и завершается работа прогроаммы на этой строчке

