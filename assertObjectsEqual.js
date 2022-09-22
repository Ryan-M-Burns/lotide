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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objectOneKeys = Object.keys(object1).sort();
  const objectTwoKeys = Object.keys(object2).sort();

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (let i = 0; i < objectOneKeys.length; i++) {
    const key1 = objectOneKeys[i];
    const key2 = objectTwoKeys[i];
    const key1Object = object1[key1];
    const key2Object = object2[key2];
    
    if (key1 !== key2) {
      return false;
    }

    if (Array.isArray(key1Object)) {
      if (!eqArrays(key1Object, key2Object)) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false