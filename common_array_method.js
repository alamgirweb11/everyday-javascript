// example of map
let mapArr = [1,2,3,4,5,6,7,8];

// without using map make square of every array element
const newMapArr = []
for(let i = 0; i<mapArr.length; i++){
      newMapArr.push(mapArr[i] * mapArr[i])
}

// console.log(newMapArr)
function getSquare(item) {
    return item * item
}

const newMapArr2 = mapArr.map(getSquare)

// console.log(newMapArr2)
const newMapArr3 = mapArr.map(function(item) {
      return item * item
})

// console.log(newMapArr3)
const newMapArr4 = mapArr.map(function(item, index, fullArray){
       return (`item: ${item}, index: ${index}, fullArray: ${fullArray}`)
})

// using arrow function base on ES6
const newMapArr5 = mapArr.map(item => item * item)
// console.log(newMapArr5)

/**
 * example of filter
 * filter method work like as map but it return value based on condition
 * return true/false with new array
 */
const filterArr = [1,2,3,4,5,6,7,8,9,10];
// make only even number using filter method
const newFilterArr = filterArr.filter(function(item) {
     return item % 2 == 0
})
// console.log(newFilterArr)
// ES6 syntax
const newFilterArr2 = filterArr.filter(item => item % 2 === 0)
// console.log(newFilterArr2)

/**
 * example of reduce
 * reduce method work for calculate all element of array
 * reduce take four arguments
 * fourth argument is state variable
 */

const reduceArr = [1,3,4,5]
const sumOfReduceArr = reduceArr.reduce(function(sum, item){
     return sum += item
}, 0)

// console.log(sumOfReduceArr)
const argumentShowing = reduceArr.reduce(function(sum, item, index, fullArray){
       console.log(`Sum: ${sum}, Item: ${item}, Index: ${index}, fullArray: ${fullArray}`)
       return sum += item
}, 0)

// ES6 syntax
const reduceArr2 = reduceArr.reduce((total, item) => {
       return total += item
}, 0)

console.log(reduceArr2)