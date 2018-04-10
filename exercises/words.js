'use strict'
/*
* Create a function `words` that take a string
* and return an array of each words using space as a delimiter
*/
/* primitive method :
const words = (str) => {
  const tab = []
  let j = 0
  tab[j] = ''
  for(let i = 0 ; i < str.length ; i++) {
    if (str[i] === " ") {
      j++
      i++
      tab[j] = ''
    }
    tab[j] += str[i]
  }
  //return(tab)
  console.log(tab)
}
*/
const words = (str) => str.split(" ")
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
