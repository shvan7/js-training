'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
const jadenCase = (str) => str.split(" ").map(e => capitalize(e)).join(" ")
//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
// End of tests */
