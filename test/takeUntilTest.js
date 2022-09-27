const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe('function takeUntil()', () => {

  it('should take the data and return an array until the callback function is met', () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x < 0;
    const expected = [1, 2, 5, 7, 2];

    assert.deepStrictEqual(_.takeUntil(input, callback), expected);
  });

  it('should return an empty array if no array entered', () => {
    const input = [];
    const callback = x => x < 0;
    const expected = [];

    assert.deepStrictEqual(_.takeUntil(input, callback), expected);
  });

  it('should return an error if undefined entered', () => {
    const input = undefined;
    const callback = x => x < 0;
    const expected = Error;

    assert.throws(() => _.takeUntil(input, callback), expected);
  });

});