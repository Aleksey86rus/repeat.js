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

// * 5
// const array = [1, 2, 3, 4, 5];
// const cloneArray = Array.from(array);

// console.log(cloneArray);
// console.log(cloneArray === array);// => false


// * 6
// const array = [1, 2, 3, 4, 5];
// const cloneArray = [...array];
// console.log(cloneArray);
// console.log(cloneArray === array);// => false

// * 7
// копирование массиво в массиве
// let sheeps = [['1', '2'], ['3', '4'], ['5', '6']]
// let cloneSheeps = sheeps.map(function (item) {
//   return [...item]
// })

// cloneSheeps[1].push('100')

// console.log(sheeps)
// console.log(cloneSheeps)