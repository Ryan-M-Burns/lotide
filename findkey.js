// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
//   }
// };
const assertEqual = (actual, expected) => {
  
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
  }

};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {

  let firstKeyTrue;

  for (let item in object) {

    if (callback(object[item])) {
    
      firstKeyTrue = item;
      return firstKeyTrue;
    
    }
  }

  return firstKeyTrue;
};

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

let result1 = findKey(object1, x => x.stars === 2); // => "noma"
let result2 = findKey(object1, x => x.stars === 10); // => undefined
let result3 = findKey(object1, x => x.stars !== 1); // => "Akaleri"

console.log(result1);
assertEqual(result1, "noma");
assertEqual(result2, undefined);
assertEqual(result3, "Akaleri");