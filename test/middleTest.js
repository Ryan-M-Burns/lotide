const chai = require('chai');
const assert = require('chai').assert;
const _ = require('../index');

describe('function map()', () => {

  it('returns an empty array when the length of array is less than 3', () => {
    input = [1, 2];
    expected = [];
    
    assert.deepStrictEqual(_.middle(input), expected);
  });

  it('returns an single array when the length of array is odd and 3 or more', () => {
    input = [1, 2, 3];
    expected = [2];
    
    assert.deepStrictEqual(_.middle(input), expected);
  });

  it('returns an array with 2 elements when the array is even and length is greater than 3', () => {
    input = [1, 2, 3, 4];
    expected = [2, 3];
    
    assert.deepStrictEqual(_.middle(input), expected);
  });
});