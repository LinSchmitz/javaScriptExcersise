document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

textArea.value = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;

btn.addEventListener('click', function () {
  // console.log(textArea.value);
  const splitWord = textArea.value.split('\n');
  for (let i = 0; i < splitWord.length; i++) {
    const newWord = splitWord[i].split('_');
    const camelCase =
      newWord[0].toLowerCase() +
      newWord[1][0].toUpperCase() +
      newWord[1].slice(1).toLowerCase();
    // console.log(camelCase);
    const final = camelCase + '✅'.repeat(i + 1);
    console.log(final);
  }
});
