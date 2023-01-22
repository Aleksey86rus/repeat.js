// 22. Задача
// FIXME:
// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.

//                0     1     2      3       4     5    6     7
// const userList = [1, 'denis', 9, 'Nikolay', 25, 'Egor', 99, 'Leo'];

// const getFirstIndexInArray = (array) => {
//
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
// Написать функцию, которая возвращает наибольшее и наименьшее и наибольшее число из переданного массива. (функция возвращает объект с двумя свойствами)
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


// Написать функцию, которая возвращает наибольшее и наименьшее и 
// наибольшее число из переданного массива.

const users = [8, 1, 3, 4, 5, 6, 10]
// *1 Вариант
const objectTwoProp = (array) => {
  const startValue = array[0]
  const maxValue = array.reduce((prV, v) => v > prV ? v : prV, startValue)
  const minValue = array.reduce((prV, v) => v < prV ? v : prV, startValue)
  return {
    maxValue,
    minValue
  }
}
console.log(objectTwoProp(users));




// TODO: Решить с помощью 1 reduce

// ? 2 Вариант
const users2 = [8, 1, 3, 4, 5, 6, 10]

const objectTwoProp2 = (array) => {
}

console.log(objectTwoProp2(users2));








// * Превращаем массив в объект
// const users = [
//   { name: 'John', age: 32, salary: 1500 },
//   { name: 'Mike', age: 25, salary: 1200 },
//   { name: 'Pieter', age: 27, salary: 1400 },
//   { name: 'Jim', age: 22, salary: 1800 }
// ]

// const usersObj = users.reduce((acc, user, index) => {
//   acc[index] = user
//   return acc;
//   // Начальное значение {}
// }, {});

// console.log('New Object', usersObj);





// const objectTwoProp = (array) => {
//   const startValue = array[0].scores
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
//   return array.reduce((scores, user) => user.scores + scores, 0)
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
//   return array.reduce((prV, v) => v.isMarried ? v.scores + prV : prV, 0)
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
//   return array.reduce((prV, v) => v.age > 18 ? v.scores + prV : prV, 0)
// }

// console.log(getAllPointsAllAdultUsers(users));