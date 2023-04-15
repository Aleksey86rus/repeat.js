
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
//   'IV': 4,
//   'V': 5,
//   'VI': 6,
//   'VII': 7,
//   'VIII': 8,
//   'IX': 9,
//   'X': 10,
// }

// let count = 0;
// for (const key in roman) {
//   // debugger
//   if (typeof key === 'string') {
//     count = key +
//   }
//   // console.log(key);
// }
// console.log(count);
// ******************************************************************* //


const calculator = (str) => {
  let newStr = '';
  for (const el of str) {
    if (el !== ' ') {
      newStr += el;
    }
  }




  const checkIsNumber = (num1, num2) => !isNaN(num1) && !isNaN(num2)
  const checkIsNaN = (num1, num2) => isNaN(num1) || isNaN(num2)

  const roman = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'VI': 6,
    'VII': 7,
    'VIII': 8,
    'IX': 9,
    'X': 10,
  }
  const checkRomanNumber = (num1, num2) => {
    const romanList = Object.keys(roman)
    return romanList.includes(num1) && romanList.includes(num2)
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
  const mathSymbol = newStr[indexSymbol]


  let numBefore = newStr.slice(0, indexSymbol);
  let numAfter = newStr.slice(indexSymbol + 1);

  console.log(numBefore, numAfter);

  if (checkRomanNumber(numBefore, numAfter)) {
    for (const key in roman) {
      if (key === numBefore) {
        numBefore = roman[key];
      }
      if (key === numAfter) {
        numAfter = roman[key];
      }
    }
  } else {
    numBefore = +numBefore
    numAfter = +numAfter
  }

  console.log(numBefore, numAfter);


  // const numRomanBefore = newStr.slice(0, indexSymbol)
  // const numRomanAfter = newStr.slice(indexSymbol + 1)

  // console.log(numRomanBefore);
  // console.log(numRomanAfter);




  if (numBefore >= 1 && numBefore <= 10 && numAfter >= 1 && numAfter <= 10) {
    if (mathSymbol === '*') {
      return numBefore * numAfter
    }
    if (mathSymbol === '/') {
      return Math.round(numBefore / numAfter)
    }
    if (mathSymbol === '+') {
      return numBefore + numAfter
    }
    if (mathSymbol === '-') {
      return numBefore - numAfter
    }
  } else {
    throw new Error()
  }


  // let numRoBefore;
  // let numRoAfter;
  // for (const key in roman) {
  //   if (key === numRomanBefore) {
  //     numRoBefore = roman[key];
  //   }
  //   if (key === numRomanAfter) {
  //     numRoAfter = roman[key];
  //   }
  // }

  // if (numRoBefore >= 1 && numRoBefore <= 10 && numRoAfter >= 1 && numRoAfter <= 10) {
  //   if (checkIsNaN(numRomanBefore, numRomanAfter)) {
  //     if (mathSymbol === '*') {
  //       return numRoBefore * numRoAfter
  //     }
  //     if (mathSymbol === '/') {
  //       return Math.round(numRoBefore / numRoAfter)
  //     }
  //     if (mathSymbol === '+') {
  //       return numRoBefore + numRoAfter
  //     }
  //     if (mathSymbol === '-') {
  //       return numRoBefore - numRoAfter
  //     } else if (checkIsNaN(numRomanBefore, numRomanAfter)) {
  //       throw new Error('Введено число')
  //     } else {
  //       throw new Error('Превышен диапазон допустимого числаaaa')
  //     }
  //   }
  // }

}


// arabic
console.log(calculator('10 * 10'));
// console.log(calculator('VII + V'));
// console.log(calculator('1 - 5'));
// console.log(calculator('9 * 4'));
// console.log(calculator('10 / 8'));


// roman
// console.log(calculator('VII * X'));



  // const numRomanBefore = newStr.slice(0, indexSymbol)
  // // console.log(numRomanBefore);
  // const numRomanAfter = newStr.slice(indexSymbol + 1)
  // // console.log(numRomanAfter);

  // // let resRomanNumbers = {
  // //   numRomanBefore,
  // //   numRomanAfter,
  // //   mathSymbol
  // // }
  // // console.log(resRomanNumbers);


  // let numRoman1;
  // let numRoman2;
  // for (const key in roman) {
  //   if (key === numRomanBefore) {
  //     numRoman1 = roman[key];
  //     // console.log(numRoman1);
  //   }
  //   if (key === numRomanAfter) {
  //     numRoman2 = roman[key];
  //     // console.log(numRoman2);
  //   }
  // }


// roman
// console.log(calculator('V + V'));








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


