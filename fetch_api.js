const dataFromRemote = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(dataFromRemote)
dataFromRemote.then((data) => {
    console.log(data)
 })

 const dataFromRemoteFailed = fetch('https://jsonplaceholderdoesntexist.typicode.com/posts')
 dataFromRemoteFailed.then((data) => {
    console.log(data);
 }).catch((err) => {
    console.log('Your Error:', err)
 })

 fetch('https://jsonplaceholder.typicode.com/posts')
   .then((data) => {
      return data.json();
   }).then((posts) => {
      console.log(posts)
})