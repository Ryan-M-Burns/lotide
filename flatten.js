const flatten = function(nestedArr) {
  let singleArr = [];

  nestedArr.forEach(element => {
   
    if (Array.isArray(element)) {
      let ele = flatten(element);
      singleArr.push(...ele);
    } else {
      singleArr.push(element);
    }

  });

  return singleArr;
};

module.exports = flatten;