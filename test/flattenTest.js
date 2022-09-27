
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["fan", 2, [3, 4], 5, [6]]), ["fan", 2, 3, 4, 5, 6]);