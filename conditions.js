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

/* There's another keyword that allows us to have multiple
	choices of logic to go down depending on what conditions
	are true or false. It's called 'else' and it looks like this:

if (condition) {
    block of code to be executed if the condition is true
} else { 
    block of code to be executed if the condition is false
}

*/

// So we can use it to for more complex logic

var time = 20;
var greeting = "";

if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// There's another expression that can be used as shorthand to do this.
// It is known as the ternary operator, or the conditional operator

// broken down, the ternary operator looks like this

// condition ? true statement : false statement;

var age = 17;
var text = "";

text = (age < 18) ? "Too young" : "Old enough";

// You can combine if and else together to have even more than
// two choices:

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// There's really no limit to how many "else if" statements
// you can have:

if (time < 5) {
    greeting = "Good early morning";
} else if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else if (time < 30) {
    greeting = "Good afternoon";
} else if (time < 40) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

// There's a better construct for these situations though,
// called the 'switch' statement. See switches.js for
// an example.
