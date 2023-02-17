
// **************************************************
// const operators = {
//   multipl: '*',
//   division: '/',
//   addition: '+',
//   subtraction: '-'
// }

// const roman = {
//   'I': 1,
//   'II': 2,
//   'III': 3,
//   'VI': 4,
//   'V': 5,
//   'VI': 6,
//   'VII': 7,
//   'VIII': 8,
//   'IX': 9,
//   'X': 10,
// }

// const calculator = (str, mathOperators, fnMultipl) => {
//   let newStr = '';
//   for (const el of str) {
//     if (el !== ' ') {
//       newStr += el
//     }
//   }
//   let indexMultipl = newStr.indexOf(mathOperators);
//   let numArab1 = newStr.slice(0, indexMultipl);
//   let numArab2 = newStr.slice(indexMultipl + 1);
//   let numRoman1 = newStr.slice(0, indexMultipl);
//   let numRoman2 = newStr.slice(indexMultipl + 1);

//   for (const key in roman) {
//     if (numRoman1 === key) {
//       numRoman1 = roman[key];
//     }
//     if (numRoman2 === key) {
//       numRoman2 = roman[key];
//     }
//     if (numRoman1 >= 1 && numRoman1 <= 10
//       && numRoman2 >= 1 && numRoman2 <= 10) {
//       return fnMultipl(+numRoman1, +numRoman2)
//     }
//   }


//   //? if (isNaN(numRoman1) || isNaN(numRoman2)) {
//   //   console.log(isNaN(numRoman1));
//   //   throw new Error('Введеный символ не является числом!')
//   // }


//   if (numArab1 >= 1 && numArab1 <= 10
//     && numArab2 >= 1 && numArab2 <= 10) {
//     return fnMultipl(+numArab1, +numArab2)
//   } else {
//     throw new Error('Неверно указан диапазон чисел!')
//   }
// }

// const multipl = (el1, el2) => {
//   return el1 * el2;
// }

// const division = (el1, el2) => {
//   return Math.round(el1 / el2);
// }

// const addition = (el1, el2) => {
//   return el1 + el2;
// }

// const subtraction = (el1, el2) => {
//   return el1 - el2;
// }


// console.log(calculator('2 * 2', operators.multipl, multipl));
// console.log(calculator('II * III', operators.multipl, multipl));
// // console.log(calculator('VII * 3', operators.multipl, multipl));
// // console.log(calculator('3 * II', operators.multipl, multipl));
// // console.log(calculator('X / 2', operators.division, division));
// console.log(calculator('8 + 9', operators.addition, addition));
// console.log(calculator('7 - 9', operators.subtraction, subtraction));

// ******************************************************************* //


const calculator = (str) => {
  let newStr = '';
  for (const el of str) {
    if (el !== ' ') {
      newStr += el;
    }
  }


  let indexSymbol;

  if (newStr.includes('+')) {
    indexSymbol = newStr.indexOf('+');
  } else if (newStr.includes('-')) {
    indexSymbol = newStr.indexOf('-');
  } else if (newStr.includes('*')) {
    indexSymbol = newStr.indexOf('*');
  } else if (newStr.includes('/')) {
    indexSymbol = newStr.indexOf('/');
  }
  const SIGN = newStr[indexSymbol]

  console.log(indexSymbol, SIGN);


  // console.log(indexSymbol);
  const numBefore = +newStr.slice(0, indexSymbol);
  // console.log(+numBefore);
  const numAfter = +newStr.slice(indexSymbol + 1);
  // console.log(+numAfter);

  let res = {
    numBefore,
    numAfter,
    SIGN
  }
  // console.log(res);

  // const checkRange = (num1, num2) =>
  //   num1 >= 1 && num1 <= 10 &&
  //   num2 >= 1 && num2 <= 10

  //   const isArabicOrRoman = (num1, num2) => {
  //       if(!isNaN(num1) && !isNaN(num2)) {
  // return 
  //   }
  //   }


  // return !isNaN(num1)

  // console.log(isArabicOrRoman(numBefore, numAfter));
  // isArabicOrRoman(numBefore, numAfter)


  // const addition = (num1, num2) => {
  //   if (checkRange(numBefore, numBefore)) {
  //     return +num1 + +num2
  //   } else {
  //     throw new Error
  //   }
  // }
  // console.log(addition(numBefore, numAfter));

}

calculator('10 + 3')
// calculator('4 * 5');
// calculator('9 - 4');
// calculator('10 / 5');


// console.log(calculator('7 + 3'));
// console.log(calculator('4 * 5'));
// console.log(calculator('9 - 4'));
// console.log(calculator('10 / 5'));


// *******************************************************
// !Преобразование массива в объект
// *1
// const array = ['foo', 'boo', 'zoo']
// // debugger
// const obj = array.reduce((acc, v, i, arr) => {
//   acc[i] = v;
//   return acc;
// }, {})
// console.log(obj);

// *1.5
// const names = ['Иван', 'Олег', 'Петр', 'Глеб'];
// const obj = names.reduce((object, value, index) => {
// return { ...object, [index]: value };
// }, {});


// *2
// const array = ['foo', 'boo', 'zoo'];
// const obj = Object.assign({}, array);
// console.log(obj)

// *3
// const arr = ["foo", "boo", "zoo"];
// const obj = { ...arr };
// console.log(obj);
// *******************************************************





// ============== *********************** ===================== //

// addition => Сложение
// subtraction => Вычитание
// multiplication => Умножение
// division=> Деление



// const sym2num = {
//   'M': 1000,
//   'D': 500,
//   'C': 100,
//   'L': 50,
//   'X': 10,
//   'V': 5,
//   'I': 1
// };

// function charToInt(romanNumb) {
//   switch (romanNumb) {
//     case 'I': return 1;
//     case 'II': return 2;
//     case 'III': return 3;
//     case 'IV': return 4;
//     case 'V': return 5;
//     case 'VI': return 6;
//     case 'VII': return 7;
//     case 'VIII': return 8;
//     case 'IX': return 9;
//     case 'X': return 10;
//     default: return -1;
//   }
// }
// console.log(charToInt('I'));
// console.log(charToInt('II'));
// console.log(charToInt('III'));
// console.log(charToInt('IV'));
// console.log(charToInt('V'));
// console.log(charToInt('VI'));
// console.log(charToInt('VII'));
// console.log(charToInt('VIII'));
// console.log(charToInt('IX'));
// console.log(charToInt('X'));


