// const users = [
//   {
//     id: 100,
//     name: "John",
//     age: 35,
//     isMarried: false,
//     scores: 211
//   },
//   {
//     id: 101,
//     name: "Peter",
//     age: 45,
//     isMarried: false,
//     scores: 311
//   },
//   {
//     id: 102,
//     name: "Dima",
//     age: 15,
//     isMarried: true,
//     scores: 411
//   },
//   {
//     id: 103,
//     name: "Frank",
//     age: 25,
//     isMarried: true,
//     scores: 511
//   },
// ]


const object = {
  id: 103,
  name: "Frank",
  age: 25,
  isMarried: true,
  scores: 511
}

// *fof-in
// for (const key in object) {
// console.log(object[key]); // Вывод значений объекта
// console.log(key); // Вывод ключей объекта
// console.log(`${key}: ${object[key]}`); // Вывод и ключей и значений объекта
// }

// *1
// delete object.age // Удаление
// console.log(object);

// *2
// object.age = 555; // Создание
// console.log(object);

// *3
// console.log(object.id); // Обращение - чтение
// console.log(object['id']); // Обращение - чтение

// *4
// const prop = 'isMarried'; // Обращение с ключу объекта (Вычисляемое свойство)
// console.log(object[prop]); // true

// *5
// object.isMarried = false; // Замена значения в объекте
// console.log(object);


// =========== HOF ======================= //
// const res = users.forEach((v, i, arr) => {
//   // console.log(v.id);
//   console.log(v, i);
// })
// console.log(res);



// const res = users.map((v) => {
//   return v.name
// })
// console.log(res);




// const res = users.reduce((prV, v) => {
//   return prV + v.age
// }, 0)
// console.log(res);



// const getIndex = (arr) => {
//   return arr.findIndex((v) => {
//     if (v.name === 'Peter')
//       return v
//   })
// }

// console.log(getIndex(users));



// const res = users.findIndex((v) => {
//   if (v.name === 'Peter') {
//     return v
//   }
// })
// console.log(res);



// const res = users.forEach((value, i, array) => {
//   const arr = [];
//   // arr.push(array[i].scores)
//   arr.push(array[i].scores)
//   console.log(arr);
//   // console.log(array[i].scores);

// })





// *SORT

// function name(params) {
// }
// const name2 = function()  {
// }
// const name3 =() => {
// }


// function compare(a, b) {
//   if (a > b) {
//     return 1;
//   } if (a < b) {
//     return -1
//   } if (a == b) {
//     return 0
//   }
// }

// const testArr = [654, 6, 546, -54, 765, -876, 8, -678]
// console.log(testArr.sort(compare));



// const compare = (a, b) => {
//   return a - b
// }


// const testArr = [654, 6, 546, -54, 765, -876, 8, -678]

// testArr.sort(function (a, b) {
//   return a - b
// })
// console.log(testArr);

// testArr.sort(compare)
// console.log(testArr);


// console.log(testArr.sort( (a, b) => a -b));


// ============================================================= //

// FD
// const testArr = [654, 6, 546, -54, 765, -876, 8, -678];

// function sortNumber(a, b) {
//   if (a > b) {
//     return 1
//   } if (a == b) {
//     return 0
//   } if (a < b) {
//     return -1
//   }
// }


// console.log(testArr.sort(sortNumber));



// ========================================================== //

// FE
// const testArr = [654, 6, 546, -54, 765, -876, 8, -678];

// const sortNumber = function (a, b) {
//   if (a > b) {
//     return 1
//   } if (a == b) {
//     return 0
//   } if (a < b) {
//     return -1
//   }
// };

// console.log(testArr.sort(sortNumber));


// ========================================================== //
// EF

// const testArr = [654, 6, 546, -54, 765, -876, 8, -678, 555];

// const sortNumber = (a, b) => a - b;

// console.log(testArr.sort(sortNumber));