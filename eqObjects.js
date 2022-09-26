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


const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    let element1 = obj1[key];
    let element2 = obj2[key];

    if (Array.isArray(element1) && Array.isArray(element2)) {

      if (!eqArrays(element1, element2)) {
        return false;
      }

      continue;
    }

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

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

module.exports = eqObjects;