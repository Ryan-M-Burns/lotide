const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
  }

};

const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let index = 0; index < arrayOne.length; index++) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false;
    }
  }

  return true;
};

// create a function takeUntil that takes in two parameters
// 1. the Array to work with
// 2. The callback
// takeUntil will return a slice of the array until the callback function returns a truthy value
const takeUntil = function(array, callback) {

  result = [];

  for (let item of array) {
    
    if (callback(item)) return result;
    
    result.push(item);
  }
  
  return result;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // => [ 1, 2, 5, 7, 2 ]
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // => [ 'I\'ve', 'been', 'to', 'Hollywood' ]
console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);