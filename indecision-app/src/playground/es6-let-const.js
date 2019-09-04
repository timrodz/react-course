// var
var nameVar = 'Andrew';
nameVar = 'Mike'
// Var can also be re-defined
var nameVar = 'Jay';
console.log('nameVar', nameVar);

// let
let nameLet = 'Jen';
nameLet = 'Julie';
// Not possible to re-define
// let nameLet = 'Jasper'; // This will result in an error
console.log('nameLet', nameLet);

// const
const nameConst = 'Lucsy';
// Cannot re-assign nor re-define
// nameConst = 'Gunther';
// const nameConst = 'Frank';
console.log('nameConst', nameConst);


/**
 * var = function scoped 
 * let/const = block + function scoped
 */

// Function scoping
function getPetName() {
  var petName = 'Hal';
  return petName
}

const petName = getPetName();
console.log(petName);

// -- Block scoping
// var - Never use
console.log('var');

var fullName = 'Juan Morais';

if (fullName) {
  var firstNameVar = fullName.split(' ')[0];
  console.log(firstNameVar);
}

console.log(firstNameVar);
// Output:
// Juan
// Juan


// Fix the undefined: Define let before calling inside the if-statement

console.log('let/const with no undefined');
var fullName = 'Juan Morais';
let firstNameLet;

if (fullName) {
  firstNameLet = fullName.split(' ')[0];
  console.log(firstNameLet);
}

console.log(firstNameLet);
// Output
// Juan
// Juan


// let/const: Defining inside an if-statement will only exist on that scope

console.log('let/const with undefined');
var fullName = 'Juan Morais';

if (fullName) {
  // Same effect with let
  const firstNameConst = fullName.split(' ')[0];
  console.log(firstNameConst);
}

console.log(firstNameConst);
  // Output
  // Juan
  // Uncaught ReferenceError: firstName is not defined
