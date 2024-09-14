// Selecting an element by ID
const view1 = document.getElementById("view1");
console.log(view1); // Logs the element with ID "view1"

// Selecting an element by query selector
const view2 = document.querySelector("#view2");
console.log(view2); // Logs the element with ID "view2"

// Changing the display style of the selected elements
view1.style.display = "flex"; // Sets the display style of view1 to "flex"
view2.style.display = "none"; // Sets the display style of view2 to "none"

// Selecting elements by class name
const views = document.getElementsByClassName("view");
console.log(views); // Logs a live HTMLCollection of elements with class "view"

// Selecting elements by query selector all
const sameViews = document.querySelectorAll(".view");
console.log(sameViews); // Logs a static NodeList of elements with class "view"

// Selecting all div elements within view1
const divs = view1.querySelectorAll("div");
console.log(divs); // Logs a NodeList of all div elements within view1

// Selecting all div elements within view1 using getElementsByTagName
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs); // Logs an HTMLCollection of all div elements within view1

// Selecting even div elements within view1 using nth-of-type
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs); // Logs a NodeList of every second div element within view1

// Changing the background color of even div elements
for (let i = 0; i < evenDivs.length; i++) {
	evenDivs[i].style.backgroundColor = "blue"; // Sets the background color to blue
	// evenDivs[i].style.width = "200px"; // Uncomment to set width to 200px
	// evenDivs[i].style.height = "200px"; // Uncomment to set height to 200px
}

// Changing the text content of the first h1 element within a nav element
const navText = document.querySelector("nav h1");
console.log(navText); // Logs the first h1 element within a nav element
navText.textContent = "Hello World!"; // Changes the text content to "Hello World!"

// Changing the inner HTML and style of the nav element
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello!</h1> <p>This should align right.</p>"; // Sets new HTML content
navbar.style.justifyContent = "space-between"; // Sets the justify-content style to "space-between"

// Logging various properties of the first even div element
console.log(evenDivs[0]); // Logs the first even div element
console.log(evenDivs[0].parentElement); // Logs the parent element of the first even div
console.log(evenDivs[0].parentElement.children); // Logs the children of the parent element
console.log(evenDivs[0].parentElement.childNodes); // Logs the child nodes of the parent element
console.log(evenDivs[0].parentElement.hasChildNodes); // Logs whether the parent element has child nodes
console.log(evenDivs[0].parentElement.lastChild); // Logs the last child node of the parent element
console.log(evenDivs[0].parentElement.lastElementChild); // Logs the last child element of the parent element
console.log(evenDivs[0].parentElement.firstChild); // Logs the first child node of the parent element
console.log(evenDivs[0].parentElement.firstElementChild); // Logs the first child element of the parent element
console.log(evenDivs[0].nextSibling); // Logs the next sibling node of the first even div
console.log(evenDivs[0].nextElementSibling); // Logs the next sibling element of the first even div
console.log(evenDivs[0].previousSibling); // Logs the previous sibling node of the first even div
console.log(evenDivs[0].previousElementSibling); // Logs the previous sibling element of the first even div

// Changing the display style of view1 and view2
view1.style.display = "none"; // Sets the display style of view1 to "none"
view2.style.display = "flex"; // Sets the display style of view2 to "flex"
view2.style.flexDirection = "row"; // Sets the flex direction of view2 to "row"
view2.style.flexWrap = "wrap"; // Sets the flex wrap of view2 to "wrap"
view2.style.margin = "10px"; // Sets the margin of view2 to "10px"

// Removing all child elements from view2
while (view2.lastChild) {
	view2.lastChild.remove(); // Removes the last child element of view2
}

// Function to create a new div element and append it to a parent element
const createDivs = (parent, iter) => {
	const newDiv = document.createElement("div"); // Creates a new div element
	newDiv.textContent = iter; // Sets the text content to the iteration number
	newDiv.style.backgroundColor = "#000"; // Sets the background color to black
	newDiv.style.width = "100px"; // Sets the width to 100px
	newDiv.style.height = "100px"; // Sets the height to 100px
	newDiv.style.margin = "10px"; // Sets the margin to 10px
	newDiv.style.display = "flex"; // Sets the display style to "flex"
	newDiv.style.justifyContent = "center"; // Centers the content horizontally
	newDiv.style.alignItems = "center"; // Centers the content vertically
	parent.append(newDiv); // Appends the new div to the parent element
};

// Creating 12 new div elements and appending them to view2
for (let i = 1; i <= 12; i++) {
	createDivs(view2, i); // Calls createDivs with view2 as the parent and i as the iteration number
}
