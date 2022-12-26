// Задачи по теме 10. Object
// Дан объект user, выполнить задачи 1 - 6:

const user = {
  name: "Peter",
  age: 33,
  job: "Developer",

  "my address": {
    city: "Moscow",
    country: "Russia",
    abroad: ["Vienna", "Paris", "London", "Miami", "LA"]
  },
  item: ["bag", "book", "pencil"],
  more: null,
  key: "Aha-ha-ha-ha"
};

// =================================================================================== //

// 1. Задача
// Вывести в консоль свойство name.
// console.log(user.name);

// =================================================================================== //

// 2. Задача
// Изменить возраст на 4 года меньше.
// user.age = user.age - 4
// user.age -= 4




// =================================================================================== //

// 3. Задача
// Вывести в консоль последний город из заграничного массива в объекте "my address".

// const abroad = user['my address'].abroad
// console.log(abroad[abroad.length - 1]);

// Пло[ое решение]
// console.log(user['my address'].abroad[user['my address'].abroad.length - 1]);


// console.log(user['my address'].abroad[abroad.length - 1]);

// =================================================================================== //

// 4. Задача
// Вывести в консоль в столбик все города из заграничного массива.

// const cityAbroad = user['my address'].abroad;
// for (const key in cityAbroad) {
//   console.log(cityAbroad[key]);
// }

// =================================================================================== //

// 5. Задача
// Удалить свойство more из объекта user
// delete user.more
// console.log(user);

// =================================================================================== //

// 6. Задача
// Переименуйте Питера на Паркера.
// user.name = 'Parker';
// console.log(user);

// =================================================================================== //

// 7. Задача
// Поменйяте место жительство("my address")

// user['my address'].city = 'Bangkok';
// user['my address'].country = 'Thailand';

// console.log(user);

// =================================================================================== //

// 8. Задача
// Вывести в консоль с помощью цикла все свойства объекта "my address".

// for (const key in user['my address']) {
//   console.log(`${key} ${user["my address"][key]}`);
// }

// =================================================================================== //

// 9. Задача
// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object.

// for (const key in user) {
//   if (typeof user[key] !== 'object' || typeof user[key] === null) {
//     console.log(`${key} ${user[key]}`);
//   }
// }

// =================================================================================== //

// 10. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//   name: "Lucas",
//   age: 29,
// };
// user.prop = 'Manager'

// console.log(user);


// =================================================================================== //

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

// delete user['delete me'];
// delete user.delete;
// delete user.deleteProp;

// console.log(user);

// =================================================================================== //

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

// console.log(car.id);
// car.power = '#fff';
// console.log(car.people.push('Roman'));
// delete car.cabin;
// car.power = 0;
// console.log(car);

// =================================================================================== //

// 13. Задача
// Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом. Если такого ключа нет, то функция возвращает undefined.

// const myObj = {
//   name: 'Alex',
//   age: 25,
//   city: 'Moscow'
// }

// function getMeaningInObject(obj, key) {
//   return `${key}: ${obj[key]}`
// }

// console.log(getMeaningInObject(myObj, 'name'));
// console.log(getMeaningInObject(myObj, 'age'));
// console.log(getMeaningInObject(myObj, 'city'));
// console.log(getMeaningInObject(myObj, 'town'));

// =================================================================================== //

// 14. Задача
// Написать функцию, которая удаляет свойство из объекта, если оно есть.

// const myObj = {
//   name: 'Alex',
//   age: 25,
//   city: 'Moscow'
// }

// function deletePropfromAnObject(obj) {
//   delete obj.name
//   return obj
// }

// console.log(deletePropfromAnObject(myObj));

// =================================================================================== //

// 15. Задача
// Дан объект person, выполнить копирование объекта:

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };
// let person2 = {};
// let person3 = {};


// 1 Способ
// for (const key in person) {
//   person2[key] = person[key]
// }
// console.log(person2);
// console.log(person === person2);


// 2 Способ
// Object.assign(person3, person);
// console.log(person3);


// 3 Способ (Объединение нескольких объектов в один объект)

// const person = {
//   city: 'Milan'
// }

// const person1 = {
//   name: "Bob",
// };
// const person2 = {
//   age: 25,
// };

// Object.assign(person, person1, person2);
// console.log(person);


// 4 Способ (Для замены цикла for..in для простого клонирования)

