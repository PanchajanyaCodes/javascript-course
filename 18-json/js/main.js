// JSON (JavaScript Object Notation)
// used to send and receive data in many languages not just in JavaScript.

const myObject = {
	name: "Dave",
	hobbies: ["eat", "sleep", "code"],
	hello: () => {
		console.log("Hello!");
	},
};
console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);

// convert JavaScript object to a JSON string.
const sendJson = JSON.stringify(myObject);
console.log(sendJson);
console.log(typeof sendJson); // string
console.log(sendJson.name); // undefined

// convert json into an object.
const receiveJson = JSON.parse(sendJson);
console.log(receiveJson);
console.log(receiveJson.name); // Dave
console.log(typeof receiveJson);
