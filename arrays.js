// arrays.js

// Full reference on strings is here
// http://www.w3schools.com/js/js_arrays.asp

// We've seen an array, but we don't really know
// why they're useful yet

// Think of Arrays as a way to store collections of
// data. Perhaps you need a place to put a bunch of
// addresses, or names, or URLs for a collection of
// images

// Here's how you create one:

var cars = ["Saab", "Volvo", "BMW"];

// The line breaks and whitespace are not important here.
// It may be more legible in a large collection to write
// the array as such:

cars = [
	"Saab",
	"Volvo",
	"BMW"
];

// Once an array is created, we can access its elements by index
// like so:

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// The first element of an array is in the 0th index. So the first
// line above will access "Saab". cars[1] will actually refer to
// the second element in the array ("Volvo").

// You can even store objects in an array. Maybe you have a collection
// of people, each of which is an object with information about that
// specific person.

var people = [
	{
		firstName: "Michael",
		lastName: "McDonald",
		age: 26
	},
	{
		firstName: "Sara",
		lastName: "Kelly",
		age: 26
	},
	{
		firstName: "Tierney",
		lastName: "McDonald",
		age: 19
	}
];

// So now if we accessed people[1] we would get the object
// that contains information about Sara Kelly.

console.log(people[1]);

// There are also some simple operations we can perform with
// Arrays to modify them.

// push - We use push to add items to the end of an array.
// Note that it will always add to the end of an array.

var fruits = [];

fruits.push("Strawberry");
fruits.push("Raspberry");
fruits.push("Banana");

console.log(fruits);

// pop - We use pop to remove items from the end of an array.
// Note that it will always remove items from the end, not the beginning.

fruits.pop(); // "Banana" was just removed

console.log(fruits);

// pop "returns" the item that it removes from the stack. Knowing this
// we could use the result of the pop if we needed to

var itemRemoved = fruits.pop(); // we just stored "Raspberry" in itemRemoved

console.log(fruits);

// We can add and remove from the front of an array also. This is called un/shifting.

fruits.unshift("Raspberry"); // we just added "Raspberry" back to the beginning of the array

console.log(fruits);

fruits.shift(); // we just removed "Raspberry" again

console.log(fruits);

// You can also easily reverse an array

fruits.reverse(); // fruits is now reversed

console.log(fruits);
