///////////////////////////////////////
// Working With Strings - Part 1

const maskCreditCard = function (number) {
  const str = number + '';

  const endPart = str.slice(-4);
  const maskNumber = endPart.padStart(str.length, '*');
  console.log(maskNumber);
};

maskCreditCard(64637836);
maskCreditCard(43378463864647384);
maskCreditCard('334859493847755774747');
