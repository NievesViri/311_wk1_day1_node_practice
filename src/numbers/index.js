const { numbers } = require("..");

const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0;
};

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((num1, num2) => num1 + num2, 0);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  return arr === sum;
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
