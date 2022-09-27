const findKey = (object, callback) => {

  let firstKeyTrue;

  for (let item in object) {

    if (callback(object[item])) {
    
      firstKeyTrue = item;
      return firstKeyTrue;
    
    }
  }
  
};

module.exports = findKey;