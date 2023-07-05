// print date constructor
console.dir(Date)
// return current time in milliseconds
console.log(Date.now())
// parse date
console.log(Date.parse('01 Jan 1970 00:00:00 GMT'))
// print current date time
console.log(new Date())
// check type of date
const date = Date()
console.log(typeof date)
// date object
const dateObj = new Date()
console.log(typeof dateObj) // object

/**
 * example of some handy method of Date
 * getDate() // return current date
 * getDay() // return times(day) day start from sunday(0) end saturday(6)
 * getFullYear() // return current year
 * getHours() // return current hours
 * getMilliseconds() // return milliseconds of current time
 * getMonth() // return current month
 * getMinutes() // return minutes
 * getSeconds() // return seconds
 */

console.log(dateObj.getDate())
console.log(dateObj.getDay())
console.log(dateObj.getFullYear())
console.log(dateObj.getHours())
console.log(dateObj.getMinutes())
console.log(dateObj.getMilliseconds())
console.log(dateObj.getMonth())
console.log(dateObj.getSeconds())

/**
 * UTC (Universal Time Coordinated)
 * Example of UTC based Date handy method
 * getUTCDate() // return UTC based current date 
 * getUTCDay() // return UTC base current day
 * getUTCFullYear() // return current year
 * getUTCHours() // return current hours
 * getUTCMilliseconds() // return milliseconds of current time
 * getUTCMonth() // return current month
 * getUTCMinutes() // return minutes
 * getUTCSeconds() // return seconds
 */
console.log(dateObj.getUTCDate())
console.log(dateObj.getUTCDay())
console.log(dateObj.getUTCFullYear())
console.log(dateObj.getUTCHours())
console.log(dateObj.getUTCMinutes())
console.log(dateObj.getUTCMilliseconds())
console.log(dateObj.getUTCMonth())
console.log(dateObj.getUTCSeconds())
