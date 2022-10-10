


const add = function(x, y) {
  return x + y
	
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(array) {
	return array.reduce((first , last) => first + last, 0)
};

const multiply = function(array) {
  return array.length
    ? array.reduce((first , last) => first * last): 0;
};

const power = function(x, y) {
  return Math.pow(x,y)
};

const factorial = function(x) {
	let y = 1;
  for (let i = 2; i <= x; i++){
    y = y*i;
  }
  return y
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
