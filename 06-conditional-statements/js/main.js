let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
	reply = `No soup for you.`;
} else if (soup && crackers) {
	reply = `Here's your order of ${soup} and crackers.`;
} else if (soup) {
	reply = `Here's your order of ${soup}.`;
} else {
	reply = `Sorry we are out of ${soup}.`;
}
console.log(reply);

// Decision Tree:
let age = 25;
let nationality = "Indian";

if (age >= 18) {
	if (nationality === "Indian") {
		console.log("You are eligible to vote in India.");
	} else {
		console.log("You are eligible to vote in your respective country.");
	}
} else {
	console.log("You are not eligible to vote.");
}
