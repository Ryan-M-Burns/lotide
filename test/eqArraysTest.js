const chai = require('chai');
const assert = chai.assert;
const _ = require('../index.js');

describe("The function eqArrays()", () => {

  it("should return true if the two arrays are equal", () => {

    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    assert.isTrue(_.eqArrays(arr1, arr2));
  });
  
  it("should return false if the two arrays are not equal", () => {

    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];

    assert.isFalse(_.eqArrays(arr1, arr2));
  });

  it("should return false if the two arrays contain equal values but are not of the same type", () => {

    const arr1 = [1, 2, 3];
    const arr2 = ["1", "2", "3"];

    assert.isFalse(_.eqArrays(arr1, arr2));
  });

  it("should return true if the two arrays are equal and contain embedded arrays", () => {

    const arr1 = [1, [[2]], 3];
    const arr2 = [1, [[2]], 3];

    assert.isTrue(_.eqArrays(arr1, arr2));
  });
  
  it("should return true if the two arrays are equal and contain embedded arrays and objects", () => {

    const arr1 = [{a: 1}, [[2]], 3];
    const arr2 = [{a: 1}, [[2]], 3];

    assert.isTrue(_.eqArrays(arr1, arr2));
  });

});