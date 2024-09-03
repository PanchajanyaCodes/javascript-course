// Objects are key-value pairs.

// Making Object:
const anotherObj = {
	alive: true,
	answer: 42,
	hobbies: ["Eat", "Sleep", "Code"],
	beverage: {
		morning: "Coffee",
		afternoon: "Iced Tea",
	},
	action: function () {
		// 'this' keyword refers to the object that is currently executing the code.
		return `Time for ${this.beverage.morning}`;
	},
};

// Accessing object values.
console.log(anotherObj.alive);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["beverage"]["morning"]);
console.log(anotherObj.action());

// vehicle object
const vehicle = {
	wheels: 4,
	engine: function () {
		return "Vrooooom!";
	},
};

// car object
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
	return "Wooooosh!";
};
console.log(car.wheels); // inheritance (truck inherits all the properties of vehicle object.)
console.log(car.engine());

// tesla object
const Tesla = Object.create(car);
Tesla.engine = function () {
	return "Shhhhhh!";
};
console.log(Tesla.wheels);
console.log(Tesla.engine());

// band object
const band = {
	vocals: "Robert Plant",
	guitar: "Jimmy Page",
	bass: "John Paul Jones",
	drums: "John Bonham",
};
// delete property from the object
delete band.drums;

// checks for property existence
console.log(band.hasOwnProperty("drums"));

// get keys and values from the object
console.log(Object.keys(band));
console.log(Object.values(band));

// for in loop
for (let job in band) {
	console.log(`On ${job}, it's ${band[job]}`);
}

// Destructuring Objects;

// variable named 'myGuitar' holds the value of 'guitar' key from the 'band' object.
const { guitar: myGuitar, bass: myBass } = band;
console.log(myGuitar);
console.log(myBass);

const { vocals, guitar, bass, drums } = band;
console.log(vocals);

// this function takes an object with a 'vocals' property and returns a string.
// curly braces around the parameter represent the destructuring.
function sings({ vocals }) {
	return `${vocals} sings!`;
}
console.log(sings(band));
