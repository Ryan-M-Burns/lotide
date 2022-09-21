const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(stringToCount) {
  const results = {};
  stringToCount = stringToCount.split(" ").join("");
  for (let letter of stringToCount) {
    if (!results[letter]) {
      results[letter] = 0;
    }
    results[letter]++;
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));