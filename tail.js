const tail = function(arr) {
  if (!arr[0]) {
    return undefined;
  }

  return arr.slice(1);
};

module.exports = tail;