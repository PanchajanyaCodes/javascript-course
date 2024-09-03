// While Loop:
/* let myNumber = 1;
while (myNumber <= 50) {
	console.log(myNumber);
	myNumber++;
}
 */

let name = "Dave";
let counter = 0;
let myLetter;
while (counter <= 3) {
	myLetter = name[counter];
	console.log(myLetter);
	if (counter === 1) {
		counter += 2;
		continue;
	}
	if (myLetter === "v") {
		break;
	}
	counter++;
}
console.log(counter);

// Do While Loop:
// it will run at least on time, even if the condition fails.
/* let myNumber = 500;
do {
	console.log(myNumber);
	myNumber++;
} while (myNumber <= 50);
 */

// For Loop:
/* for (let i = 1; i <= 10; i++) {
	console.log(i);
} */

/* for (let i = 1; i <= 10; ) {
	console.log(i);
	i++;
} */

/* let i = 1;
for (; i <= 10; ) {
	console.log(i);
	i++;
}
 */
