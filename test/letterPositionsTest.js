const chai = require('chai');
const assert = require('chai').assert;
const _ = require('../index');

describe('function letterPositions()', () => {

  it("returns { 'l': 1 } if the input is l", () => {
    const input = 'l';
    const expected = { 'l': [1] };


    assert.deepStrictEqual(_.letterPositions(input), expected);
  });

  it("returns { 'h': [1], 'e': [2], 'l': [3, 4], 'o': [5] } if the input is 'hello'", () => {
    const input = 'hello';
    const expected = { 'h': [1], 'e': [2], 'l': [3, 4], 'o': [5] };


    assert.deepStrictEqual(_.letterPositions(input), expected);
  });

});