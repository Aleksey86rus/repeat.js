мутирует массив? -> forEach



forEach -> return void

map -> return array (той же длины, все значения пройдут, но с модификацией)
filter -> return array (той же длины или меньшей длины, не изменяет сами 
значение)

find -> value (ожно из значений, которое есть в массиве)
findIndex -> number (index)

some -> true/false
every -> true/false

reduce -> value (расчитанное из всего массива) -> считает сумму, считает количество

sort -> array (сортированный)




// function sortNumberArray(a, b) {
//   if (a > b) {
//     return -1
//   } if (a < b) {
//     return 1
//   } if (a == b) {
//     return 0
//   }
// }

let result = copyArray.sort((a, b) => a - b);