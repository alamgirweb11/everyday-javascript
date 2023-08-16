// ternary operator with examples
const age = 21
// with if else condition
if(age < 18) {
    console.log('You are not adult!')
 } else {
    console.log('You are adult') // You are adult
 }

 // same example with ternary
 console.log(age < 18 ? 'You are not Adult!' : 'You are Adult') // return You are adult

 function findAuthor(name) {
   return(name === 'Abir Ahmed' ? 'This is the author' : 'Some other person') 
}
console.log(findAuthor('Abir Ahmed')) // return this is author
console.log(findAuthor('John Doe')) // return some other person

function successFunc() {
   console.log('Got your email')
}

let email
email ? successFunc() : console.log('Please provide your email!') // return Please provide your email!
console.log(email) // return undefined

email = 'abir@gmail.com'
email ? successFunc() : console.log('Please provide your email!') // return got your email

const objTer = {
   name: 'Zonayed Ahmed',
   age: 21,
   job: 'Student'
}
objTer.name ? objTer.age ? console.log('It has name and age') : objTer.job ? console.log('yes it has a job') : console.log('no it does not have any job') : console.log('I does not have any name')
// return It has name and age