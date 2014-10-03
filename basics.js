/* ===== Data Types ===== */

// === Strings ===

"This is a string";

"In Javascript we end statements with a semicolon";

"This gives the browser a way to know the statement is ending";

// Strings have some built in properties we can use

// By the way, this is a comment. These will be ignored by the Javascript engine

/* Multiline comments
	can be written as such
	and won't be closed until we put
	the closing star-slash.
*/

// === Numbers ===

// We also use numbers in programming (A LOT!)
// both integers and decimals

console.log(3);

console.log(4.5);

// We can do math in Javascript

console.log(3 + 4);

console.log(6* 8);

// Parens work just as you would expect

console.log((3 + 4) * (6 - 2));

// === Booleans ===

// Another data type, called boolean, only has two possible values: true or false.

// We use booleans in programming to make decisions about what logic we should use
// based on the value of a boolean.

console.log(true);
console.log(false);

// === Arrays ===

// Arrays are a way to store a collection of data.
// They are written with square brackets

console.log([1,2,3,4,5]);

console.log([true, false, true, true]);

console.log(["Michael", "Sara", "Trevor"]);

// === Objects ===

// Objects are a way to store information in a name/value pair style
// They are written with curly braces

console.log({firstName: "Michael", lastName: "McDonald"});



// === Variables ===

/* A fundamental concept in any programming language is the idea of variables.
	These work just as a variable might in mathematics, in that they can be used
	to store a dynamic value.
*/

var x = 1;
var y = 2;

var z = x + y; // What do you imagine would happen if you entered z on the Javascript console now?

console.log(z);

// We can also store strings, booleans, arrays, and objects in variables.

var myName = "Michael";
var yourName = "Sara";

var sentence = myName + " and " + yourName + " went to the liquor store and bought all the gin.";

console.log(sentence);

var yes = true;
var no = false;

console.log(yes);
console.log(no);

var myArray = [1,2,3,4,5];

console.log(myArray);

var person = {
	firstName: "Michael",
	lastName: "McDonald"
};

console.log(person);

// NOTE: It is important to know that the '=' operator performs assignment. When using that symbol
// we assign a value to a variable. It is important to note the difference between this and
// the equality operator that we will look at in conditions.js

// There are also arrays, objects and functions in Javascript. We'll get to those soon.
