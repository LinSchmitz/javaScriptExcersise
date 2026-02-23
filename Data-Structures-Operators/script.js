///////////////////////////////////////
// Working With Strings - Part 1

const capitalName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalName('Jonas schmedtmann');
capitalName('jonas and matilda schmedtmann');
