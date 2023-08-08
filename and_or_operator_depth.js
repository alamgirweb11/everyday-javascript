// basic if condition
if(true) {
    console.log('Print it!');
 }
 
if(false) {
    console.log('Print it!');
 }
 
 if('anything') {
    console.log('Print it!');  // return true
 }

/**
 * condition return false if use
 * false 
 * null
 * NaN
 * 0
 * "" , '', `` 
 * undefined
 * !anythingTrue
 */

console.log(true || false) // return true
console.log(false || true) // return true
console.log(false || false) // return false
console.log(true || true) // return true
console.log('Go to Class' || 'Go to Visit') // go to class
console.log(undefined || 'Go to Visit') // go to visit

const empty = ''
const something = 'Eat'
const work = empty || something
console.log(work) // return eat

const aa = ''
let bb //cause const don't allow empty variable initialization
const cc = 'Hello'
const dd = 'A Lot'
console.log(aa || bb || cc || dd) // return hello

const userOr = {
   name: 'Abir Ahmed'
}
const userOrName = userOr.name
const userOrAgeTry = userOr.age
let userOrAgeTry2
if(userOr.age) {
   userOrAgeTry2 = userOr.age
} else {
   userOrAgeTry2 = 'User Age Not Found'
}
// shorthand
//if(userOr.age) userOrAgeTry2 = userOr.age
//else userOrAgeTry2 = 'User Age Not Found'
// single line
// const userOrAge = userOr.age || 'Age Not Found'
console.log(userOrAgeTry2) // return User Age Not Found

const aFunc = () => {
   console.log('Print Me!')
}

console.log(true || aFunc()) // return true
console.log(false || aFunc()) // return print me