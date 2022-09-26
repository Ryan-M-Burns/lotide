const index = require('../index');

index.assertArraysEqual(index.middle([1]), []);
index.assertArraysEqual(index.middle([1, 2]), []);
index.assertArraysEqual(index.middle([1, 2, 3]), [2]);
index.assertArraysEqual(index.middle([1, 2, 3, 4, 5]), [3]);
index.assertArraysEqual(index.middle([1, 2, 3, 4]), [2, 3]);
index.assertArraysEqual(index.middle([1, 2, 3, 4, 5, 6]), [3, 4]);