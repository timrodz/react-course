'use strict';

// Argument object - no longer bound with arrow functions
var add = function add(a, b) {
	console.log(arguments);
	return a + b;
};
console.log(add(55, 1));

var addArrow = function addArrow(a, b) {
	// arguments don't exist in arrow functions
	// console.log(arguments);
	return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

var user = {
	name: 'Juan',
	cities: ['Chitre', 'Panama', 'Wellington'],
	// When adding a function to an object property, `this` is bound to that object
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		// When defining an anonymous function, there is no bound `this`
		// this.cities.forEach(function(city) {
		// 	console.log(this.name + ' has lived in ' + city); // this.name is undefined
		// });

		// Fix: arrow functions take the context of their parent
		this.cities.forEach(function (city) {
			console.log(_this.name + ' has lived in ' + city);
		});
	}
};

user.printPlacesLived();
