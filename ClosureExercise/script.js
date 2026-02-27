'use strict';

// Closures

let f = 3;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
  // f = 50;
};

g();
f();
// console.log(f);
