const eqArrays = require('./eqArrays.js');
//const index = require('./index');

// const eqArrays = (array1, array2) => {
  
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     let element1 = array1[i];
//     let element2 = array2[i];
    
//     if (typeof element1 === 'object' && typeof element2 === 'object' && element1 !== null && element2 !== null) {
//       if (!eqObjects(element1, element2)) {
//         return false;
//       }
//       continue;
//     }

//     if (element1 !== element2) {
//       return false;
//     }

//   }

//   return true;
// };


const eqObjects = (obj1, obj2) => {

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

module.exports = eqObjects;