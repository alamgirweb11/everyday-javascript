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

  // send data to resolve or reject
  const aPromiseWithData = control => { 
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(control) {
            resolve('Simple Success Data')
         } else {
            reject('Simple Error Data')
         }
      }, 3000)
   })
}

// output of resolve
aPromiseWithData(true)
  .then((data) => {
     console.log(data) // simple success data
  })

// output of reject
aPromiseWithData(false)
.then((data) => {
   console.log(data);
})
.catch((err) => {
   console.log(err); // simple error data
})