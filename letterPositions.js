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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i+1);
  }
  return results;
};

const testCase = letterPositions("hello");

assertArraysEqual(testCase['h'], [1]);
assertArraysEqual(testCase['e'], [2]);
assertArraysEqual(testCase['l'], [3, 4]);
assertArraysEqual(testCase['o'], [5]);