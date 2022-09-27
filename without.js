const without = function(source, itemsToRemove) {
  let withoutArr = [];
  
  for (let item of source) {
  
    if (!itemsToRemove.includes(item)) {
      withoutArr.push(item);
    }
  
  }
  
  return withoutArr;
};

module.exports = without;