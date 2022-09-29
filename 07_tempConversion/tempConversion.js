const ftoc = function(tempInF) {
  tempInC = (tempInF - 32)*(5/9);
  const result = Math.round(tempInC*10) / 10
  return result; 
};

const ctof = function(tempInC) {
  tempInF = (tempInC*(9/5)+32)
  const result = Math.round(tempInF*10) / 10
  return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
