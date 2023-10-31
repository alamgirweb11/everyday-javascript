// promise basic example
const aPromise = control => { 
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          if(control) {
             resolve();
          } else {
             reject();
          }
       }, 3000)
    })
 }

 aPromise(true)
  .then(() => {
     console.log('This is a Success') // output: This is a Success
  })

  aPromise(false)
  .then(() => {
     console.log('This is a Success')
  })
  .catch(() => {
     console.log('This is a Failure') // output: This is a Failure
  })