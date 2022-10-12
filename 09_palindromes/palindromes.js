const palindromes = function (array) {
    let reverse = array.split("").reverse().join("");
    return reverse === array
};

// Do not edit below this line
module.exports = palindromes;
