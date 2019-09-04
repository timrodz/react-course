'use strict';

console.log('App.js is running!');

// Conditional Rendering

/** 
 * Challenge: Create app object title/subtitle
 * Use title/subtitle in the template
 * Render template 
*/

/**
 * Only render subtitle with p tag if it exists - logical and operator (&&)
 * render new p tag - if options.length > 0 "Here are your options: " - Otherwise "No options"
 */
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options && app.options.length > 0 ? 'Here are your options: ' + app.options.join(', ') : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// Displaying objects
var user = {
  name: 'Juan',
  age: 23,
  location: 'Wellington'

  // Conditional rendering 1
};function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
