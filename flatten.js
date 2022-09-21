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

const flatten = function(nestedArr) {
  let singleArr = [];
  
  for (let element of nestedArr) {
    
    if (Array.isArray(element)) {
      
      for (let ele of element) {
        singleArr.push(ele);
      }

    } else {
      singleArr.push(element);
    }

  }

  return singleArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["fan", 2, [3, 4], 5, [6]]), ["fan", 2, 3, 4, 5, 6]);