'use strict';

const Person = function (firstname, birthyear) {
  console.log(this);
  this.firstname = firstname;
  this.birthyear = birthyear;

  //could name the created property anything but by convention use the same name as the parameter
  // this.a = firstname;
  // this.b = birthyear;

  //adding a method
  this.calcAge = function () {};
};

// a new object is created
const mary = new Person('Mary', 1991);

console.log(mary);

//can create as many new objects as you want
const monty = new Person('Bernard', 2020);
const lucy = new Person('lucy', 1254);
const betty = new Person('Betty', 1978);
console.log(monty);
console.log(lucy);
console.log(betty);

// to check if the obj is an instance of the constructor function in question
console.log(mary instanceof Person); //true
