'use strict';

// Test data
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const results1 = { answers: data1 };
const results2 = { answers: data2 };

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const inputNumber = Number(
      prompt(`What is your favourite programming language?\n
        0: JavaScript
        1: Python
        2: Rust
        3: C++`),
    );

    if (
      Number.isInteger(inputNumber) &&
      inputNumber >= 0 &&
      inputNumber <= this.options.length - 1
    ) {
      this.answers[inputNumber]++;
    }

    // 📢 show results
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bind displayResults to those objects
const showResults1 = poll.displayResults.bind(results1);
const showResults2 = poll.displayResults.bind(results2);

// Call with both options
showResults1('array');
showResults1('string');

showResults2('array');
showResults2('string');
