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


const map = (array, callback) => {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [6, 7, 2, 5, 3];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(numbers, number => number * 3);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [18, 21, 6, 15, 9]);

