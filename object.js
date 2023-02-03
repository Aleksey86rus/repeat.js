// const user = {
//   name: "Peter",
//   age: 33,
//   job: "Developer",

//   "my address": {
//     city: "Moscow",
//     country: "Russia",
//     abroad: ["Vienna", "Paris", "London", "Miami"]
//   },
//   item: ["bag", "book", "pencil"],
//   more: null,
//   key: "Aha-ha-ha-ha"
// };

// ******************************************************************************************** //
// 1. Задача +
// Вывести в консоль свойство name.

// console.log(user.name);


// ******************************************************************************************** //

// 2. Задача +
// Изменить возраст на 4 года меньше.

// user.age -= 4;
// console.log(user);

// ******************************************************************************************** //

// 3. Задача ~
// Вывести в консоль последний город из заграничного массива в объекте "my address".

// const user = {
//   name: "Peter",
//   age: 33,
//   job: "Developer",

//   "my address": {
//     city: "Moscow",
//     country: "Russia",
//     abroad: ["Vienna", "Paris", "London", "Miami"]
//   },
//   item: ["bag", "book", "pencil"],
//   more: null,
//   key: "Aha-ha-ha-ha"
// };
// console.log(user['my address'].abroad[3]);

// const city = user['my address'].abroad
// console.log(city[city.length - 1]);



// const city = ["Vienna", "Paris", "London", "Miami"]
// console.log(city[city.length - 1]);
// console.log(city[3]);


// ******************************************************************************************** //

// 4. Задача +
// Вывести в консоль в столбик все города из заграничного массива.

// const allCitys = user['my address'].abroad
// for (const key in allCitys) {
//   console.log(allCitys[key]);
// }


// ******************************************************************************************** //

// 5. Задача +
// Удалить свойство more из объекта user

// console.log(delete user.more);
// console.log(user);

// ******************************************************************************************** //

// 6. Задача ~
// Переименуйте Питера на Паркера.

// user.name = 'Parker'
// console.log(user);

// ******************************************************************************************** //

// 7. Задача ~
// Поменйяте место жительство("my address")

// user['my address'].city = 'Prostokvashino';
// console.log(user);

// ******************************************************************************************** //

// 8. Задача
// Вывести в консоль с помощью цикла все свойства объекта "my address".

// for (const key in user['my address']) {
//   console.log(`ключ: ${key} значение: ${user["my address"][key]}`);
// }

// ******************************************************************************************** //

// 9. Задача +
// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object.

// for (const key in user) {
//   if (typeof user[key] !== 'object' || user[key] === null) {
//     console.log(user[key]);
//   }
// }

// ******************************************************************************************** //

// 10. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//   name: "Lucas",
//   age: 29,
// };

// user[prop] = 'Manager';
// console.log(user);

// ! XXX console.log(user[prop] = 'Manager');
// * VVV console.log(user[prop])


// ******************************************************************************************** //

// 11. Задача
// Дан объект user, выполнить удаление свойств, которые содержут слово delete в ключе.

// Циклом пользоваться не нужно, просто удалить.
// const user = {
//   name: "Lucas",
//   age: 29,
//   "delete me": 'text',
//   delete: 105,
//   'deleteProp': false
// };

// for (const key in user) {
//   if (key.includes('delete')) {
//     delete user[key]
//   }
// }

// console.log(user);

// ******************************************************************************************** //

// 12. Задача
// Дан объект car.

// Вывести в консоль серийный номер автомобиля(id)
// Поменять цвет автомобиля на белый.
// Вывести в консоль имена всех пассжиров.
// Добавить ещё одного пассажира 'Roman' к нам.
// Автомобиль сломан, удалить свойство cabin.
// Изменить мощность на 0, но не удалять

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// // #1
// console.log(car.id);
// // #2
// car.color = '#fff';
// // #3
// car.people.forEach((person) => console.log(person))
// // #4
// car.people.push('Roman');
// // #5
// delete car.cabin;
// // #6
// car.power = 0;


// ******************************************************************************************** //

// 13. Задача FIXME:
// Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом. Если такого ключа нет, то функция возвращает undefined.

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }


