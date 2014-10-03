//strings.js

// Full reference on strings is here
// http://www.w3schools.com/jsref/jsref_obj_string.asp

/*
  As we've seen, you can use strings to represent
  text in Javascript. Here's more detailed info on
  the String type.

*/

// These two lines are functionally the same
// You can use either double or single quotes
// though you should be consistent in a project

var carName = "Honda Accord";
var carName2 = 'Honda Accord';

// You can also use quotes inside a string
// as long as you use the opposite type of
// quotes

var sentence = "It's alright";
var sentence2 = 'My name is "Michael"';

// We can also 'escape' a character using the
// backslash character to get around this
// problem

var sentence3 = "My name is \"Michael\"";

/* Strings also have a whole variety of
  built in properties and methods. We'll take
  a closer look at methods later, but let's first
  see what we can do with strings right out of the
  box
*/

// length

var myName = "Michael";

console.log(myName.length); // what do you suppose will be printed?

// string methods

// We can use methods to perform computation on strings

var text1 = "Hello World!";
var text2 = text1.toUpperCase();

// text2 is "hello world!"

var myChar = text1.charAt(0);

// text2 is 'H'

var myReplace = text1.replace("Hello", "Goodbye");

// Check the reference at the URL above for full documentation on
// what you can do with strings
