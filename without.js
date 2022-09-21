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

const without = function(source, itemsToRemove) {
  let withoutArr = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      withoutArr.push(item);
    }
  }
  return withoutArr;
};
assertArraysEqual(without([1, 2, 3], ["1", "2", "3"]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1, "2", "3"]), [2, 3]);
assertArraysEqual(without(["hello", "world", "lighthouse", "expected"], ["hello", "world", "lighthouse"]), ["expected"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);