// console.aula('This is an error') // return console.aula is not a function
// try {
//     console.aula('This is an error') // return console.aula is not a function
//  }
 
//  try {
//     console.aula('This is an error') // return console.aula is not a function
//  } catch(err) {
//     console.log('Do anything here')
//     console.log(err)
//  }

 const age = 17;
try {
   if(age < 18) {
      throw 'You are too young';
   } else {
      console.log('You are adult');
   }
} catch(err) {
   console.log(err);
}

try {
   throw 'An error'
} catch(err) {
   console.log(err);
} finally {
   console.log('I will run always');
}

try {
   console.log('No error');
} catch(err) {
   console.log(err);
} finally {
   console.log('I will run always');
}

// error object
const anError = new Error('This is a error object')
console.log(anError) // return Error: This is a error object at ....
const ageNew = 17;
try {
   if(ageNew < 18) {
      throw new Error('You are too young');
   } else {
      console.log('You are adult');
   }
} catch(err) {
   console.log(err);
}

// output: You are too young at ...