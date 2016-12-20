import Person from './modules/Person';

// Adult inherits from Person
class Adult extends Person {
  payTaxes() {
    console.log(this.name + " has to pay taxes.")
  }
}

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Adult('Jane Smith', 'red');
jane.greet();
jane.payTaxes();
