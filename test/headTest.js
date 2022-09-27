const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe('function head()', () => {

  it('returns 1 for [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const expected = 1;

    assert.strictEqual(_.head(input), expected);
  });

  it("returns undefined for an empty array []", () => {
    const input = [];
    const expected = undefined;
    
    assert.strictEqual(_.head(input), expected);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    const expected = 'Hello';
    
    assert.strictEqual(_.head(input), expected);
  });

});