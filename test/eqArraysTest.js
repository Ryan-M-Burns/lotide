const index = require('../index');

index.assertArraysEqual([1, 2, 3], [1, 2, 3]);
index.assertArraysEqual([1, 2, 3], [3, 2, 1]);
index.assertArraysEqual([1, 2, 3], ["1", "2", "3"]);
index.assertArraysEqual([1, 2, 3], [1, "2", "3"]);
index.assertArraysEqual(["hello", "world", "lighthouse", "expected"], ["hello", "world", "lighthouse"]);
index.assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]);