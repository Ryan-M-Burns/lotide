// Includes stretch activity to have eqObjects and eqArrays work recursively. I took it one step further to when you have an object inside an array inside an object which caused eqArrays and eqObjects to be mutually recursive. To make this work I discovered what was happening was that when eqObjects called eqArrays it would run fine since we have required eqArrays in this file. The issue would arrise when eqArrays would refer back to eqObjects and since eqArrays had not run to the end of the file, it did not read the require eqObjects in the eqArrays file. To get around this problem I had to export the function during the function declaration in each file so that each file had a complete function before running.
const eqObjects = module.exports = (obj1, obj2) => {

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

const eqArrays = require('./eqArrays.js');