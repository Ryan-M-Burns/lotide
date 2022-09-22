const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // two objects are equal if they have the same number of keys
  // the value for each key is the same as the value for that same key in the other object
  let equal = false;
  const objectOneKeys = Object.keys(object1).sort();
  const objectTwoKeys = Object.keys(object2).sort();
  console.log("objectOneKeys:", objectOneKeys, "objectTwoKeys:", objectTwoKeys);
  
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return equal;
  }

  for (let i = 0; i < objectOneKeys.length; i++) {
    if (objectOneKeys[i] !== objectTwoKeys[i]){
      return equal;
    }
  }

  return equal;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);
