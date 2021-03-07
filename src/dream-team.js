const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  return members
  	.sort()
  	.map(item => item.slice(0, 1).toUpperCase())
  	.join("");
};
