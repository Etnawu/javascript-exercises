const removeFromArray = function(targetArray, ...itemRemove) {

   return targetArray.filter(item => !itemRemove.includes(item))

};





// Do not edit below this line
module.exports = removeFromArray;


