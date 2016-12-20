var Person = require('./modules/Person');

alert('Your webpack has been refreshed!');

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Person('Jane Smith', 'green');
jane.greet();
