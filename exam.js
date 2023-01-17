
const testList = [1, 4, 3]

// break - не работает в forEach

testList.forEach
testList.find

// 1+



testList.filter((value) => {
  return value < 100
})

testList.find((value) => {
  return value < 100
})

// 2+

const res = testList.reduce((prV) => {
  return prV + 1
}, 0)

//
console.log(res); // 5



// 2 итерация -> val
const res33 = testList.reduce((acc, el, i) => {
  return acc + el + i
}, 100)

console.log(res33); // 111

// 1 + 0 + 100 = 101
// 101 + 4 + 1 = 106


rray = [10, 5, 8, 7];
const countOddeNumbers = array.reduce((prV, v) => {
  // return v % 2 !== 0 ? prV + v : prV

  // if (v % 2 !== 0) {
  //   return prV + v
  // } else {
  //   return prV
  // }
}, 0)

// prV = 0; v = 10
// return prV

// prV = 0
// v = 5
//return prV + v = 5


// prV = 5
// v = 8
// return prV = 5



// prV = 0; v = 10





const countNegativeNumbers = array.reduce((prV, v) => {
  return prV + v % 2 !== 0
})

// 1 iter
// prV = 0
// v = 3
// prV + v % 2 !== 0
//return true

// 2 iter
// prV = true


// Написать 







































