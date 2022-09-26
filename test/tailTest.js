const index = require('../index');

const words = ["Yo Yo", "Lighthouse", "Labs"];
index.tail(words); // no need to capture the return value since we are not checking it
index.assertEqual(words.length, 3); // original array should still have 3 elements!
index.assertEqual(index.tail([]).toString(), [].toString());
index.assertEqual(index.tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
index.assertEqual(index.tail([1, 2, 3]).toString(), [2, 3].toString());
index.assertEqual(index.tail([1]).toString(), [].toString());