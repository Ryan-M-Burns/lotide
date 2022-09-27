const _ = require('../_');

_.assertEqual(_.tail([]).toString(), [].toString());
_.assertEqual(_.tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
_.assertEqual(_.tail([1, 2, 3]).toString(), [2, 3].toString());
_.assertEqual(_.tail([1]).toString(), [].toString());

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
