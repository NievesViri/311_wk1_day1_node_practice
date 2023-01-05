const split = (str, delim) => {
  // write code for strings.split
  const strSplit = str.split(delim);
  return strSplit;
};

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/(..?)/g);
};

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("");
};

module.exports = {
  split,
  pairs,
  reverse,
};
