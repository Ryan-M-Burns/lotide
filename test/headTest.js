const chai = require('chai');
const assert = require('chai').assert;
const _ = require('../index');

describe('function head()', () => {

  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});