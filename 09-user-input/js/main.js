// alert("Hello World!");

/* 
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
*/

// nullish coalescing operator (??) => It returns the right operand if the left operand is null or undefined.
let myVariable = null;
console.log(myVariable ?? "It might be null or undefined.");

let name = prompt("Please enter your name: ");
if (name) {
	console.log(`Before Trim ${name.length}`);
	console.log(`Before Trim ${name.trim().length}`);
	console.log(name.trim());
} else {
	console.log("You didn't enter your name.");
}
