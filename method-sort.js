// 7 5 8 9 11 3

// -> a, b
// 5 7 8 9 3 11 (1)
// 5 7 8 3 9 11 (2)
// 5 7 3 8 9 11 (3)
// 5 3 7 8 9 11 (4)
// 3 5 7 8 9 11 (5)

// n - кол-во элементв
// O(n*(n-1)) -> O(n^2-n) -> O(n^2)

const numList = [1, 7, 5, 8, 9, 3, 11];
// numList.sort((a, b) => {
//   // Задаётся как сортировать массив
//   console.log(a, b); // a, b - элементы массива
// })

// !!! Ментод мутирует исходный массив !!!
// И при этом возвращает ссылку на мутированый массива
// * Если не передан колбэк, то сортируется, как массив строк!

// Пример:
// const res = [...numList].sort(); //
// console.log(res); // [1, 11, 3, 5, 7, 8, 9]

// const strList = ['gf', 'ab', 'a', 'b', 'ac'];
// console.log(strList.sort()); // ['a', 'ab', 'ac', 'b', 'gf']


// ? Как отсортировать массив чисел?
const res = [...numList].sort((a, b) => {
  // * Сортировка (по убыванию или по возрастанию) зависит от того, какое значение вернёт callback функция
  // * Положительное или отрицательно
  // if (a > b) {
  //   return 1
  // } else {
  //   return -1
  // }

  return a > b ? 1 : -1
})
console.log(res);

// Рефакторинг
const res2 = [...numList].sort((a, b) => a > b ? 1 : -1)
console.log(res2);


// * Number
// По возрастанию
const res3 = [...numList].sort((a, b) => a - b)
// По убыванию
const res4 = [...numList].sort((a, b) => b - a)
console.log(res3);
console.log(res4);


// * String
const strList = ['gf', 'ab', 'a', 'b', 'ac', 'A', 'D', 'AD'];
// По алфавиту (не зависимо регистра)
console.log(strList.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1));
// Против алфавита (не зависимо регистра)
console.log(strList.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1));
console.log(strList.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1));

// console.log(strList.sort()); // По алфавиту (сначала заглавные по алфавиту, затем строчные)
// console.log('A'.charCodeAt()); // 65
// console.log('a'.charCodeAt()); // 97


// * Boolean
const isBoolList = [true, false, true, false, true, false, false, true, true]
console.log(isBoolList.sort((a, b) => a ? -1 : 1)); // Сначала true
console.log(isBoolList.sort((a, b) => a ? 1 : -1)); // Сначала false

console.log(isBoolList.sort((a) => a ? 1 : -1)); // Сначала true
console.log(isBoolList.sort((a) => a ? -1 : 1)); // Сначала false


// * Main
const anotherStrList = ['gf', 'ab', 'a', 'b', 'ac', 'A', 'D', 'AD']
const sortedStrList = [...anotherStrList].sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)
console.log(sortedStrList); // Список сортированных по алфавиту
console.log(sortedStrList.reverse());
// * Можно получить список обратной сортировки с помощью reverse()
// ! Использовать только, если необходимо одновременно по алфавиту и против
// Если нужно сразу против алфавита, то целесообразнее сразу писать нужную сортироку с нужным колбэком

// * Date
const dataList = ['1-20-2023', '10-30-2022', '5-20-2023'];
console.log(dataList.sort((a, b) => new Date(a) - new Date(b))); // По возрастанию дат
console.log(dataList.sort((a, b) => new Date(b) - new Date(a))); // По убыванию дат


const cart = [
  {
    name: 'potato',
    price: 30
  },
  {
    name: 'banana',
    price: 100
  },
  {
    name: 'carrot',
    price: 20
  },
  {
    name: 'Black Bread',
    price: 46
  },
]

// Отсортировать по алфавиту товары

const sortedListCartByName = [...cart].sort((a, b) => {
  return a.name.toLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1
})

console.log(sortedListCartByName);


// Отсортировать по цене

const sortedListCartByPrice = [...cart].sort((a, b) => {
  return a.price - b.price
})

console.log(sortedListCartByPrice);




