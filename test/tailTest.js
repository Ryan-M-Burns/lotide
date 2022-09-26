const index = require('../index');

index.assertEqual(index.tail([]).toString(), [].toString());
index.assertEqual(index.tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
index.assertEqual(index.tail([1, 2, 3]).toString(), [2, 3].toString());
index.assertEqual(index.tail([1]).toString(), [].toString());