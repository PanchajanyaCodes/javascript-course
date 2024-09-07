/* // Making a Class.
class Pizza {
	constructor(pizzaType, pizzaSize) {
		this.type = pizzaType;
		this.size = pizzaSize;
		this.crust = "original";
		this._toppings = []; // use a different property name to avoid recursion
	}

	// Getter
	// It allows us to get properties of an object.
	get pizzaCrust() {
		return this.crust;
	}
  
  // Setter
	// It allows us to change the value of an object.
	set pizzaCrust(pizzaCrust) {
		
		this.crust = pizzaCrust;
	}

	// properties start with _ are known to be private or internal and not meant to be directly manipulated on rely on these properties.
	get toppings() {
		return this._toppings;
	}
  
	set toppings(topping) {
		this._toppings.push(topping);
	}

	bake() {
		console.log(
			`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
		);
	}
}

// Making Object from the Class.
const myPizza = new Pizza("pepperoni", "small");
myPizza.bake();

myPizza.toppings = "corn";
myPizza.toppings = "onion";
myPizza.pizzaCrust = "thin";
console.log(myPizza.pizzaCrust);
console.log(myPizza.toppings);
 */

/* // Base class for the 'SpecialtyPizza' class
class Pizza {
	constructor(pizzaSize) {
		this._size = pizzaSize;
		this._crust = "original";
	}

	getCrust() {
		return this._crust;
	}
	setCrust(pizzaCrust) {
		this._crust = pizzaCrust;
	}
} */

/* // this class inherits from the 'Pizza' class. (reuse properties and methods of parent class)
class SpecialtyPizza extends Pizza {
	constructor(pizzaSize) {
		super(pizzaSize);
		this.type = "This Works!";
	}
	slice() {
		console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
	}
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();
 */

/* // Making a Factory Function:
// Creates and returns an object. More simpler way to create objects.
function pizzaFactory(pizzaSize) {
	const crust = "original";
	const size = pizzaSize;
	return {
		bake: () => {
			console.log(`Baking a ${size} ${crust} crust pizza.`);
		},
	};
}
const myPizza = pizzaFactory("medium");
myPizza.bake();
 */

class Pizza {
	crust = "original";
	#sauce = "traditional"; // private field (indicted by '#')
	#size;
	constructor(pizzaSize) {
		this.#size = pizzaSize;
	}

	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
	hereYouGo() {
		console.log(
			`Here's your ${this.crust} ${this.#sauce} sauce ${
				this.#size
			} pizza. `
		);
	}
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust()); // 'getCrust' is a public field.
console.log(myPizza.sauce); // 'sauce' is a private field.
