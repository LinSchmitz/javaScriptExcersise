'use strict';

function calcAge(birthYear) {
  const age = 2026 - birthYear;

  function printAge() {
    const optput = `${firstName} has ${age}, born in ${birthYear}`;
    console.log(optput);
  }
  printAge();

  return age;
}

const firstName = 'lil';
calcAge(1991);
