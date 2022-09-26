const chai = require('chai');
const assert = chai.assert;
const index = require('../index.js');

describe("The function eqObjects()", () => {

  it("should return true if the two objects are equal", () => {

    let object1 = { a: "1" };
    let object2 = { a: "1" };

    assert.isTrue(index.eqObjects(object1, object2));
  });

  it("should return false if the two objects are not equal", () => {

    let object1 = { a: "1" };
    let object2 = { b: "1" };

    assert.isFalse(index.eqObjects(object1, object2));
  });

  it("should return true if the two objects are equal and include arrays", () => {

    let object1 = { c: "1", d: ["2", 3] };
    let object2 = { c: "1", d: ["2", 3] };

    assert.isTrue(index.eqObjects(object1, object2));
  });

  it("should return true if the two objects are equal yet unordered and include arrays", () => {

    let object1 = { d: ["2", 3], c: "1" };
    let object2 = { c: "1", d: ["2", 3] };

    assert.isTrue(index.eqObjects(object1, object2));
  });

  it("should return false if the two objects are equal in length but include disimilar arrays", () => {

    let object1 = { c: "1", d: ["2", 3, 4] };
    let object2 = { c: "1", d: ["2", 3] };

    assert.isFalse(index.eqObjects(object1, object2));
  });

  it("should return true if the object contains objects and are equal", () => {

    let object1 = { a: { z: 1 }, b: 2 };
    let object2 = { a: { z: 1 }, b: 2 };

    assert.isTrue(index.eqObjects(object1, object2));
  });

  it("should return false if the object contains objects and are not equal", () => {

    let object1 = { a: { z: 1 }, b: { y: 2 } };
    let object2 = { a: { z: 1 }, b: 2 };

    assert.isFalse(index.eqObjects(object1, object2));
  });

  it("should return true if the objects within arrays within an objects are equal", () => {

    let object1 = { a: [3, { z: 1 }], b: 2 };
    let object2 = { a: [3, { z: 1 }], b: 2 };

    assert.isTrue(index.eqObjects(object1, object2));
  });

  it("should return false if the object contains objects and are not equal", () => {

    let object1 = { a: [{ z: 1 }, 3], b: 2 };
    let object2 = { a: [3, { z: 1 }], b: 2 };

    assert.isFalse(index.eqObjects(object1, object2));
  });

});

