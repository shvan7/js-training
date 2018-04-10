'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */
const cutFirst = (str) => str.substring(0, str.length - 2)
const cutLast = (str) => str.substring(2)
const cutFirstLast = (str) => str.substring(2, str.length - 2)
//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('You must write your own test'), 'You must write your own te')
assert.strictEqual(cutLast('You must write your own test'), 'u must write your own test')
assert.strictEqual(cutFirstLast('You must write your own test'), 'u must write your own te')
// End of tests */
