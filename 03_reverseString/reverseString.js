const reverseString = function(string) {
    stringArray = string.split('');
    reverseArray = stringArray.reverse();
    reversedString = reverseArray.join('').toString();
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
