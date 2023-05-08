// first class function example

// function pass as argument
function getUserInfo(name, callback) {
       let age = 20;
       callback(age);
       console.log("It's Mr. "+ name);
}

function printAge(age) {
     console.log('I am passed through argument and my age is: '+ age);
}

// call getUserInfo function
getUserInfo('Abir Ahmed', printAge);

// return function from function
function greetingsToUser(name){
     console.log('Hello! '+name);
     return function greeting(sayGreetings){
           console.log(sayGreetings);
     }
}

// call greetingsToUser
greetingsToUser('Abir Ahmed')('Good Evening!');

// function as variable
const funcVar = function printOnlyName(name){
      console.log('Your name is '+ name);
}

const defineAnotherVar = funcVar();
defineAnotherVar('Abir Ahmed');