// functions.js

// A function is a block of code that you may want to
// use more than one time. Once we've written a function
// we can 'call' it to use it without rewriting all the
// same code.

function myMultiply (param1, param2) {
	return param1 * param2;
}

// This function will return the product of param1 and param2.
// So imagine we needed to get the result of multiplying two numbers
// Now we can just write it like this:

var result = myMultiply(2, 3); // result is now 6

result = myMultiply(4, 5); //result is now 20

// We can use functions to help out with computation
// and replace scientific formulas, etc


// This function converts a farenheit temp to celsius

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

// You can even use the function in an expression like this:

var text = "The temperature is " + toCelsius(32) + " Centigrade";