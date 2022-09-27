const flatten = function(nestedArr) {
  let singleArr = [];

  for (let element of nestedArr) {

    if (Array.isArray(element)) {

      for (let ele of element) {
        singleArr.push(ele);
      }

    } else {
      singleArr.push(element);
    }

  }

  return singleArr;
};

module.exports = flatten;