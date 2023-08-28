// regex declarations
const regex = /ab+c/i
const regexCons = new RegExp('ab+c', i)

// example
const regexToMatch = /Mydesh/
const aText = 'I am from Mydesh'
const newText = aText.replace(regexToMatch, 'Bangladesh')
console.log(newText) // return i am from Bangladesh
aText.match(regexToMatch)
newText.match(regexToMatch) // return null

const text1 = 'This is my Pen'
text1.match(/this/i)
text1.match(/this/)
text2.match(/is/)
text2.match(/is/g)