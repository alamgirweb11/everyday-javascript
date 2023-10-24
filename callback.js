// example of callback function
const getVarC = (callback) => {
    setTimeout(function() {
       console.log('A Function that takes some time')
       callback()
    }, 3000)
 }
 
 const printSomethingC = () => {
    console.log('Another Function');
 }
 
 getVarC(printSomethingC)

 // real life example of callback
 getSomeData('https://testserver.com', (userInfo) => {
   console.log(userInfo)
})