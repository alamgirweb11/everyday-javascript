/**
 * some method
 * it return true/false value
 */

const anArrSome = ['hello', 1, 2, 3, 'Bangla', 5, 'world', 7, 8, 9]
const result = anArrSome.some(function(anElement) {
    return anElement === 9
 })

 console.log(result)