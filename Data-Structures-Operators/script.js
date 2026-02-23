///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

// let position = 0;

// for (const air of airline) {
//   for (const i = 0; i <= airline.length; i++) {
//     const nextPosition = airline.indexOf(' ') + 1;
//     console.log(airline.slice(position, nextPosition));
//     i = nextPosition;
//   }
// }

const passenger = 'jOnAS';
const passengerLowerCase = passenger.toLowerCase();
const firstLetter = passengerLowerCase[0];
console.log(firstLetter.toUpperCase() + passengerLowerCase.slice(1));
