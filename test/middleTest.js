const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe('function map()', () => {

  it('returns an empty array when the length of array is less than 3', () => {
    const input = [1, 2];
    const expected = [];

    assert.deepStrictEqual(_.middle(input), expected);
  });

  it('returns an single array when the length of array is odd and 3 or more', () => {
    const input = [1, 2, 3];
    const expected = [2];

    assert.deepStrictEqual(_.middle(input), expected);
  });

  it('returns an array with 2 elements when the array is even and length is greater than 3', () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];

    assert.deepStrictEqual(_.middle(input), expected);
  });
});