
assertArraysEqual(without([1, 2, 3], ["1", "2", "3"]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1, "2", "3"]), [2, 3]);
assertArraysEqual(without(["hello", "world", "lighthouse", "expected"], ["hello", "world", "lighthouse"]), ["expected"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);