const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');

const darkAngelsCharactersByRank = {
  supremeGrandMaster: "Azrael",
  chielfLibrarian: "Ezekiel",
  masterInterrogatorChaplain: "Asmodai",
  grandMasterOfTheRavenwing: "Sammael",
  grandMasterOfTheDeathwing: "Belial"
};
const obj = darkAngelsCharactersByRank;

describe("The function findKeyByValue()", () => {

  it("should return 'supremeGrandMaster' if we search 'Azrael'", () => {
    const input = 'Azrael';
    const expected = 'supremeGrandMaster';
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'chielfLibrarian' if we search 'Ezekiel'", () => {
    const input = 'Ezekiel';
    const expected = 'chielfLibrarian';
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'masterInterrogatorChaplain' if we search 'Asmodai'", () => {
    const input = 'Asmodai';
    const expected = 'masterInterrogatorChaplain';
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'grandMasterOfTheRavenwing' if we search 'Sammael'", () => {
    const input = 'Sammael';
    const expected = 'grandMasterOfTheRavenwing';
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

  it("should return 'grandMasterOfTheDeathwing' if we search 'Belial'", () => {
    const input = 'Belial';
    const expected = 'grandMasterOfTheDeathwing';
    assert.strictEqual(_.findKeyByValue(obj, input), expected);
  });

});