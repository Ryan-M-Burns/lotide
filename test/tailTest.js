const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe('function tail()', () => {

  it('returns [2, 3] for input array [1, 2, 3]', () => {
    const arr = [1, 2, 3];
    const expected = [2, 3];

    assert.deepStrictEqual(_.tail(arr), expected);
  });

  it("returns ['Lighthouse', 'Labs'] for input array ['Hello', 'Lighthouse', 'Labs']", () => {
    const arr = ['Hello', 'Lighthouse', 'Labs'];
    const expected = ['Lighthouse', 'Labs'];

    assert.deepStrictEqual(_.tail(arr), expected);
  });

  it("returns undefined for an empty array ", () => {
    const arr = [];
    const expected = undefined;

    assert.deepStrictEqual(_.tail(arr), expected);
  });

});