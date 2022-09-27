const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe("The function countLetters()", () => {

  it("should return { t: 2, e: 1, s: 1} with the input 'test'", () => {

    const input = "test";
    const expected = { t: 2, e: 1, s: 1 };

    assert.deepStrictEqual(_.countLetters(input), expected);
  });

  it("should return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } if 'lighthouse in the house is entered", () => {

    const input = "lighthouse in the house";
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

    assert.deepStrictEqual(_.countLetters(input), expected);
  });

});