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
       console.log(`item: ${item}, index: ${index}, fullArray: ${fullArray}`)
})

// using arrow function base on ES6
const newMapArr5 = mapArr.map(item => item * item)
console.log(newMapArr5)