'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name} `);
//   };
// };

// greet('Hey')('Jonas');

const greet = greeting => name => console.log(`${greeting} ${name} `);

greet('Hi')('Jonas');

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// // console.log(oneWord('hi My Name Is Lili'));

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transform = function (str, fn) {
//   console.log(fn(str));
// };

// transform('hi my Name Is Lili', upperFirstWord);
