const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCats = 0;
  matrix.map(item => {
    if(item.includes('^^')) countCats++;
  });
  return countCats;
};
