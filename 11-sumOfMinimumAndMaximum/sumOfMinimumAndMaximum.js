const { max } = require("moment");

function sumOfMinimumAndMaximum(nums) {
  return Math.min.apply(Math,nums) + Math.max.apply(Math,nums);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;