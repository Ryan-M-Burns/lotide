const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const eqObjects = function(object1, object2) {
  const objectOneKeys = Object.keys(object1);
  const objectTwoKeys = Object.keys(object2);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (let key in object1) {

    const key1Object = object1[key];
    const key2Object = object2[key];

    if (Array.isArray(key1Object) && Array.isArray(key2Object)) {
      if (!eqArrays(key1Object, key2Object)) {
        return false;
      }
      continue;
    }
    if (key1Object !== key2Object) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const abn = { a: 1, b: 2 };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abn); // => false
eqObjects(ab, ba); // => true
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abn), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const cb = { c: "1", b: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cb), false);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);