// variables.js

var carName;

carName = "Oldsmobile Alero";

carName = "Honda Accord";

// Multi declaration

var carMake, carModel;

carMake = "Honda";

carModel = "Accord";

var firstName = "Michael",
	middleName = "John",
	lastName = "McDonald";

// A variable's type is considered "undefined" before it is given a value.

var myVar;

// The type of underVar is "undefined" currently.

// You can also empty a variable by setting it to null

var myVar = "something";

var myVar = null;

// We have now "nullified" the value of myVar

// Variables don't care what kind of data is assigned to them

var x = "A string";

console.log(x);

x = 3;

console.log(x);

x = [1,2,3,4,5];

console.log(x);

// You can check the type of a variable using the keyword typeof

x = "A string";

console.log(typeof x); // "string"

x = 3;

console.log(typeof x); // "number"

x = [1,2,3,4,5];

console.log(typeof x); // "object"

x = {
	firstName: "Michael",
	lastName: "McDonald",
	age: 26
};

console.log(typeof x); // "object"