// const person = {
//   city: 'Milan',
//   name: "Bob",
//   age: 25
// }

// const clone = Object.assign({}, person);
// console.log(clone);
// console.log(clone === person);

// =================================================================================== //

// 16. Задача
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел.Функция возвращает объект, в котором хранится 2 параметра и результат умножения.

// let number1 = 10;
// let number2 = 20;
// let result = 0;
// function getTheProductOfTwoNumbers(num1, num2) {
//   result = num1 * num2;
//   return { num1, num2, result }
// }

// console.log(getTheProductOfTwoNumbers(number1, number2));

// =================================================================================== //

// 17. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает число - количество свойств в объекте.

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };


// function countPropertysToObject(obj) {
//   let count = 0;
//   for (const key in obj) {
//     count++
//   }
//   return count
// }

// console.log(countPropertysToObject(person));

// =================================================================================== //

// 18. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };


// function getArrayConsistingOfObjectKeys(obj) {
//   const arrayWithKeys = [];
//   for (const key in obj) {
//     arrayWithKeys.push(key)
//   }
//   return arrayWithKeys
// }

// console.log(getArrayConsistingOfObjectKeys(person));

// =================================================================================== //

// TODO19. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество объектов внутри переданного объекта. В подсчёт идут только следующие структуры данных: массивы, объекты, функции.

// const person = {
//   name: "Bob",
//   age: 25,
//   foo: function () {
//     console.log('I\'m foo!')
//   },
//   test: null,
//   friends: [100, 100, 100],
//   buyList: {
//     'milk': false,
//     'meat': true,
//     'bread': true
//   }
// };

// console.log(typeof person.friends);
// console.log(typeof person.buyList);
// console.log(typeof person.foo);

// function countObjInsideObj(quantity) {
//   let count = 0;
//   for (const key in quantity) {
//     if (
//       typeof quantity[key] === 'function' ||
//       typeof quantity[key] === 'object' &&
//       quantity[key] !== null
//     ) {
//       count++
//     }
//   }
//   return count
// }

// false || true && false



// console.log(false || true && false); // false
// console.log(true || true && false); // true

// console.log(2 + 2 * 2); // 6


// Порядок действий
// **
// * / %
// + -

// > < >= <= == === != !== typeof

// && - Логическое И - Логическим умножением
// || - Логическое ИЛИ - Логическим сложением

// console.log(3 + 5 > 6 && 3 === 3);
// console.log(8 > 6 && 3 === 3);
// console.log(true && true);







// console.log(countObjInsideObj(person));

// Свойство (ключ || значение)
// Поле

// Ключ: Значение
//


// Почему подсчет ведется только при использовании логического или. При логическом И подсчета не производится.

// =================================================================================== //

// 20. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.


// const person = {
//   name: "Bob",
//   age: 25,
//   friends: [100, 100, 100],
//   countries: ['England', 'Australia', 'Russia'],
//   car: ['uaz', 'volvo', 'ferrari', 'vaz', 'opel',],
// };

// function getQuntityArrayInObject(obj) {
//   let counrArray = 0;
//   for (const key in obj) {
//     if (Array.isArray(obj[key])) {
//       counrArray++
//     }
//     // if (typeof obj[key] === 'object') {
//     //   counrArray++
//     // }
//   }
//   return counrArray
// }

// console.log(getQuntityArrayInObject(person));

// =================================================================================== //

// 21. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из значений переданного объекта.

// const countries = {
//   England: 'London',
//   Australia: 'Sindey',
//   'More countries': ['Moscow', 'Washington', 'Barselona', 'Rome'],
//   car: ['uaz', 'volvo', 'ferrari', 'vaz', 'opel',],
// }


// function getArray(obj) {
//   const arrayWithValues = [];
//   for (const key in obj) {
//     arrayWithValues.push(obj[key]);
//   }
//   return arrayWithValues
// }

// console.log(getArray(countries));

// =================================================================================== //

// 22. Задача
// Написать функцию, на вход которой подаётся массив. Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4 'false', 7, 8, 'link', 1, false, 0, -3 'button', undefined, { name: 'Pavel' }];

// После вызова функции вернётся объект:
// const result = {
//   string: 4,
//   number: 9,
//   null: 2,
//   undefined: 1,
//   boolean: 2,
//   object: 2
// };


// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];


// function getObjWithDataKeys(obj) {
//   const result = {};
//   let countStr = 0;
//   let countNumb = 0;
//   let countNull = 0;
//   let countUndefined = 0;
//   let countBoolean = 0;
//   let countObject = 0;
//   for (const el of obj) {
//     if (typeof el === 'string') {
//       countStr++;
//     } if (typeof el === 'number') {
//       countNumb++;
//     } if (el === null) {
//       countNull++;
//     } if (typeof el === 'undefined') {
//       countUndefined++;
//     } if (typeof el === 'boolean') {
//       countBoolean++;
//     } if (typeof el === 'object' && el !== null) {
//       countObject++;
//     }
//   }
//   return (`String: ${countStr},
//   Number: ${countNumb},
//   null: ${countNull},
//   undefined: ${countUndefined},
//   boolean: ${countBoolean},
//   object: ${countObject}`);
// }

// console.log(getObjWithDataKeys(testArray));

// =================================================================================== //

// 23. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // false

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // true
// =================================================================================== //

// 24. Задача
// Написать функци, на вход которой подаётся объект. Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

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

// function getObjectWithKeysDataTypes(obj) {
//   let countStr = 0;
//   let countNumb = 0;
//   let countNull = 0;
//   let countUndefined = 0;
//   let countBoolean = 0;
//   let countObject = 0;

//   for (const key in obj) {
//     if (typeof obj[key] === 'string') {
//       countStr++
//     } if (typeof obj[key] === 'number') {
//       countNumb++;
//     } if (obj[key] === null) {
//       countNull++;
//     } if (typeof obj[key] === 'undefined') {
//       countUndefined++;
//     } if (typeof obj[key] === 'boolean') {
//       countBoolean++;
//     } if (typeof obj[key] === 'object' && obj[key] !== null) {
//       countObject++;
//     }
//   }
//   return (`String: ${countStr},
//   Number: ${countNumb},
//   null: ${countNull},
//   undefined: ${countUndefined},
//   boolean: ${countBoolean},
//   object: ${countObject}`);
// }
// console.log(getObjectWithKeysDataTypes(person));

// =================================================================================== //

// TODO 25. Задача
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
//   if (bob[key] === null || typeof bob[key] === 'undefined') {
//     delete bob[key];
//   }
// }
// console.log(bob);

// Вопрос применения логического И и ИЛИ

// =================================================================================== //

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

// console.log(copyUser.name); // Lawlet
// console.log(user.name); // Lawlet
// =================================================================================== //

// 27. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user = {
//   name: "Roger",
//   job: "Workman",
//   age: 33,
// };

// console.log(rename(user, "Ben")); // Ben

// function rename(obj, newName) {
//   obj.name = newName;
//   return obj;
// }
// =================================================================================== //

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
//   level: 1
// }

// player.friendList = [];
// player['likes fly'] = false;

// let propText = 'isBetaTester';
// player[propText] = true;

// player.friendList.push('Alph', 'Rich')

// for (const key in player) {
//   console.log(`${key}: ${player[key]}`);
// }

// =================================================================================== //

//   29. Задача
//   Написать функцию, на вход которой подаётся объект. Функция возвращает новый объект, состоящий только из текстовых свойств переданного объекта.

// const user = {
//   name: "Roger",
//   job: "Workman",
//   age: 33,
// };


// function newObject(obj) {
//   const myObj = {};
//   for (const key in obj) {
//     if (typeof obj[key] === 'string') {
//       myObj[key] = obj[key]
//     }
//   }
//   return myObj
// }

// console.log(newObject(user));


// =================================================================================== //

//   30. Задача
//   Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
//   ! Не нужно использоваться циклы, просто в лоб console.log(); Объект автомобиль:

//   Серийный номер;
//   Марка машины;
//   Год выпуска;
//   Завод (адрес у завода, название);
//   Владелец (имя, фамилия, дата рождения, пол);
//   Вывести каждое значение всех свойств по отдельности через console.log().

// const modelCar = {
//   'Serial Number': 25469854125,
//   'Car brand': 'Audi',
//   'Year of release': 2022,
//   fartory: ['Volkswagen Group', 'Ingolstadt'],
//   owner: ['Leon', 'Ivanov', 1965, 'male'],
// }

