const middle = function(array) {
  
  let middleArr = [];
  const midIndex = Math.floor(array.length / 2);

  if (array.length > 2) {
    
    if (array.length % 2 === 1) {
      middleArr.push(array[midIndex]);
    } else {
      middleArr.push(array[midIndex - 1], array[midIndex]);
    }

  }

  return middleArr;
};

module.exports = middle;