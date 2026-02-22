'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructuring َArray
// const { name, categories } = restaurant;
// console.log(name, categories);

// const arr = [2, 3, 4];
// const [x, z, y, a = 1] = arr;
// console.log(x, y, z, a);

// const [first, second] = restaurant.categories;
// console.log(first, second);

//swap old ver
// let a = 1;
// let b = 2;
// console.log('Before swap ' + a, b);
// const temp = a;
// a = b;
// b = temp;
// console.log('After swap ' + a, b);

//new ver

// let x = 10;
// let z = 2;

// console.log('Before swap ' + x, z);

// [x, z] = [z, x];

// console.log('After swap ' + x, z);

//
// const [starter, mainCourse] = [
//   restaurant.starterMenu[0],
//   restaurant.mainMenu[0],
// ];

// console.log(starter, mainCourse);

//objects
// const { name, openingHours, categories } = restaurant;

// console.log(name);
// console.log(openingHours);

///////////////////////////////////////
// Short Circuiting (&& and ||)

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// //
// // restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// //set default value
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// //same result
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////
// // The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////
// The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const printName = function (...menu) {
//   for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
//   }
// };

// printName(...restaurant.starterMenu);

///////////////////////////////////////
// // Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// console.log(ordersSet);
// console.log(new Set('Lily'));
// console.log(new Set('lily'));
// console.log(new Set('Marc'));

// console.log(ordersSet.size);
// console.log(ordersSet.add('Garlic Bread'));
// console.log(ordersSet.delete('pizza'));
// console.log(ordersSet);
// console.log(ordersSet.has('Risotto'));

// ordersSet.clear(); //delete all elements
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const newStaff = new Set(staff);
// console.log(newStaff);

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(staff).size); //unique amount size
// console.log(staff.length); //Array length

// // console.log(
// //   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size,
// // );

// console.log(new Set('jonasschmedtmann').size);

///////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// New Operations to Make Sets Useful!

// const italianFoods1 = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods1 = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference italian', uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference mexican', uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

//1️⃣ Comparing Data (VERY common in real apps)
// const oldTags = ['js', 'react', 'css'];
// const newTags = ['js', 'react', 'node'];

// const added = new Set(newTags).difference(new Set(oldTags));
// const removed = new Set(oldTags).difference(new Set(newTags));

// console.log(added, removed);

// //2️⃣ Permissions / Roles Systems
// const adminPermissions = new Set(['read', 'write', 'delete']);
// const userPermissions = new Set(['read']);

// console.log(adminPermissions.intersection(userPermissions));

// //3️⃣ Avoiding Duplicate Processing (VERY common)
// const processedUsers = new Set();

// //4️⃣ Data Sync / Caching Problems
// //Frontend receives new data from API and must compare with cached data.

// cachedIds.union(newIds);
// cachedIds.difference(newIds);

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// // Maps: Fundamentals
// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();

// rest.set([1, 2], 'test');
// console.log(rest.get[(1, 2)]); //undefined , why?
// //they are not the same object in the heap

// const arr = [1, 2];
// console.log(rest.set(arr, 'Test')); // its working now

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
// const answer = 3;
console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);
