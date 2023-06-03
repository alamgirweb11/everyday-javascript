// dot notation basic example
const person = {
    name: 'Abir Ahmed',
    age: 21,
    job: 'Student'
 }

console.log(person.name)

// bracket notation
const personName = 'name'

console.log(person.personName) // return undefined
console.log(person[personName]) // Abir Ahmed