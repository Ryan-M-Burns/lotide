const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe("The function flatten()", () => {

  it("it should convert an array containing arrays into a single array", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepStrictEqual(_.flatten(input), expected);
  });

  it("it should convert an array containing arrays within arrays into a single array through recursion", () => {
    const input = ["fan", 2, [[3, [4]]], 5, [6]];
    const expected = ["fan", 2, 3, 4, 5, 6];
    assert.deepStrictEqual(_.flatten(input), expected);
  });

});