// console.log(modelCar);
// console.log(modelCar['Serial Number']);
// console.log(modelCar['Car brand']);
// console.log(modelCar['Year of release']);
// console.log(modelCar.fartory);
// console.log(modelCar.owner);

// =================================================================================== //

//   31. Задача
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
//   name: 'Elysian',
//   food: ['Prosciutto di Parma', 'Focaccia', 'Fiorentna'],
//   'household goods': ['Watering hose', 'Swing', 'Barbecue'],
//   cosmetic: ['Cartier', 'Hermes', 'Chanel'],
//   'food court': true,
//   parking: true,
//   'number of floors': 12,
//   partners: { 'Traiding house': 'Elysian', 'Perfume boutique': 'Paris', embassy: 'Russia in Paris' }
// }


// console.log(Object.keys(shop));

// console.log(shop.name);
// console.log(shop.food);
// console.log(shop['household goods']);
// console.log(shop.cosmetic);
// console.log(shop['food court']);
// console.log(shop.parking);
// console.log(shop['number of floors']);
// console.log(shop.partners);

// =================================================================================== //

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

// const myShop = {
//   name: 'Aleksey',
//   'id student': 5552245,
//   age: 42,
//   isActive: true,
//   address: { street: 'friendship of peoples', city: { 'Nighnevartovsk': 'Russia' } }, technologies: [{ id: 6598874 }, { 'name of the technology': 'JavaScript' }]
// }

// console.log(myShop);
// console.log(myShop.name);
// console.log(myShop['id student']);
// console.log(myShop.age);
// console.log(myShop.isActive);
// console.log(myShop.address);
// console.log(myShop.id);
// =================================================================================== //

//   33. Задача
//   Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль.



// =================================================================================== //

//   34. Задача
//   Написать функцию, которая проверяет, является ли переданный параметр примитивом.

// function isPrimitive(check) {
//   // return (typeof check === 'object' && check === null) && typeof check !== 'function'
//   return typeof check !== 'object' && typeof check !== 'function' || check === null
// }

// console.log(isPrimitive('summer'));
// console.log(isPrimitive(123));
// console.log(isPrimitive(true));
// console.log(isPrimitive(undefined));
// console.log(isPrimitive(null));
// console.log(isPrimitive([]));
// console.log(isPrimitive({}));
// console.log(isPrimitive(() => { }));
// console.log(isPrimitive(function () { }));



// 0. Написать функцию, которая пропускает только примитив null
// 1. Написать функцию, которая пропускает только примитив number или string
// 2. Написать функцию, которая пропускает только все примитивы кроме boolean
// 3. Написать функцию, которая пропускает только все примитивы кроме null
// 4. Написать функцию, которая пропускает только все примитивы кроме boolean и null
// 5. Написать функцию, которая пропускает только все ссылочные типы данных, кроме function
// 6. Написать функцию, которая пропускает только все ссылочные типы данных, кроме структура данных array
// 7. Написать функцию, которая пропускает только примитив null или undefined
// 8. Написать функцию, которая пропускает только все ссылочные типы данных
// 9. Написать функцию, которая пропускает только все ссылочные типы данных, кроме объекта (массивы, функции и т.д. пропускает)



// 0. Написать функцию, которая пропускает только примитив null

// function getNull(params) {
//   return params === null
// }

// console.log(getNull('summer'));
// console.log(getNull(123));
// console.log(getNull(true));
// console.log(getNull(undefined));
// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 1. Написать функцию, которая пропускает только примитив number или string

// function getNull(params) {
//   return typeof params === 'string' || typeof params === 'number'
// }

// console.log(getNull('summer'));
// console.log(getNull(123));
// console.log(getNull(true));
// console.log(getNull(undefined));
// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 2. Написать функцию, которая пропускает только все примитивы кроме boolean

// function getNull(params) {
//   return typeof params === 'string' || typeof params === 'number' || typeof params === 'undefined' || params === null && typeof params !== 'boolean'
// }

// console.log(getNull('summer'));
// console.log(getNull(123));
// console.log(getNull(true));
// console.log(getNull(undefined));
// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));


// 3. Написать функцию, которая пропускает только все примитивы кроме null

// function getNull(params) {
//   return typeof params === 'string' || typeof params === 'number' || typeof params === 'undefined' || typeof params === 'boolean' && params !== null && typeof params !== 'object' && typeof params !== 'function'
// }