//
// const getValueFromTheObject = (object, key) => {
//   if (typeof object[key] === 'string' ||
//     typeof object[key] === 'number' ||
//     typeof object[key] === 'object') {
//     return object[key]
//   } else {
//     return undefined
//   }
// }

// console.log(getValueFromTheObject(car, 'color')); // '#000'
// console.log(getValueFromTheObject(car, 'cabin')); // 'sidan'
// console.log(getValueFromTheObject(car, 'power')); // 150
// console.log(getValueFromTheObject(car, 'people')); // ['Alex', 'Aleksey', 'Mark']
// console.log(getValueFromTheObject(car, 'test')); //  undefined
//

// ******************************************************************************************** //

// 14. Задача - FIXME:
// Написать функция, которая удаляет свойство из объекта, если оно есть.

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// const deleteValuefromObject = (object) => {
//   return delete object.id
// }
// console.log(deleteValuefromObject(car));
// console.log(car);




// ******************************************************************************************** //

// 15. Задача
// Дан объект person, выполнить копирование объекта:

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };

// *1 способ +
// const userObject = {};
// for (const key in person) {
//   userObject[key] = person[key]
// }

// console.log(userObject);
// console.log(person);
// console.log(userObject === person);

// *2 способ +
// const userObject = Object.assign({}, person);
// console.log(userObject);
// console.log(person);
// console.log(userObject === person);

// *3 способ +
// const userObject = { ...person };
// console.log(userObject);
// console.log(person);
// console.log(userObject === person);



// ******************************************************************************************** //

// 16. Задача TODO: refactoring
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.

// const calculatorOfTwoNumbers = (num1, num2) => {
//   const result = num1 * num2
//   return {
//     num1,
//     num2,
//     result
//   }
// }

// console.log(calculatorOfTwoNumbers(5, 5));


// ******************************************************************************************** //

// 17. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает число - количество свйоств в объекте.

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// const getQuatityValueInObject = (obj) => {
//   return Object.keys(obj).length
//   // console.log(Object.keys(obj).length);
// }

// console.log(getQuatityValueInObject(car));

// ******************************************************************************************** //

// 18. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// const getArrayWithKeysFromObject = (object) => {
//   const arrayWithKeys = [];
//   for (const key in object) {
//     arrayWithKeys.push(key)
//   }
//   return arrayWithKeys
// }

// console.log(getArrayWithKeysFromObject(car));



// ******************************************************************************************** //

// 19. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает количество объектов внутри переданного объекта. В подсчёт идут только следующие структуры данных: массивы, объекты, функции

// const car = {
//   id: [88005553535, 100, 200, 300],
//   power: 150,
//   color: '#000',
//   foo: fuon = () => { },
//   people: {
//     Alex: true,
//     Aleksey: true,
//     Mark: true
//   },
//   id2: [100, 200, 300, 400, 500],
//   id3: null,
//   id3: null,
// }

// let count = 0;
// const getQuantityObjectInArray = (object) => {
//   for (const key in object) {
//     if (typeof object[key] === 'object' ||
//       typeof object[key] === 'function' &&
//       object[key] === null) {
//       count++
//     }
//   }
//   return count
// }

// console.log(getQuantityObjectInArray(car));

// console.log(typeof function () { });
// console.log(typeof (foo = () => { }));


// ******************************************************************************************** //

// 20. Задача // TODO: reduce
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.


// const car = {
//   id: 88005553535,
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark'],
//   people1: ['Alex', 'Aleksey', 'Mark'],
//   people2: ['Alex', 'Aleksey', 'Mark'],
// }

// const gerQuntityArrayInObject = (object) => {
//   let count = 0;
//   for (const key in object) {
//     if (Array.isArray(object[key])) {
//       count++
//     }
//   }
//   return count
// }

// console.log(gerQuntityArrayInObject(car));


// ******************************************************************************************** //

// 21. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает массив, состоящий из значений переданного объекта.

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// const getValuesfromObject = (object) => {
//   const arrayValues = [];
//   for (const key in object) {
//     arrayValues.push(object[key])
//   }
//   return arrayValues
// }

// console.log(getValuesfromObject(car));

// ******************************************************************************************** //

// 22. Задача
// Написать функци, на вход которой подаётся массив.Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];

