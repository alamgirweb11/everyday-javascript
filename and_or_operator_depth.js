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