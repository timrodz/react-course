const square = function(x) {
	return x * x;
};

console.log(square(5));

// const squareArrow = x => {
// 	return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// Challenge: Arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create arrow function using verbose syntax
// Create arrow function using shorthand syntax
const getFirstNameVerbose = (name) => {
  return name.split(' ')[0];
}
console.log(getFirstNameVerbose('Juan Rodriguez'));

const getFirstNameShorthand = (name) => name.split(' ')[0];

console.log(getFirstNameShorthand('Mario Perez'));