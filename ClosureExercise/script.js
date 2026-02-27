'use strict';

let f;

const g = function () {
  const a = 23;
  // console.log(a);
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
