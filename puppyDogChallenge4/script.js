'use strict';
const julia = [9, 2.5, 6, 8, 3]; //[3, 5, 2, 12, 7];
const kate = [10, 5, 6, 1, 4]; //[4, 1, 15, 8, 3];

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
//    the recommended food portion and add it to the object as a new property. Do
//    not create a new array, simply loop over the array. Forumla:
//    recommendedFood = weight ** 0.75 * 28 . (The result is in grams of
//    food, and the weight needs to be in kg)

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
