/* We didn't do much with booleans at first. That's because
	they really don't do much on their own. We need to get into
	conditional statements and control flow to really see why
	booleans are powerful
*/

// I can use a boolean to only run code in specific cases

/* This example is contrived, but it illustrates how this might work.
	This is called an "if" statement. It allows you to check a condition
	and only execute code in specific scenarios.
*/

var myBoolean = true;

var myOtherBoolean = false;

if (myBoolean) {
	// if myBoolean is true, then execute this code
	console.log(myBoolean);

	// What would happen if we replaced myBoolean with
	// myOtherBoolean?
}

/* We can also chain these conditions together to form more
	complex logic. Maybe we would want to check that a user is
	both logged in AND has a credit card saved to their account
	before we let them use 1-Click purchasing (a la Amazon).
*/


// AND operator

if (myBoolean && myOtherBoolean) {

	// This code will only execute if both those conditions
	// evaluate to 'true'
	console.log("AND operator example: ", myBoolean && myOtherBoolean);

}

// OR operator

if (myBoolean || myOtherBoolean) {

	// This code will execute if either of these condtions
	// evaluate to true
	console.log("OR operator example: ", myBoolean || myOtherBoolean);
}

// NOT operator

if (!myBoolean) {

	// This code will only execute if myBoolean
	// evaluates to false. The '!' symbol stands for
	// "NOT" and essentially reverse the logic
	console.log("NOT operatory example: ", !myBoolean);

	// !true is false
	// !false is true
}

// A more pertinent example:

var loggedIn = false;

if (!loggedIn) {

	// Send user to login page when they request resources
	// behind password protection (such as account info)
	console.log("Please log in!");

}

/* We can also use conditional logic to check if values are
	less than, greater than, or equivalent. Imagine if we are
	running a site for a brewery and we require our users to be 21+
	to view site materials
*/

var userAge = 18;

if (userAge < 21) {

	// Show user message that states they aren't old enough
	window.alert("You aren't old enough to view this page!");

}

/* Other operators. These all evaluate to 'true' */

console.log(userAge < 21);
console.log(userAge > 10);
console.log(userAge === 18); // Note the difference between this and userAge = 18;
console.log(userAge !== 5);


/* We can even chain these condtions together in whatever way
	we please. Maybe there's a check to see if a user is logged in
	and older than 21. Here's how that would look:
*/

if ((userAge >= 21) && loggedIn) {

	// Code will only execute if user is 21 or older, and logged in
	console.log("You can drink beer AND you're logged in!");
}

// Questions?
