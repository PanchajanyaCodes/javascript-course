"use strict"; // using this line helps to catch common errors, coding mistakes and unsafe actions.
// variable = "Dave"; // reference error
// console.log(variable);

// Object..create() // syntax error

// const name = "Dave";
// name = "Joe"; // typeError

// Catching and Handling Errors:
// if code inside 'try' block fails then the code inside the 'catch' block is executed. else the catch block is skipped. but code inside the finally block will be executed no matter what.
const makeError = () => {
	let i = 1;
	while (i <= 5) {
		try {
			// const name = "Dave";
			// name = "Joe";
			throw new customError("This is a custom error!");
		} catch (err) {
			// console.log(err);
			// console.error(err);
			// console.warn(err);
			// console.table(err);
			console.error(err.name);
			console.error(err.message);
			console.error(err.stack);
		} finally {
			console.log("...finally");
			i++;
		}
	}
};

makeError();

/* function customError(message) {
	this.message = message;
	this.name = "customError";
	this.stack = `${this.name} ${this.message}`;
}
 */
