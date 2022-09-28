const repeatString = function(string, num) {
    if (num < 0){return "ERROR"
}
    else{
        const stringRepeat = [];
        for (let i = 0; i < num; i++) {
            stringRepeat.push(string);
        }
        return stringRepeat.join('');
    }
};




// Do not edit below this line
module.exports = repeatString;
