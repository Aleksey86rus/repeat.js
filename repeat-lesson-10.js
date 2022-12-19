// Задачи по теме 10. Object
// Дан объект user, выполнить задачи 1 - 6:

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
//   key: "Aha-ha-ha-ha";
// };

// =================================================================================== //

// 1. Задача
// Вывести в консоль свойство name.
// =================================================================================== //

// 2. Задача
// Изменить возраст на 4 года меньше.
// =================================================================================== //

// 3. Задача
// Вывести в консоль последний город из заграничного массива в объекте "my address".
// =================================================================================== //

// 4. Задача
// Вывести в консоль в столбик все города из заграничного массива.
// =================================================================================== //

// 5. Задача
// Удалить свойство more из объекта user
// =================================================================================== //

// 6. Задача
// Переименуйте Питера на Паркера.
// =================================================================================== //

// 7. Задача
// Поменйяте место жительство("my address")
// =================================================================================== //

// 8. Задача
// Вывести в консоль с помощью цикла все свойства объекта "my address".
// =================================================================================== //

// 9. Задача
// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object.
// =================================================================================== //

// 10. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//   name: "Lucas",
//   age: 29,
// };
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
//   id: 88005553535
//     power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }
// =================================================================================== //

// 13. Задача
// Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом.Если такого ключа нет, то функция возвращает undefined.
// =================================================================================== //

// 14. Задача
// Написать функция, которая удаляет свойство из объекта, если оно есть.
// =================================================================================== //

// 15. Задача
// Дан объект person, выполнить копирование объекта:

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };
// =================================================================================== //

// 16. Задача
// Написать функцию, на вход которой подаётся 2 параметра.Функция вычисляет произведение двух чисел.Функция возвращает объект, в котором хранится 2 параметра и результат умножения.
// =================================================================================== //

// 17. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает число - количество свйоств в объекте.
// =================================================================================== //

// 18. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает массив, состоящий из ключей переданного объекта
// =================================================================================== //

// 19. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает количество объектов внутри переданного объекта.В подсчёт идут только следующие структуры данных: массивы, объекты, функции
// =================================================================================== //

// 20. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает количество массивов внутри переданного объекта.
// =================================================================================== //

// 21. Задача
// Написать функцию, на вход которой подаётся объект.Функция возвращает массив, состоящий из значений переданного объекта.
// =================================================================================== //

// 22. Задача
// Написать функци, на вход которой подаётся массив.Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// // Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4 'false', 7, 8, 'link', 1, false, 0, -3 'button', undefined, { name: 'Pavel' }];

// // После вызова функции вернётся объект:
// const result = {
//   string: 4,
//   number: 9,
//   null: 2,
//   undefined: 1,
//   boolean: 2,
//   object: 2
// };
// =================================================================================== //

// 23. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ?

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ?
// =================================================================================== //

// 24. Задача
// Написать функци, на вход которой подаётся объект.Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

// Например в объекте person;
// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
//     test: undefined,
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
// =================================================================================== //

// 25. Задача
// Дан объект bob, удалить у него все свойства со знаечниями undefined и null, пользуясь циклом.

// const bob = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
//     test: undefined,
//   nuller: null,
//   isHuman: true,
//   item: ['bag', 'pen']
// };
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

// console.log(copyUser.name); // ?
// console.log(user.name); // ?
// =================================================================================== //

// 27. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user = {
//   name: "Roger",
//   job: "Workman",
//   age: 33,
// };

// console.log(rename(user, "Ben")); // ?

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
// =================================================================================== //

//   29. Задача
//   Написать функцию, на вход которой подаётся объект. Функция возвращает новый объект, состоящий только из текстовых свойств переданного объекта.

//   30. Задача
//   Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
//   ! Не нужно использоваться циклы, просто в лоб console.log(); Объект автомобиль:

//   Серийный номер;
//   Марка машины;
//   Год выпуска;
//   Завод (адрес у завода, название);
//   Владелец (имя, фамилия, дата рождения, пол);
//   Вывести каждое значение всех свойств по отдельности через console.log().
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
// =================================================================================== //

//   33. Задача
//   Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль.
// =================================================================================== //

//   34. Задача
//   Написать функцию, которая проверяет, является ли переданный параметр примитивом.
// =================================================================================== //

//   35. Задача
//   Выполнить рефакторинг кода.

//   function changeTaskStatusAC(todolistId, taskId, newIsDone) {
//     const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS';
//   return {
//     type: CHANGE_TASK_STATUS,
//   todolistId: todolistId,
//   taskId: taskId,
//   isDone: newIsDone
//     };
// }
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