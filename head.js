const head = function(arr) {
  
  if (!arr[0]) {
    return undefined;
  }
  
  return arr[0];
};

module.exports = head;