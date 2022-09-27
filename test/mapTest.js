const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe('function map()', () => {

  it("returns ['g', 'c', 't', 'm', 't'] when the callback word => word[0] is called on ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const callback = word => word[0];
    const expected = ['g', 'c', 't', 'm', 't'];

    assert.deepStrictEqual(_.map(words, callback), expected);
  });

  it("returns [18, 21, 6, 15, 9] when the callback num => num * 3 is called on [6, 7, 2, 5, 3]", () => {
    const numbers = [6, 7, 2, 5, 3];
    const callback = num => num * 3;
    const expected = [18, 21, 6, 15, 9];

    assert.deepStrictEqual(_.map(numbers, callback), expected);
  });
});