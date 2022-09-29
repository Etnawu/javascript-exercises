const sumAll = function(startNum, endNum) {
if ((typeof startNum !== "number") || (typeof endNum !== "number")) {
    return "ERROR"
}

else if ((startNum < 0 || endNum < 0)) {
    return "ERROR"
}

else if (startNum > 0 || endNum > 0){
    if (startNum > endNum){
        finalSum = ((startNum+endNum)*(startNum-endNum+1))/2;
        return finalSum
    }

    else if (endNum > startNum > 0){
        finalSum = ((startNum+endNum)*(endNum-startNum+1))/2;
        return finalSum
    }
}

else {"ERROR"}
    

};
// Do not edit below this line
module.exports = sumAll;
//    for (let i = startNum; i !== endNum; i++) {
//    finalSum = startNum + i;
//} 
//return finalSum
