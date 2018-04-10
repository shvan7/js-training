'use strict'

/*
 * Create a getLength function that takes an array or a string
 * and return it's length.
 *
 * @notions Data-Structures, Get
 */
// Your code :
/* *********************** */
// or i can use length method :) I use 'for of' because 'while' don't count no enumerable array
const getLength = (array) => {
  let i = 0
    for (let a of array) {
      i++
    }
    return(i)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLength([ 2, 42 ]), 2)
assert.strictEqual(getLength([ 'pouet', 4, true ]), 3)
assert.strictEqual(getLength(Array(100)), 100)
assert.strictEqual(getLength([ getLength ]), 1)
assert.strictEqual(getLength('salut'), 5)
assert.strictEqual(getLength([]), 0)
// End of tests */
