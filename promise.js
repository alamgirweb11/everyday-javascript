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

// multiple promise handling
const promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      if(true) {
         resolve('Promise 1 Resolved')
      } else {
         reject('Promise 1 Error')
      }
   }, 5000)
 })

 const promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      if(true) {
         resolve('Promise 2 Resolved')
      } else {
         reject('Promise 2 Error')
      }
   }, 5000)
})

Promise.all([promise1, promise2])

Promise.all([promise1, promise2]).then((dataArr) => {
   console.log(dataArr) // ["Promise 1 Resolved", "Promise 2 Resolved"]
})