'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // [0, 0, 0, 0]
  answers: new Array(4).fill(0),

  // 1. Register answer
  registerNewAnswer() {
    const inputNumber = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
      ),
    );

    // Validate input
    if (
      Number.isInteger(inputNumber) &&
      inputNumber >= 0 &&
      inputNumber < this.answers.length
    ) {
      this.answers[inputNumber]++;
    }

    // 4. Display results after answering
    this.displayResults();
    this.displayResults('string');
  },

  // 3. Display results
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// 2. Call when user clicks button
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/* ======================
   BONUS (Different Data)
   ====================== */

// Test data (NOT inside poll)
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

// Fake objects so "this.answers" works
poll.displayResults.call({ answers: data1 }, 'array');
poll.displayResults.call({ answers: data1 }, 'string');

poll.displayResults.call({ answers: data2 }, 'array');
poll.displayResults.call({ answers: data2 }, 'string');
