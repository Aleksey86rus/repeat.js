// *1 Не глубокое копирование. Не мутирут. (т.е не изменяю исходный массив)
// for

// const array = [1, 2, 3, 4, 5];
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   newArray.push(array[i])
// }
// console.log(newArray);
// console.log(array);
// console.log(array === newArray); // => false


// ============================================================== //

// *2
// concat

// const array = [1, 2, 3, 4, 5];
// const newArray = [];

// console.log(newArray.concat(array));

// console.log(array === newArray); // => false


// ============================================================== //

// *3
// slise

// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice();

// console.log(newArray);
// console.log(array);
// console.log(array === newArray); // => false

// *4
// присвоение через оператор (=)

// const array = [1, 2, 3, 4, 5];
// const newArray = array;

// // console.log(newArray);
// // console.log(array === newArray); // => true

// newArray.length = 3; // Укоротили исходный массив
// console.log(array); // Получим - [1, 2, 3]