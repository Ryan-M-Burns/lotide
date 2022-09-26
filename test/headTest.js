const index = require('../index');

index.assertEqual(index.head([5,6,7]), 5);
index.assertEqual(index.head(["Hello", "Lighthouse","Labs"]), "Hello");