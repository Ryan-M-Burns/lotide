const testCase = letterPositions("hello");

assertArraysEqual(testCase['h'], [1]);
assertArraysEqual(testCase['e'], [2]);
assertArraysEqual(testCase['l'], [3, 4]);
assertArraysEqual(testCase['o'], [5]);