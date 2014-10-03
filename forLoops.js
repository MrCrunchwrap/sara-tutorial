/* A common thing in programming is repetition. Maybe we
	want to perform the same operation on a collection of images.
	Perhaps we want to list out the most recent 10 photos of an
	Instagram feed. Behind the scenes of everything like this are
	loops. Loops let us repeat code based on conditions and counters
	that we set.
*/

// If I asked you to print all the numbers 1 - 100 to the console,
// it would get tedious very quickly:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
// ...
// so on and so forth


// The for loop looks weird at first, but it
// is incredibly powerful. In just a few lines
// of code, we can do the same thing that would have
// taken 100 lines.

for (var i = 0; i <= 100; i++) {

	console.log(i);

}

// There are a few pieces to this.

/*

for (statement1; statement2; statement3) {

	code that executes in loop
}

statement1 executes before the loop ever starts
it is typically used to initialize a counter or
something similar, as seen above. It is optional
so you could leave it empty.

statement2 is the condition we use to break out of
our loop. If the condition evaluates to 'true' the
loop will keep running. If it evaluates to 'false'
the loop will end. We must be careful to ensure that
this condition will eventually become false or we will
never end the loop, which will crash the browser. This
statement is also optional, but if no condition is supplied
you would need to insert a break in the loop.

statement3 is executed at the end of each loop. This is
typically used for incrementing a counter, as seen above.
This statement is also optional.

*/

// Let's look at another example of what we can do. Let's say
// we have an Array of names as such:

var names = ["Sara", "Michael", "Bob", "Joe"];

// What if we wanted to write code to say "Hello!" to each
// one of these people? It might look like this:

console.log("Hello Sara!");
console.log("Hello Michael!");
console.log("Hello Bob!");
console.log("Hello Joe!");

// Notice how we aren't even using our Array in the code above.
// Using our array and a loop we could greatly simplify that.

for (i = 0; i < names.length; i++ ) {
	console.log("Hello " + names[i] + " !");
}

// In this example we only saved two lines of code, but imagine
// if our array had 2000 names in it. We could turn 2000 lines
// into two lines.

// Write your own for loop below that will print your name to the
// console 50 times:
