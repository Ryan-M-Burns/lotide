const chai = require('chai');
const assert = require('chai').assert;
const _ = require('../index');

describe('function head()', () => {

  it('returns 1 for [1, 2, 3]', () => {
    input = [1, 2, 3];
    expected = 1;

    assert.strictEqual(_.head(input), expected);
  });

  it("returns undefined for an empty array []", () => {
    input = [];
    expected = undefined;
    
    assert.strictEqual(_.head(input), expected);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    input = ['Hello', 'Lighthouse', 'Labs'];
    expected = 'Hello';
    
    assert.strictEqual(_.head(input), expected);
  });

});