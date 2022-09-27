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

assertEqual(result1, "noma");
assertEqual(result2, undefined);
assertEqual(result3, "Akaleri");