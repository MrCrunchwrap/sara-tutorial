//comparisons.js

var x = 5;

// equal to
x == 8;	// false

// equal to
x == 5;	// true

// equal to and same type
x === "5"; // false

// equal to and same type
x === 5; // true

// not equal
x != 8; // true

// not equal or not same type
x !== "5"; // true

// not equal or not same type
x !== 5;	// false

// greater than
x > 8; // false

// less than
x < 8; // true

// greater than or equal to
x >= 8; // false

// less than or equal to
x <= 8; // true

/* We can also chain these conditions together to form more
	complex logic. Maybe we would want to check that a user is
	both logged in AND has a credit card saved to their account
	before we let them use 1-Click purchasing (a la Amazon).
*/

var a = 6;
var b = 3;


// AND operator

(a < 10 && b > 1) // true, both these expressions are true

// OR operator

(a == 5 || b == 3) // true, a is not 5, but b is 3

// NOT operator

!(x == y) // true, x == y evaluates to false and then ! negates that

// You could get as fancy as you want with this

( a < 7 && a > 0 && b != 5 && b >= 3 ) 
// true, a is less than 7, greater than 0, b is not equal to 5 and is less than or equal to 3

// These conditons don't help us much on their own, but we can use them in if statements to
// give us control over what code executes in certain conditons. conditions.js will explain
// more about this.

var age = 17
var text = "Old enough";

if (age < 18) {
	text = "Too young";
}

// We just set text to "Too young" only if age is less than 18. If we changed age to be 18 or higher
// text would remain "Old enough".