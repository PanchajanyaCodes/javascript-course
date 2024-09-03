// var, let and const

// variables created using var can be redefined and have a function scope.
var x = 1;
console.log(x);

var x = 2;
console.log(x);

// variables created using var and let can be re-declared.
let f = 3;
console.log(f);

f = 5;
console.log(f);

x = 9;
console.log(x);

// variables created using const neither be re-defined nor be re-declared.
const PI = "3.1415962";
console.log(PI);

// Global Scope:
let k = 45;
console.log(k);

const z = 42;
console.log(z);

// Local Scope:

function myFunc() {
	var p = 10;
	const q = 5;

	{
		var p = 11; // function scoped
		const q = 6; // block scoped
		console.log(p);
		console.log(q);
	}
	console.log(p);
	console.log(q);
}
myFunc();
