const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

describe("The function countOnly()", () => {

  it("should return an object with the count of allItems with the boolean value true in the itemsToCount object", () => {

    const allItems = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemsToCount = {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    };
    const expected = { Fang: 2, Jason: 1 };

    assert.deepStrictEqual(_.countOnly(allItems, itemsToCount), expected);
  });

  it("should return an empty object with an empty input", () => {

    const allItems = ["Joe"];
    const itemsToCount = {};
    const expected = {};

    assert.deepStrictEqual(_.countOnly(allItems, itemsToCount), expected);
  });

  it("should return an empty object with only false inputs", () => {

    const allItems = ["Joe"];
    const itemsToCount = {"Joe": false};
    const expected = {};

    assert.deepStrictEqual(_.countOnly(allItems, itemsToCount), expected);
  });
});