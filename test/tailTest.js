const chai = require('chai');
const assert = require('chai').assert;
const _ = require('../index');

describe('function tail()', () => {

  it('returns [2, 3] for input array [1, 2, 3]', () => {
    arr = [1, 2, 3];
    expected = [2, 3];

    assert.deepStrictEqual(_.tail(arr), expected);
  });

  it("returns ['Lighthouse', 'Labs'] for input array ['Hello', 'Lighthouse', 'Labs']", () => {
    arr = ['Hello', 'Lighthouse', 'Labs'];
    expected = ['Lighthouse', 'Labs'];

    assert.deepStrictEqual(_.tail(arr), expected);
  });

  it("returns undefined for an empty array ", () => {
    arr = [];
    expected = undefined;

    assert.deepStrictEqual(_.tail(arr), expected);
  });

});