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