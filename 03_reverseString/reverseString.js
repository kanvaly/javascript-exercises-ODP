const reverseString = function(string) {
    let strg = string;
    let reversed ="";
    let index = strg.length-1;

    while( index >= 0){
        reversed = reversed + strg.charAt(index);
        index--;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
