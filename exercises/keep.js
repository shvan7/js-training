'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = (str) => str.substring(0, 2)
const keepLast = (str) => str.substring(str.length - 2, str.length)
const keepFirstLast = (str) => str.substring(2, 4)
//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('You must write your own tests'), 'Yo')
assert.strictEqual(keepLast('You must write your own tests'), 'ts')
assert.strictEqual(keepFirstLast('You must write your own tests'), 'u ')
// End of tests */
