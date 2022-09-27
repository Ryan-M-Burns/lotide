const findKeyByValue = function(objectToSearch, findKeyValue) {
  const objectKeyArr = Object.keys(objectToSearch);

  for (const object of objectKeyArr) {

    if (objectToSearch[object] === findKeyValue) {
      return object.toString();
    }

  }

};

module.exports = findKeyByValue;