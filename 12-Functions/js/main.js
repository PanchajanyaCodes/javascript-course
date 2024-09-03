// Methods are the builtin functions (toLowerCase(), random()).

// User defined functions:
function sum(num1, num2) {
	if (num1 === undefined && num2 === undefined) {
		return "No arguments passed.";
	} else if (num1 === undefined) {
		return num2 + num2;
	} else if (num2 === undefined) {
		return num1 + num1;
	} else {
		return num1 + num2;
	}
}
console.log(sum(undefined, 2));

/* function getUserNameFromEmail(email) {
	return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("utkarsh@gmail.com")); */

// Anonymous Functions (functions without name declaration):
const getUserNameFromEmail = function (email) {
	return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("utkarsh@gmail.com"));

// Arrow Functions ()
const toProperCase = (name) => {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("UTkaRsH"));
