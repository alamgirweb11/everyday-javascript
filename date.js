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

// example of set date
/**
 * setDate()  // set date like month
 * setFullYear()  // set year
 * setHours()  // set hours
 * setMilliseconds()  // set milliseconds
 * setMinutes()  // set minutes
 * setMonth()  // set month
 * setSeconds()  // set seconds
 * setTime()  // set time
 */

console.log(dateObj.setDate(5))
console.log(dateObj.setFullYear(2023))
console.log(dateObj.setHours(5))
console.log(dateObj.setMilliseconds(5000))
console.log(dateObj.setMonth(5))
console.log(dateObj.setSeconds(60))
console.log(dateObj.setTime(6))

// example of set date based on UTC
/**
 * setUTCDate()  // set date like month
 * setUTCFullYear()  // set year
 * setUTCHours()  // set hours
 * setUTCMilliseconds()  // set milliseconds
 * setUTCMinutes()  // set minutes
 * setUTCMonth()  // set month
 * setUTCSeconds()  // set seconds
 */
console.log(dateObj.setUTCDate(5))
console.log(dateObj.setUTCFullYear(2023))
console.log(dateObj.setUTCHours(5))
console.log(dateObj.setUTCMilliseconds(5000))
console.log(dateObj.setUTCMinutes(5))
console.log(dateObj.setUTCMonth(6))
console.log(dateObj.setUTCSeconds(30))

// effective date methods
/**
 * toDateString() // showing date as string
 * toUTCString() // UTC wise date show
 * toISOString() // show date as ISO format
 * toJSON() // show date like as string
 * toLocaleDateString() // it take two arguments 1. language, 2. options, (means date formatting)
 * toLocaleString() // same as toLocaleDateString()
 * toLocaleTimeString() // same as above two methods
 * toString() // return date as string
 * toTimeString() // return human readable date
 * toUTCString() // return UTC type wise date string
 * valueOf() // return milliseconds of date
 */

console.log(dateObj.toDateString())
console.log(dateObj.toDateString())
console.log(dateObj.toISOString())
console.log(dateObj.toJSON())
console.log(dateObj.toLocaleDateString('bn-BD', {day: 'numeric', month: 'long', year: 'numeric'}))
console.log(dateObj.toLocaleString('en-US'))
console.log(dateObj.toDateString(undefined, { 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric',
    hour12: true 
  }))
console.log(dateObj.toString())
console.log(dateObj.toTimeString())
console.log(dateObj.toUTCString())
console.log(dateObj.valueOf())