// console.log(getNull('summer'));
// console.log(getNull(123));
// console.log(getNull(true));
// console.log(getNull(undefined));
// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 4. Написать функцию, которая пропускает только все примитивы кроме boolean и null

// function getNull(params) {
//   return typeof params === 'string' || typeof params === 'number' || typeof params === 'undefined' || typeof params !== 'boolean' && params !== null && typeof params !== 'object' && typeof params !== 'function'
// }

// console.log(getNull('summer'));
// console.log(getNull(123));
// console.log(getNull(true));
// console.log(getNull(undefined));
// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 5. Написать функцию, которая пропускает только все ссылочные типы данных, кроме function

// function getNull(params) {
//   return typeof params === 'object' && typeof params !== 'function'
// }

// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 6. Написать функцию, которая пропускает только все ссылочные типы данных, кроме структура данных array

// function getNull(params) {
//   return !Array.isArray(params)
// }

// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));


// 7. Написать функцию, которая пропускает только примитив null или undefined

// function getNull(params) {
//   return typeof params === 'undefined' || params === null
// }

// console.log(getNull('summer'));
// console.log(getNull(123));
// console.log(getNull(true));
// console.log(getNull(undefined));
// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 8. Написать функцию, которая пропускает только все ссылочные типы данных

// function getNull(params) {
//   return params !== null && typeof params === 'object' || typeof params === 'function'
// }

// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));

// 9. Написать функцию, которая пропускает только все ссылочные типы данных, кроме объекта (массивы, функции и т.д. пропускает)

// function getNull(params) {
//   return Array.isArray(params) || typeof params === 'function' || params === null
// }

// console.log(getNull(null));
// console.log(getNull([]));
// console.log(getNull({}));
// console.log(getNull(() => { }));
// console.log(getNull(function () { }));




// function get(params) {
  // console.log(typeof params !== 'string' || typeof params !== 'number');
  // console.log(typeof params !== 'string' && typeof params !== 'number');
  // return typeof params !== 'string' && typeof params !== 'number'
  // return Array.isArray(params)
// }
// console.log(get('str'));
// console.log(get(123));
// console.log(get(true));
// console.log(get(undefined));

// console.log(get([]));



// function name() {
// }

// const name = function () {}
// const name2 = () => {}
// const test = 10

// string, number, boolean, undefined, null
// object
//



// =================================================================================== //

//   35. Задача
//   Выполнить рефакторинг кода.

// function changeTaskStatusAC(todolistId, taskId, newIsDone) {
//   const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS';
//   return {
//     type: CHANGE_TASK_STATUS,
//     todolistId: todolistId,
//     taskId: taskId,
//     isDone: newIsDone
//   };
// }

// function changeTaskStatusAC(todolistId, taskId, isDone) {
//   return {
//     type: 'CHANGE-TASK-STATUS',
//     todolistId,
//     taskId,
//     isDone
//   };
// }
// console.log(changeTaskStatusAC('text', 20, true));
// =================================================================================== //

//   ★ Задачи повышенной сложности ★
//   ★ 36. Задача ★
//   Вывести каждое значение всех свойств и подствойст по отдельности через console.log()

//   const man = {
//     name: 'John',
//   age: 28,
//   mother: {
//     name: "Kate",
//   age: 50,
//   work: {
//     position: "doctor",
//   experience: 15
//         },
//   parents: [
//   {
//     name: "Kevin",
//   age: 80,
//   favoriteDish: {
//     title: "borscht",
//   ingredients: [
//   {title: "beet", amount: 3 },
//   {title: "potatoes", amount: 5 },
//   {title: "carrot", amount: 1 },
//   ]
//                 }
//             },
//   {
//     name: "Jennifer",
//   age: 78,
//   favoriteDish: {
//     title: "sushi",
//   ingredients: [
//   {title: "fish", amount: 1 },
//   {title: "rise", amount: 0.5 }
//   ]
//                 }
//             },
//   ]
//     }
// };
// =================================================================================== //

//   ★ 37. Задача ★
//   Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст [{name: 'Иван', age: 23}, {name: 'Илья', age: 27}, ..., {name: 'Ольга', age: 22}]). Фукция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".
// =================================================================================== //

//   ★ 38. Задача ★
//   Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.