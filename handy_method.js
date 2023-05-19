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

 console.log(students)