// После вызова функции вернётся объект:
// const result = {
//   string: 4,
//   number: 9,
//   null: 2,
//   undefined: 1,
//   boolean: 2,
//   object: 2
// };


// const getKeyDataTypeFromArray = (object) => {
//   let countString = 0;
//   let counNumber = 0;
//   let countNull = 0;
//   let countUndefined = 0;
//   let countBoolean = 0;
//   let countObject = 0;

//   for (const el of object) {
//     if (typeof el === 'string') {
//       countString++
//     } else if (typeof el === 'number') {
//       counNumber++
//     } else if (el === null) {
//       countNull++
//     } else if (el === undefined) {
//       countUndefined++
//     } else if (typeof el === 'boolean') {
//       countBoolean++
//     } else if (typeof el === 'object') {
//       countObject++
//     }
//   }
//   return {
//     string: countString,
//     number: counNumber,
//     null: countNull,
//     undefined: countUndefined,
//     boolean: countBoolean,
//     object: countObject
//   }
// }

// console.log(getKeyDataTypeFromArray(testArray));


// ******************************************************************************************** //

// 23. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ? false

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ? true
// ******************************************************************************************** //

// 24. Задача
// Написать функци, на вход которой подаётся объект.Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

// Например в объекте person;
// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script",
//   test: undefined,
//   nuller: null,
//   isHuman: true,
//   item: ['bag', 'pen']
// };

// После вызова функции вернётся объект:
// {
//   string: 3,
//     number: 1,
//       null: 1,
//         undefined: 1,
//           boolean: 1,
//             object: 1
// };

// const getObjectWithKeysAndDataTypes = (object) => {
//   let string = 0;
//   let number = 0;
//   let nulls = 0;
//   let undefined = 0;
//   let boolean = 0;
//   let objects = 0;

//   for (const key in object) {
//     if (typeof object[key] === 'string') {
//       string++
//     } else if (typeof object[key] === 'number') {
//       number++
//     } else if (object[key] === null) {
//       nulls++
//     } else if (object[key] === undefined) {
//       undefined++
//     } else if (typeof object[key] === 'boolean') {
//       boolean++
//     } else if (typeof object[key] === 'object') {
//       objects++
//     }
//   }
//   return {
//     string,
//     number,
//     nulls,
//     undefined,
//     boolean,
//     objects
//   }
// }

// console.log(getObjectWithKeysAndDataTypes(person));



// ******************************************************************************************** //

// ? 25. Задача
// Дан объект bob, удалить у него все свойства со знаечниями undefined и null, пользуясь циклом.

// const bob = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script",
//   test: undefined,
//   nuller: null,
//   isHuman: true,
//   item: ['bag', 'pen']
// };

// for (const key in bob) {
//   if (bob[key] === null || bob[key] === undefined) {
//     delete bob[key]
//   }
// }

// console.log(bob);


// ******************************************************************************************** //

// 26. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user = {
//   name: "Mark",
//   age: 35,
//   isAdmin: false
// };

// const copyUser = user;
// copyUser.name = "Lawlet";

// console.log(copyUser.name); // ? 'Lawet'
// console.log(user.name); // ? 'Lawet'

// ******************************************************************************************** //

