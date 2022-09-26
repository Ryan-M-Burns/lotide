const eqObjects = require('./eqObjects.js');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    let element1 = array1[i];
    let element2 = array2[i];
    
    if (typeof element1 === 'object' && typeof element2 === 'object' && element1 !== null && element2 !== null) {
      if (!eqObjects(element1, element2)) {
        return false;
      }
      continue;
    }

    if (element1 !== element2) {
      return false;
    }
    
  }

  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
module.exports = eqArrays;