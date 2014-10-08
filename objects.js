//objects.js

// Objects are one of the most common
// ways to represent data in Javascript

// Technically everything in Javascript is an object except for a few
// primitive datatypes. Primitive values are: 
// strings ("John Doe"), numbers (3.14), true, false, null, and undefined.

// When you hear the term "object oriented programming"
// this refers to the notion of objects

// Objects often represent real world things as an abstraction
// so that programmers can deal with data in a more human
// readable way.

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Similar to arrays, the line breaks and whitespace are not important

person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

// You access these properties by name in one of two ways:

console.log(person.firstName);
console.log(person["firstName"]);

// Both of these statements will log "John" to the console.

// We can also modify an object later on after it's already created

person.age = 51; // now the person's age is 51

// Or we can add more properties to the object

person.hometown = "Minneapolis";

// We can also add functions to an object. When an object has a function
// as one of it properties, it's called a method

person.getFullName = function () {
	return this.firstName + " " + this.lastName;
}