// 27. Задача -
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user = {
//   name: "Roger",
//   job: "Workman",
//   age: 33,
// };

// console.log(rename(user, "Ben")); // ? 'Ben'

// function rename(obj, newName) {
//   obj.name = newName;
//   return obj;
// }
// ******************************************************************************************** //

// 28. Задача
// Создать объект player со следующими полями:
// name = Vita;
// money = 1000;
// level = 1;
// К созданному объекту добавить следующие поля:
// friendList = пустой массив;
// likes fly = false;
// Создать переменную: propText и присвоить значение isBetaTester.
// Добавить в объект ключ, название которого лежит в переменной propText, со значением true.
// Добавить в массив friendList имя: Alph и Rich.
// Вывести все свойства в консоль в виде: <ключ>: <значение>;.


// const player = {
//   name: 'Vita',
//   money: 1000,
//   level: 1,
// }

// player.friendList = [];
// player['likes fly'] = false;

// const propText = 'isBetaTester';
// player[propText] = true;

// player.friendList.push('Alph', 'Rich')


// for (const key in player) {
//   console.log(`ключ:${key}  значение:${player[key]}`);
// }


// ******************************************************************************************** //

//   29. Задача
//   Написать функцию, на вход которой подаётся объект. Функция возвращает новый объект, состоящий только из текстовых свойств переданного объекта.

// const user = {
//   name: "Mark",
//   age: 35,
//   isAdmin: false,
//   name1: 'Vito'
// };

// const getNewObject = (object) => {
//   const newObject = {};
//   for (const key in object) {
//     if (typeof object[key] === 'string') {
//       newObject[key] = object[key]
//     }
//   }
//   return newObject
// }

// console.log(getNewObject(user));


// ******************************************************************************************** //

//   30. Задача
//   Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
//   ! Не нужно использоваться циклы, просто в лоб console.log(); Объект автомобиль:

//   Серийный номер;
//   Марка машины;
//   Год выпуска;
//   Завод (адрес у завода, название);
//   Владелец (имя, фамилия, дата рождения, пол); <---- XX TODO:
//   Вывести каждое значение всех свойств по отдельности через console.log().


// const car = {
//   "serial number": [55, 66, 77, 88, 99, 100],
//   'car brand': 'УАЗ',
//   'year of release': 1949,
//   factory: 'Ulyanovsk',
//   owner: {
//     grisha: 1950,
//     misha: 1960,
//     Anzoric: 1970,
//   }
// }

// console.log(car['Serial number']);
// console.log(car['Car brand']);
// console.log(car['Year of release']);
// console.log(car.Factory);
// console.log(car.Owner);


// ******************************************************************************************** //

//   31. Задача TODO:
//   Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
//   Объект магазин:

//   Название магазина;
//   Категории товаров (еда (список товаров 2-3), хозтовары (список товаров 2-3), косметика (список товаров 2-3));
//   Есть ли зона для перекуса;
//   Есть ли парковка;
//   Количество этажей;
//   Список партнёров (названия компаний, сайт партнёра);
//   Вывести каждое значение всех свойств по отдельности через console.log().

// const shop = {
//   name: 'Berezka',
//   category: {
//     products: ['chees', 'bread', 'caliv'],
//     'household goods': ['shovel', 'watering can', 'hammer'],
//     cosmetic: ['perfume', 'shampoo', 'deodorant']
//   },
//   isSnackArea: true,
//   'Parking space': true,
//   'Number of floors': 5,
//   'List of partners': ['Mockow', 'mvd', 'E-mail: Berezka.ru']
// }

// console.log(shop['Store name']);
// console.log(shop['Product category']);
// console.log(shop['Snack area']);
// console.log(shop['Parking space']);
// console.log(shop['Number of floors']);
// console.log(shop['List of partners'][0]);
// console.log(shop['List of partners'][1]);
// console.log(shop['List of partners'][2]);


// ******************************************************************************************** //

//   32. Задача
//   Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
//   Объект магазин:

//   Имя ученика;
//   id ученика;
//   Возраст;
//   Активный ли ученик;
//   Адрес (название улицы и город (название города и название страны, где город));
//   Список технологий, который знает ученик (id технологии и название технологии);
//   Вывести каждое значение всех свойств по отдельности через console.log().


// TODO:

// ******************************************************************************************** //

//   33. Задача
//   Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль.

// TODO:

// ******************************************************************************************** //

//   34. Задача
//   Написать функцию, которая проверяет, является ли переданный параметр примитивом.


// const checkArrayIsPrimitive = (param) => {
//   return typeof param !== 'object' &&
//     param !== null &&
//     typeof param !== 'function' ? true : false
// }

// console.log(checkArrayIsPrimitive('AlisA'));
// console.log(checkArrayIsPrimitive(10));
// console.log(checkArrayIsPrimitive(true));
// console.log(checkArrayIsPrimitive({}));
// console.log(checkArrayIsPrimitive(() => { }));
// console.log(checkArrayIsPrimitive([]));
// console.log(checkArrayIsPrimitive(null)); // Это примитив!

// number, string, boolean, null, undefined <--- ПРИМИТИВЫ
// object (object, function, array, map, set, date ...) <--- ССЫЛОЧНЫЙ ТИП


// ******************************************************************************************** //

//   35. Задача
//   Выполнить рефакторинг кода.

//   function changeTaskStatusAC(todolistId, taskId, newIsDone) {
//   const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS';
//   return {
//     type: CHANGE_TASK_STATUS,
//   todolistId: todolistId,
//   taskId: taskId,
//   isDone: newIsDone
//   };
// }


// TODO: к стрелочной функции
// Рефакторинг
// function changeTaskStatusAC(todolistId, taskId, isDone) {
//   return {
//     type: 'CHANGE-TASK-STATUS',
//     todolistId,
//     taskId,
//     isDone
//   };
// }

// console.log(changeTaskStatusAC(10, 20, 30));

// const changeTaskStatusAC = (...param) => Object.assign({}, param)

// console.log(changeTaskStatusAC('CHANGE-TASK-STATUS', 10, 20, 30));

// ******************************************************************************************** //

//   ★ Задачи повышенной сложности ★
//   ★ 36. Задача ★
//   Вывести каждое значение всех свойств и подствойст по отдельности через console.log()

// const man = {
//   name: 'John',
//   age: 28,

//   mother: {
//     name: "Kate",
//     age: 50,
//     work: {
//       position: "doctor",
//       experience: 15
//     },

//     parents: [
//       {
//         name: "Kevin",
//         age: 80,

//         favoriteDish: {
//           title: "borscht",

//           ingredients: [
//             { title: "beet", amount: 3 },
//             { title: "potatoes", amount: 5 },
//             { title: "carrot", amount: 1 },
//           ]
//         }
//       },
//       {
//         name: "Jennifer",
//         age: 78,

//         favoriteDish: {
//           title: "sushi",

//           ingredients: [
//             { title: "fish", amount: 1 },
//             { title: "rise", amount: 0.5 }
//           ]
//         }
//       },
//     ]
//   }
// };

// console.log(man.name);
// console.log(man.age);
// console.log(man.mother.name);
// console.log(man.mother.age);
// console.log(man.mother.work.position);
// console.log(man.mother.work.experience);
// console.log(man.mother.parents[0].name);
// console.log(man.mother.parents[0].age);
// console.log(man.mother.parents[0].favoriteDish.title);
// console.log(man.mother.parents[0].favoriteDish.ingredients);
// console.log(man.mother.parents[0].favoriteDish.ingredients[0].title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[0].amount);
// console.log(man.mother.parents[0].favoriteDish.ingredients[1].title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[1].amount);
// console.log(man.mother.parents[0].favoriteDish.ingredients[2].title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[2].amount);
// console.log(man.mother.parents[1].name);
// console.log(man.mother.parents[1].age);
// console.log(man.mother.parents[1].favoriteDish.title);
// console.log(man.mother.parents[1].favoriteDish.ingredients[0].title);
// console.log(man.mother.parents[1].favoriteDish.ingredients[0].amount);
// console.log(man.mother.parents[1].favoriteDish.ingredients[1].title);
// console.log(man.mother.parents[1].favoriteDish.ingredients[1].amount);


// ******************************************************************************************** //

//   ★ 37. Задача ★
//   Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст [{name: 'Иван', age: 23}, {name: 'Илья', age: 27}, ..., {name: 'Ольга', age: 22}]). Фукция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".



// TODO: Убрать лишние пробелы
// ! Добавить недостающие пробелы после двоеточий
// const userArray = [{ name: 'Igor', age: 22 }, { name: 'Dasha', age: 19 }, { name: 'Misha', age: 28 }, { name: 'Dmitry', age: 32 }]

// const getArray = (arr) => {
//   const newUserArray = [];
//   for (const el of arr) {
//     newUserArray.push(`Имя: ${el.name}, возрвст: ${el.age}\n`) // Добавил недостающие пробелы.
//   }
//   return newUserArray.join('') // Удалил лишний пробелы.
// }

// console.log(getArray(userArray));

// ******************************************************************************************** //

//   ★ 38. Задача ★
//   Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.

// const user = {
  // name: "Mark",
  // age: 35,
  // isAdmin: false,
  // name1: 'Vito'
// };

// const isEmpty = (object) => {

  // for (const key in object) {
  //   return key in object
  // }

  // for (const _ in object) {
  //   return true
  // }
  // return false

  // return Object.keys(object).length > 0
// }

// console.log(isEmpty(user));