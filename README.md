# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ryanmburns/lotide`

**Require it:**

`const _ = require('@ryanmburns/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array, array)`: asserts whether two arrays are strictly equal and logs to the console a pass or fail message

* `assertEqual(value, value)`: asserts whether two primitive variables are strictly equal and logs to the console a pass or fail message

* `assertObjectsEqual(object, object)`: asserts whether two objects are strictly equal and logs to the console a pass or fail message

* `countLetters(string)`: returns an object with the key value pairs being a letter, and the number of times that letter is repeated in the input string

* `countOnly(array, object)`: iterates over the array for each key vith the boolean value true, and creates an object that returns the number of times each key in the input object matches an element of the input array

* `eqArrays(array, array)`: strictly compares each array with to find whether they are equal and returns a boolean value. Functional with nested arrays and objects

* `eqObjects(object, object)`: strictly compares each object to find whether they are equal and returns a boolean value. Functional with nested arrays and objects

* `findKey(object, callback)`: runs the callback function to find the first value in the object where the callback function returns true and returns the key

* `findKeyByValue(object, value)`:iterates through the object to find the first key where the value is equal to the input value

* `flatten(array)`: creates a new array with all embedded array elements pushed into it recursively to a single level array

* `head(array)`: returns the first element of the input array. Does not mutate the input array

* `letterPositions(string)`: creates an object with the keys being the letters, and the values being an array of the indexes for each letter in the input string

* `map(array, callback)`: applies the callback function to each element in the input array and returns them in a new array

* `middle(array)': returns the middle value(s) for an array of length 3 or greater. returns an array with 1 element if length is odd, and 2 elements if length is even

* `tail(array)`: creates a new array with the first element of the input array removed. Does not mutate the input array

* `takeUntil(array, callback)`: sequentially iterates through the input array and inputs their values into a new array until the callback function returns true. Does not mutate the input array

* `without(array, array)`: creates a new array of the primitive element values from the first input array that do not match the primitive elements in the second input array