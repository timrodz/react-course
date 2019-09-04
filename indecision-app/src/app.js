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
  options: [
    'One',
    'Two'
  ]
}
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options.join(', ') : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div >
);

// Displaying objects
var user = {
  name: 'Juan',
  age: 23,
  location: 'Wellington'
}

// Conditional rendering 1
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    {/* Ternary operator (?:) */}
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {/* Logical AND (&&) operator */}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {/* Logical if-statement */}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);