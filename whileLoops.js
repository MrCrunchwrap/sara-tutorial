//whileLoops.js

// While loops are like for loops, but the structure is a bit different

var i = 0; // set up a counter variable

while(i < 100) {
	
	console.log(i); // here's the main code we want to repeat

	i++; // we must increment our counter or we'd never break out of the loop!
}

// Technically you could write a loop without any counter, but
// it would never break out of the loop

while(true) {

	console.log("This is an infinite loop");

}

// You could be testing for other conditions

var fruits = [];

fruits.push("Strawberry");
fruits.push("Apple");
fruits.push("Blueberry");

// This loop will pop from the array until fruits.length is zero
// Zero is considered "false" so the loop will break

while(fruits.length) {
	
	fruits.pop();

}