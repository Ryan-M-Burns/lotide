const without = function(source, itemsToRemove) {
  let withoutArr = [];


  if (!source[0]) {
    return withoutArr;
  }

  if (itemsToRemove === undefined) {
    return source;
  }

  for (let item of source) {

    if (!itemsToRemove.includes(item)) {
      withoutArr.push(item);
    }

  }

  return withoutArr;
};

module.exports = without;