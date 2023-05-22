/**
 * some method
 * it return true/false value
 */

const anArrSome = ['hello', 1, 2, 3, 'Bangla', 5, 'world', 7, 8, 9]
const result = anArrSome.some(function(anElement) {
    return anElement === 9
 })

//  console.log(result)

// some method accepted argument example
const arr = [1,2,3,4,5,6,7,8]
const acceptedArgs = arr.some((currentValue, index, mainArray) => {
       console.log(currentValue)
       console.log(index)
       console.log(mainArray)
})

console.log(acceptedArgs)

// some method stop working after given condition true
arr.some(elem => {
        console.log(`found the result - ${elem}`)
        return elem === 8
})

// some method in object
const objSome = [
    {
       name: 'Rafi',
       age: 1,
       job: 'Child'
    },
    {
       name: 'Rafa Ahmed',
       age: 31,
       job: 'Pharmacists'
    },
    {
       name: 'Abir Ahmed',
       age: 21,
       job: 'Student'
    },
    {
       name: 'Rakib Ahmed',
       age: 21,
       job: 'Student'
    }
 ]

 const students = objSome.some(obj => {
         return obj.age === 21 && obj.job === 'Student'
         // return true
 })

//  console.log(students)

/**
 * every method
 * it return true/false if condition is true for array every single element
 */

const evArray = [12,12,12,12,12]
const applyEvery1 = evArray.every(function(item){
        return item === 12
})

console.log(applyEvery1) // return true

const evArray2 = [12,12,12,12,12,13,13]
const applyEvery2 = evArray2.every(function(item){
        return item === 12
})

console.log(applyEvery2) // return false

// every method accepted argument example
evArray2.every((currentElement, index, theArray) => {
   console.log(`Current Element: ${currentElement}`)
   console.log(`Index: ${index}`)
   console.log(`The Array: ${theArray}`)
   return true
})

const evNumArr = [1, 1, 1, 3, 4, 5, 6, 7, 8, 9]
evNumArr.every(element => {
   console.log(`${element} is printed`);
   return element === 1;
})

// apply it an object
const isNameAvailable = objSome.every(anObj => anObj.name)
const isPhoneAvailable = objSome.every(anObj => anObj.phone)

console.log(isNameAvailable, isPhoneAvailable)