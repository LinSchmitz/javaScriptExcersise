///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

const correctName = function (passenger) {
  const passengerLowerCase = passenger.toLowerCase();
  const firstLetter = passengerLowerCase[0];
  console.log(firstLetter.toUpperCase() + passengerLowerCase.slice(1));
};

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
