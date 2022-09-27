const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    
    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i + 1);
  }

  return results;
};

module.exports = letterPositions;