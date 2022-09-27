const chai = require('chai');
const assert = require('chai').assert;
const _ = require('../index');

describe('function without()', () => {

  it('should take two arrays and return the first array without like values', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, "2", "3"];
    const expected = [2, 3];

    assert.deepStrictEqual(_.without(arr1, arr2), expected);
  });
  
  it('should return an empty array if the first array is empty', () => {
    const arr1 = [];
    const arr2 = [1, "2", "3"];
    const expected = [];

    assert.deepStrictEqual(_.without(arr1, arr2), expected);
  });

  it('should return an error if undefined entered for array1', () => {
    const arr1 = undefined;
    const arr2 = [1, "2", "3"];
    const expected = Error;

    assert.throws(() => _.without(arr1, arr2), expected);;
  });

  it('should return full array1 if undefined entered for array2', () => {
    const arr1 = [1, "2", "3"];
    const arr2 = undefined;
    const expected = [1, "2", "3"];

    assert.deepStrictEqual(_.without(arr1, arr2), expected);
  });

});

  // assertArraysEqual(without([1, 2, 3], [1, "2", "3"]), [2, 3]);
  // assertArraysEqual(without(["hello", "world", "lighthouse", "expected"], ["hello", "world", "lighthouse"]), ["expected"]);
  // assertArraysEqual(without(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]), []);

  // const words = ["hello", "world", "lighthouse"];
  // without(words, ["lighthouse"]); // no need to capture return value for this test case
  // // Make sure the original array was not altered by the without function
  // assertArraysEqual(words, ["hello", "world", "lighthouse"]);