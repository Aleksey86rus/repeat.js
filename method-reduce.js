// 2. Задача
// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.

//                0     1     2      3       4     5    6     7
// const userList = [1, 'denis', 9, 'Nikolay', 25, 'Egor', 99, 'Leo'];

// const getFirstIndexInArray = (array) => {
//   return array.reduce((prV, v, i) => v.length < 4 ? i : prV, 100)
// }

// console.log(getFirstIndexInArray(userList));

// ========================================================================= //

// 20. Задача
// Написать функцию, которая считает количество нечётных чисел в массиве.


// const userArrayNumbers = [5, -9, 10, 7, -23, 1, 85, -4];

// const sumNegativeNmubers = (array) => {
//   // debugger
//   return array.reduce((prV, v) => v < 0 ? v + prV : prV, 0)
// }

// console.log(sumNegativeNmubers(userArrayNumbers));



// ========================================================================= //
// 23. Задача
// Написать функцию, которая возвращает наибольшее и наименьшее число из переданного массива. (функция возвращает объект с двумя свойствами)
// ========================================================================= //
// Дан массив объектов, выполнить следующие задачи:

// const users = [
//   {
//     id: 100,
//     name: "John",
//     age: 19,
//     isMarried: false,
//     scores: 78
//   },
//   {
//     id: 101,
//     name: "Peter",
//     age: 13,
//     isMarried: false,
//     scores: 311
//   },
//   {
//     id: 102,
//     name: "John",
//     age: 33,
//     isMarried: false,
//     scores: 10
//   },
//   {
//     id: 103,
//     name: "Alex",
//     age: 14,
//     isMarried: true,
//     scores: 121
//   },
//   {
//     id: 104,
//     name: "Lila",
//     age: 18,
//     isMarried: true,
//     scores: 999
//   },
// ]

// const objectTwoProp = (array) => {
//   const startValue = array[0].scores
//   // console.log(startValue.scores);
//   // debugger
//   const maxValue = array.reduce((prV, v) => v.scores > prV ? v.scores : prV, 0)
//   const minValue = array.reduce((prV, v) => v.scores < prV ? v.scores : prV, startValue)
//   return {
//     maxValue,
//     minValue
//   }
// }

// console.log(objectTwoProp(users));




// 44. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей.

// const users = [
//   {
//     id: 100,
//     name: "John",
//     age: 19,
//     isMarried: false,
//     scores: 78
//   },
//   {
//     id: 101,
//     name: "Peter",
//     age: 13,
//     isMarried: false,
//     scores: 311
//   },
//   {
//     id: 102,
//     name: "John",
//     age: 33,
//     isMarried: false,
//     scores: 10
//   },
//   {
//     id: 103,
//     name: "Alex",
//     age: 14,
//     isMarried: true,
//     scores: 121
//   },
//   {
//     id: 104,
//     name: "Lila",
//     age: 18,
//     isMarried: true,
//     scores: 999
//   },
// ]

// const gerAllSumAllUsers = (array) => {
//   return array.reduce((prV, v) => v.scores + prV, 0)
// }

// console.log(gerAllSumAllUsers(users));



// ========================================================================= //
// ★ 51. Задача ★
//Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей, которые женаты.

// const users = [
//   {
//     id: 100,
//     name: "John",
//     age: 19,
//     isMarried: false,
//     scores: 78
//   },
//   {
//     id: 101,
//     name: "Peter",
//     age: 13,
//     isMarried: false,
//     scores: 311
//   },
//   {
//     id: 102,
//     name: "John",
//     age: 33,
//     isMarried: false,
//     scores: 10
//   },
//   {
//     id: 103,
//     name: "Alex",
//     age: 14,
//     isMarried: true,
//     scores: 121
//   },
//   {
//     id: 104,
//     name: "Lila",
//     age: 18,
//     isMarried: true,
//     scores: 999
//   },
// ]


// const getAllSumWithMarried = (array) => {
//   return array.reduce((prV, v) => v.isMarried === true ? v.scores + prV : prV, 0)
// }

// console.log(getAllSumWithMarried(users));

// ========================================================================= //
//★ 52. Задача ★
//Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех совершеннолетних пользователей.

// const users = [
//   {
//     id: 100,
//     name: "John",
//     age: 19,
//     isMarried: false,
//     scores: 78
//   },
//   {
//     id: 101,
//     name: "Peter",
//     age: 13,
//     isMarried: false,
//     scores: 311
//   },
//   {
//     id: 102,
//     name: "John",
//     age: 33,
//     isMarried: false,
//     scores: 10
//   },
//   {
//     id: 103,
//     name: "Alex",
//     age: 14,
//     isMarried: true,
//     scores: 121
//   },
//   {
//     id: 104,
//     name: "Lila",
//     age: 18,
//     isMarried: true,
//     scores: 999
//   },
// ]


// const getAllPointsAllAdultUsers = (array) => {
//   return array.reduce((prV, v) => v.age > 14 ? v.scores + prV : prV, 0)
// }

// console.log(getAllPointsAllAdultUsers(users));