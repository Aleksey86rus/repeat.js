
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




