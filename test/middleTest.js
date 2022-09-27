const _ = require('../index');

_.assertArraysEqual(_.middle([1]), []);
_.assertArraysEqual(_.middle([1, 2]), []);
_.assertArraysEqual(_.middle([1, 2, 3]), [2]);
_.assertArraysEqual(_.middle([1, 2, 3, 4, 5]), [3]);
_.assertArraysEqual(_.middle([1, 2, 3, 4]), [2, 3]);
_.assertArraysEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);