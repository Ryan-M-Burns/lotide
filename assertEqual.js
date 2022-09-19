//Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(10, "ten");
assertEqual("", undefined);
assertEqual("Ryan", "Ryan");
assertEqual(1, 10);
