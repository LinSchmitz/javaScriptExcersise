const input = document.querySelector('.inp');
const addButton = document.querySelector('.btn');
const list = document.querySelector('.ul');

addButton.addEventListener('click', function () {
  const listItem = document.createElement('li');
  const xBtn = document.createElement('button');

  xBtn.textContent = 'X';
  listItem.textContent = input.value + ' ';

  listItem.append(xBtn);
  list.append(listItem);

  input.value = '';
});

// delete item from list
list.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});
