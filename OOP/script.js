'use strict';

const Person = function (firstName, birthDate) {
  //Instance properties
  this.firstName = firstName;
  this.birthDate = birthDate;

  //bad practice
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthDate);
  //   };
};

const jonas = new Person('jonas', 1991);
console.log(jonas);
