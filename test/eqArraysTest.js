const chai = require('chai');
const assert = chai.assert;
const _ = require('../index.js');

console.log(_.eqArrays([1, 2, 3], [1, 2, 3]));
console.log(_.eqArrays([1, 2, 3], [3, 2, 1]));
console.log(_.eqArrays([1, 2, 3], ["1", "2", "3"]));
console.log(_.eqArrays([1, 2, 3], [1, "2", "3"]));
console.log(_.eqArrays(["hello", "world", "lighthouse", "expected"], ["hello", "world", "lighthouse"]));
console.log(_.eqArrays(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]));
console.log(_.eqArrays([1, 2, [1, 2, 3]], [1, 2, [1, 2, 3]]));