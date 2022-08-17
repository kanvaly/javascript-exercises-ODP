const repeatString = function(strng, num) {

    let word = strng; //string to be repeated
    let factor= parseInt(num);

    //Make sure that the provide string is a correct one
    if (typeof word !== "string"){
        return "You must provide a string as first parameter"
    }
    
    // Make sure the provided number is an integer comprised between 1 and 999
    if (factor < 0 || factor > 999){
        return "ERROR"
    }

    //Check for blank strings. Always return " " no matter the string length or value of factor
   

    //Normal flow of the function
    let repeatedWord= "";

    while (factor > 0){
        repeatedWord = repeatedWord + word;
        factor--;
    }


    return repeatedWord;

};

// Do not edit below this line
module.exports = repeatString;
