'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
//    method does 2 things:
//    1.1. Display a prompt window for the user to input the number of the
//    selected option. The prompt should look like this:
//    What is your favourite programming language?
//    0: JavaScript
//    1: Python
//    2: Rust
//    3: C++
//    (Write option number)
//    1.2. Based on the input number, update the 'answers' array property. For
//    example, if the option is 3, increase the value at position 3 of the array by

const registerNewAnswer = function () {
  const inputNumber = Number(
    prompt(`What is your favourite programming language?\n
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        `),
  );
  console.log(inputNumber);
  poll.answers.push(inputNumber);
  console.log(poll.answers);
};
registerNewAnswer();
//  Data 1: [5, 2, 3]
//   Data 2: [1, 5, 3, 9, 6, 1]
