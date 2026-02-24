'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

console.log(oneWord('hi My Name Is Lili'));
