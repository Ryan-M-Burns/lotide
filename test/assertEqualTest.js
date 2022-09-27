const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe("The function assertEqual()", () => {

  it("should return true and log '✅ Assertion Passed: 1 === 1' if the two variables are equal", () => {
    const val1 = 1;
    const val2 = 1;

    assert.isTrue(_.assertEqual(val1, val2));
  });

  it("should return false and log `🛑 Assertion Failed: Lighthouse Labs === Bootcamp` if the two objects are not equal", () => {
    const val1 = "Lighthouse Labs";
    const val2 = "Bootcamp";

    assert.isFalse(_.assertEqual(val1, val2));
  });

  it("should return false and log `🛑 Assertion Failed: 1 === 1` if the two objects are equal values but different data types", () => {
    const val1 = 1;
    const val2 = '1';

    assert.isFalse(_.assertEqual(val1, val2));
  });

});