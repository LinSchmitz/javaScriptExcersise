'use strict';

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

const addTax = function (rate, value) {
  const total = value + value * rate;

  // nested helper function for VAT
  const addVAT = function (value) {
    return value + value * 0.23;
  };

  // return both total and addVAT function
  return {
    total,
    addVAT,
  };
};

// normal tax
const result1 = addTax(0.1, 200);
console.log(result1.total); // 220 (10% tax)
console.log(result1.addVAT(100)); // 123 (23% VAT)
console.log(result1.addVAT(50)); // 61.5
