/* const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
 */

// Syntax => addEventListener(event, function, useCapture)

/* // This is the event listener function.
const doSomething = () => {
	alert("done something.");
};

// adding event listener
h2.addEventListener("click", doSomething, false);

// removing event listener
h2.removeEventListener("click", doSomething, false);

// working with the targeted or clicked element
h2.addEventListener("click", (event) => {
	console.log(event.target);
	event.target.textContent = "Clicked";
});
 */
/* 
// this function is called when the element is loaded completely
document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		initApp();
	}
});

const initApp = () => {
	const view = document.querySelector("#view2");
	const div = view.querySelector("div");
	const h2 = div.querySelector("h2");

	view.addEventListener(
		"click",
		(event) => {
			// view.style.backgroundColor = "steelblue";
			// view.classList.add("purple"); // adding class
			// view.classList.remove("darkblue"); // removing class
			view.classList.toggle("purple"); // toggling class
			view.classList.toggle("darkblue"); // toggling class
		},
		false
	);

	div.addEventListener(
		"click",
		(event) => {
			// div.style.backgroundColor = "seagreen";
			div.classList.toggle("darkblue"); // toggling class
			div.classList.toggle("blue"); // toggling class
		},
		false
	);

	h2.addEventListener(
		"click",
		(event) => {
			const myText = event.target.textContent;
			myText === "My 2nd View"
				? (event.target.textContent = "Clicked")
				: (event.target.textContent = "My 2nd View");
		},
		false
	);
};
 */

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		initApp();
	}
});

const initApp = () => {
	const view3 = document.querySelector("#view3");
	const myForm = view3.querySelector("#myForm");
	myForm.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log("submit event");
	});
};
