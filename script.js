'use strict';

//notes constructor function
// 1.New {} is created
// 2.function is called , this = {}
// 3.{} is linked to a prototype - ( creates .__proto__ property and sets its value to the prototype property of the constructor function that is being called )
// 4. function automatically returns the {}

const Person = function (firstname, birthyear) {
  console.log(this);
  this.firstname = firstname;
  this.birthyear = birthyear;

  //could name the created property anything but by convention use the same name as the parameter
  // this.a = firstname;
  // this.b = birthyear;

  //don't add a method inside the function becasue each instance will have to carry this arounf and is bad for performance
  // this.calcAge = function () {};÷\
};

// a new object is created
const mary = new Person('Mary', 1991);

console.log(mary);

//can create as many new objects as you want
const monty = new Person('monty', 2020);
const lucy = new Person('lucy', 1254);
const betty = new Person('Betty', 1978);
console.log(monty);
console.log(lucy);
console.log(betty);

// to check if the obj is an instance of the constructor function in question
console.log(mary instanceof Person); //true

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

//so, monty,lucy,betty's prototype is the same as Person.prototype
console.log(Person.prototype);
console.log(monty.__proto__);
console.log(monty.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(monty));

//but prototype.person is not the prototype of person!!
// the confusion comes from bad naming of this property , it's more like "propertyOfLinkedObject" as a more clear description
console.log(Person.prototype.isPrototypeOf(Person));

// you can check if the object has it's own property or if the property is a prototype
//set a new prototype property
Person.prototype.species = 'Homo Sapiens';
console.log(monty.hasOwnProperty('firstname')); //true
console.log(monty.hasOwnProperty('Homo Sapiens')); //false is is a prototype not a property that was put on the object,
//you can check in dev tools, it will be in __proto__, under the objects set properties

lucy.calcAge();
