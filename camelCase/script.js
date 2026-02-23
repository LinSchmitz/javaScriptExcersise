document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log(textArea.value);
});
