const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

describe("The function findKey()", () => {

  it("should return 'noma' if we search for first case where there's 2 stars", () => {
    const callback = (x) => x.stars === 2;
    const expected = 'noma'
    assert.strictEqual(_.findKey(object1, callback), expected);
  });

  it("should return undefined if we search for first case where there's 10 stars and no matching value", () => {
    const callback = (x) => x.stars === 10;
    const expected = undefined;
    assert.strictEqual(_.findKey(object1, callback), expected);
  });

  it("should return 'Akaleri' if we search for first case where there isn't 1 star", () => {
    const callback = (x) => x.stars !== 1;
    const expected = 'Akaleri'
    assert.strictEqual(_.findKey(object1, callback), expected);
  });

});