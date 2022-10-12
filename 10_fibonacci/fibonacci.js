const fibonacci = function(x) {
    if (x < 0)return "OOPS";
    else{
    let a = 0;
    let b = 1;
    for (let i = 1; i < x; i++){
        let c = b;
        b = a + b;
        a = c;
    }
    return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
