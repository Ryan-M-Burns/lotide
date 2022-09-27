const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe("The function assertArraysEqual()", () => {

  it("should return true and log '✅ Assertion Passed: 1,2,3 === 1,2,3' if the two objects are equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    assert.isTrue(_.assertArraysEqual(arr1, arr2));
  });

  it("should return false and log `🛑 Assertion Failed: 1,2,3 === 3,2,1` if the two objects are not equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    
    assert.isFalse(_.assertArraysEqual(arr1, arr2));
  });

  it("should return false and log `🛑 Assertion Failed: 1,2,3 === 1,2,3` if the two objects are equal values but different data types", () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["1", "2", "3"];
    
    assert.isFalse(_.assertArraysEqual(arr1, arr2));
  });

});