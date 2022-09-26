const index = require('../index');

console.log(index.eqArrays([1, 2, 3], [1, 2, 3]));
console.log(index.eqArrays([1, 2, 3], [3, 2, 1]));
console.log(index.eqArrays([1, 2, 3], ["1", "2", "3"]));
console.log(index.eqArrays([1, 2, 3], [1, "2", "3"]));
console.log(index.eqArrays(["hello", "world", "lighthouse", "expected"], ["hello", "world", "lighthouse"]));
console.log(index.eqArrays(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]));
console.log(index.eqArrays([1, 2, [1, 2, 3]], [1, 2, [1, 2, 3]]));