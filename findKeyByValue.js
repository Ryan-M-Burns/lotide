const findKeyByValue = function(objectToSearch, findKeyValue) {
  let objectKeyArr = Object.keys(objectToSearch);

  for (object of objectKeyArr) {
    
    if (objectToSearch[object] === findKeyValue) {
      return object.toString();
    }

  }
  
};

module.exports = findKeyByValue;