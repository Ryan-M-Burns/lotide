const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe("The function assertObjectsEqual()", () => {

  it("should return true and log `✅ Assertion Passed: { a: '1' } === { a: '1' }` if the two objects are equal", () => {

    const object1 = { a: "1" };
    const object2 = { a: "1" };

    assert.isTrue(_.assertObjectsEqual(object1, object2));
  });

  it("should return false and log `🛑 Assertion Failed: { a: '1' } === { b: '1' }` if the two objects are not equal", () => {

    const object1 = { a: "1" };
    const object2 = { b: "1" };

    assert.isFalse(_.assertObjectsEqual(object1, object2));
  });

});