// Integer is a whole number.
const myNumber = 42;
console.log(myNumber);

// Numbers with decimal are the floating point numbers.
const myFloat = 42.0;
console.log(myFloat);

const myString = "42";
console.log(myFloat === myString); // false
console.log(myString + 3); // 423

// Number function => typecast a value into number.
console.log(Number(myString) === myNumber);
console.log(Number("Dave")); // NAN (Not A Number)
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number Methods:
// isInteger method => determines whether the passes value is an integer.
console.log(Number.isInteger(myString));

// parseFloat method =>used to parse a string and return a floating-point number.
console.log(Number.parseFloat(myString));

// parseInt method =>used to parse a string and return an integer.
console.log(Number.parseInt("34.526"));

// toFixed method => used to format a number to a specified number of decimal points.
console.log((34.526).toFixed(2));

// toString => used to convert a number to a string representation.
console.log(myNumber.toString());
console.log(typeof myNumber.toString());

// Number.isNaN => this is more reliable function to check whether the passed value is not a number as compared to global 'isNaN()' function.
console.log(Number.isNaN(NaN));

// isNaN => this global function checks whether a value is not a number.
console.log(isNaN("43"));

// Chaining:
// using several methods chained together.
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());
