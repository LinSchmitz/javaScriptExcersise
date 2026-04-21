'use strict';
const julia = [9, 2.5, 6, 8, 3]; //[3, 5, 2, 12, 7];
const kate = [10, 5, 6, 1, 4]; //[4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const juliaDogs = julia.slice();
  juliaDogs.splice(0, 1);
  juliaDogs.splice(-2);
  console.log(juliaDogs);
  const allDogs = [...juliaDogs, ...kate];
  console.log(allDogs);

  // 3
  allDogs.forEach(function (dog, i) {
    const type = dog >= 3 ? 'is an adult' : 'is still a puppy 🐶';
    console.log(`Dog number ${i + 1} ${type} and has ${dog} years old.`);
  });
};

// checkDogs(julia, kate);

////////////////////////
///////////////////////
//1
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

//   console.log(humanAges);
//   //2

//   const adults = humanAges.filter(age => age >= 16);
//   const poppy = humanAges.filter(age => age <= 16);
//   // console.log(adults);
//   // console.log(poppy);

//   //3
//   const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return avg;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'),
// and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
//  humanAge = 2 _ dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge _ 4.

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs
// that are at least 18 years old)

// 3. Calculate the average human age of all adult dogs (you should already know from other
// challenges how we calculate averages 😉)

// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

///////////////////////////////////////
// Coding Challenge #3

// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as
// an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 16)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
