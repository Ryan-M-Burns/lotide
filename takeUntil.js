const takeUntil = function(array, callback) {
  result = [];

  if(!array[0]) {
    return result;
  }

  for (const item of array) {
    
    if (callback(item)) {
      return result;
    }
    
    result.push(item);
  }
  
  return result;
};

module.exports = takeUntil;