// console all directory
console.dir(console)

// assert use for testing purpose
console.assert(1==1, 'Error')

console.clear() // return  undefined
console.count() // return 1
console.count() // return 2
console.count() // return 3
console.count() // return 4
console.count() // return 5
console.count('Anything') // return Anything 1
console.count('Anything') // return Anything 2
console.count('Anything') // return Anything 3

console.error('This is a error log')

// grouping 
console.group('A Grouped Console')
console.log('Normal Console Log')
console.error('Error Console Log')
console.dir(console)
console.groupEnd()

// console info
console.info('Just a info message')

// console log
console.log('A Simple Console Log')
console.log('Hello I am %s!', 'Abir Ahmed')
console.log('Addition of 2 + 2 is: %s', (2 + 2))
const myName = 'Abir Ahmed';
console.log(`My name is ${myName}`)
console.log('%cAbir Ahmed', 'font-size: 50px; background-color: red')