const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(objectToSearch, findKeyValue) {
  let objectKeyArr = Object.keys(objectToSearch);

  for (object of objectKeyArr) {
    if (objectToSearch[object] === findKeyValue) {
      return object.toString();
    }
  }

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const darkAngelsCharactersByRank = {
  supreme_grand_master: "Azrael",
  chief_librarian: "Ezekiel",
  master_interrogator_chaplain: "Asmodai",
  grand_master_of_the_ravenwing: "Sammael",
  grand_master_of_the_deathwing: "Belial"
};

assertEqual(findKeyByValue(darkAngelsCharactersByRank, "Azrael"), "supreme_grand_master");
assertEqual(findKeyByValue(darkAngelsCharactersByRank, "Ezekiel"), "chief_librarian");
assertEqual(findKeyByValue(darkAngelsCharactersByRank, "Asmodai"), "master_interrogator_chaplain");
assertEqual(findKeyByValue(darkAngelsCharactersByRank, "Sammael"), "grand_master_of_the_ravenwing");
assertEqual(findKeyByValue(darkAngelsCharactersByRank, "Belial"), "grand_master_of_the_deathwing");