const $ = require('./kwuery')

/*
  Eliminate confusion with type-checking functions!
*/

class X {
  constructor() {}
}

console.log($.type([])) // Array
console.log($.isNumber(NaN)) // false
console.log($.isObject([])) // false
console.log($.isObject(new X())) // false

/*
  Check if any two Objects or Arrays are equal!
*/

console.log($.isEqual([{}], [{}])) // true
console.log($.isEqual({ a: [] }, { b: [] })) // true