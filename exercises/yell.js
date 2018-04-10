'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

const yell = (str) => str.toUpperCase()
//* Begin of tests
const assert = require('assert')
assert.strictEqual(yell('You must write your own tests'), 'YOU MUST WRITE YOUR OWN TESTS' )
// End of tests */
