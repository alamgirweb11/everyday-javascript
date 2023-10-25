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