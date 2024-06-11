// You need this to complete the ES Modules exercise
import greet from './greet.js'

/**
 *  Return the highest number in the array
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/

const highestNumber = (array) => {
  // Method 1
  let highestNum = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highestNum) highestNum = array[i]
  }
  return highestNum

  // Method 2
  // file deepcode ignore JavascriptDeadCode: <please specify a reason of ignoring this>
  array.sort((a, b) => {
    return b - a
  })
  return array[0]

  // Method 3
  return Math.max(...array)

  // Method 4
  return array.reduce((highestNum, num) => {
    if (num > highestNum) highestNum = num
    return highestNum
  })
}

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

const combineArray = (array1, array2) => {
  return [...array1, ...array2]
}

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

const combineObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
}

/**
 * Please use the higher order function map to solve this problem.
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

const doubleValues = (arr) => {
  // Method 1
  return arr.map((num) => {
    return num * 2
  })

  // Method 2
  return arr.map((num) => num * 2)
}

/**
 * * Please use the higher order function filter to solve this problem.
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
const onlyEvenValues = (arr) => {
  // Method 1
  return arr.filter((arr) => {
    return arr % 2 === 0
  })

  // Method 2
  return arr.filter((arr) => arr % 2 === 0)
}

/**
 * Create a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercase and lowercase) removed.
 * Every character in the new string should be lowercase.
 * @example
 * removeVowels('Elie') // ('l')
 * removeVowels('TIM') // ('tm')
 * removeVowels('ZZZZZZ') // ('zzzzzz')
 */

/**
 * Remove all vowels from within a string and lower case each letter
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
const removeVowels = (str) => {
  // Method 1
  return str
    .toLowerCase()
    .split('')
    .filter((letter) => !['a', 'e', 'i', 'o', 'u'].includes(letter))
    .join('')

  // Method 2
  return str.toLowerCase().replace(/[aeiou]/g, '')
}

/**
 * Solve this problem using the ternary operator.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * @returns {string}
 */

const getIsHungryText = () => {
  //don't change this variable
  let isStomachEmpty = false
  /* convert this if else statement into a ternary expression */
  let isHungry = isStomachEmpty ? 'Go eat something.' : 'Keep coding!'
  return isHungry
}

/**
 * Refactor this to use destructuring. For an example of destructuring,
 * @see https://dmitripavlutin.com/javascript-object-destructuring/
 * @return Function should return tomorrow's temperature
 */

const getTempOfTomorrow = () => {
  // Do not change me
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
  }

  // Start of what you should change
  const { today, tomorrow } = AVG_TEMPERATURES
  // End of what you should change
  return `Today's temperature is ${today}.\nTomorrow's temperature is ${tomorrow}`
}

/**
 * Please use the high order function reduce to solve this problem. For an example of reduce,
 * @see https://www.airpair.com/javascript/javascript-array-reduce
 *
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
const addItems = (arr) => {
  // Method 1
  return arr.reduce((sum, num) => {
    return sum + num
  })

  // Method 2
  return arr.reduce((sum, num) => sum + num)
}

/**
 * Remove duplicate values from an array.
 * @example
 * [1,1,2,2,3,3] // [1,2,3]
 * @param {array} arr
 * remove duplicates elements from an array
 *  hint you can use sets (optional) as a way to solve this problem.
 * @return {array}
 *
 */

const removeDuplicates = (array) => {
  /** Return the an array of unique values */
  return [...new Set(array)]
}

/**
 * Ignore this. It is for the tests.
 */

let greeter
try {
  greeter = greet
} catch (e) {
  // Normally it is bad practice to not handle the error.
  // However, I am just using try ... catch to get the unit test to work
}
export {
  greeter,
  highestNumber,
  combineArray,
  combineObject,
  doubleValues,
  onlyEvenValues,
  removeVowels,
  getIsHungryText,
  getTempOfTomorrow,
  addItems,
  removeDuplicates,
}
