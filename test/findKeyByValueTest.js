const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

const darkAngelsCharactersByRank = {
  supreme_grand_master: "Azrael",
  chief_librarian: "Ezekiel",
  master_interrogator_chaplain: "Asmodai",
  grand_master_of_the_ravenwing: "Sammael",
  grand_master_of_the_deathwing: "Belial"
};
const obj = darkAngelsCharactersByRank;

describe("The function findKeyByValue()", () => {

  it("should return supreme_grand_master if we search 'Azrael'", () => {
    const input = 'Azrael'
    const expected = 'supreme_grand_master'
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'chief_librarian' if we search 'Ezekiel'", () => {
    const input = 'Ezekiel'
    const expected = 'chief_librarian'
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'master_interrogator_chaplain' if we search 'Asmodai'", () => {
    const input = 'Asmodai'
    const expected = 'master_interrogator_chaplain'
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'grand_master_of_the_ravenwing' if we search 'Sammael'", () => {
    const input = 'Sammael'
    const expected = 'grand_master_of_the_ravenwing'
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'grand_master_of_the_deathwing' if we search 'Belial'", () => {
    const input = 'Belial'
    const expected = 'grand_master_of_the_deathwing'
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

});