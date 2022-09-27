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

module.exports = countLetters;