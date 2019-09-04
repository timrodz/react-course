// Argument object - no longer bound with arrow functions
const add = function(a, b) {
	console.log(arguments);
	return a + b;
};
console.log(add(55, 1));

const addArrow = (a, b) => {
	// arguments don't exist in arrow functions
	// console.log(arguments);
	return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
	name: 'Juan',
	cities: ['Chitre', 'Panama', 'Wellington'],
	// When adding a function to an object property, `this` is bound to that object
	printPlacesLived: function() {
    // When defining an anonymous function, there is no bound `this`
    // this.cities.forEach(function(city) {
		// 	console.log(this.name + ' has lived in ' + city); // this.name is undefined
    // });
    
		// Fix: arrow functions take the context of their parent
		this.cities.forEach(city => {
			console.log(this.name + ' has lived in ' + city);
		});
	}
};

user.printPlacesLived();
