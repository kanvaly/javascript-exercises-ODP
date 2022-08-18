const removeFromArray = function(arr, ...toRemove) {

    let arry = arr;
    let toRemov = toRemove;
    let sorted = [];
    let j = null;

    for (let i= toRemov.length-1; i>=0; i--){

        j= arry.length-1; //get the length of the new array of sorted elements
             
        while (j>=0){ //to walk through the elements of the array

            if (toRemov[i] !== arry[j]){
                sorted.unshift(arry[j]);
            }

            j--;
        }


        arry=sorted; //reinitialize the array with the newly sorted elements
        sorted=[]; //reinitialize sorted to an empty array
        
    }

    return arry;

};

// Do not edit below this line
module.exports = removeFromArray;
