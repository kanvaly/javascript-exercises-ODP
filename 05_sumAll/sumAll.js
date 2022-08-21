const sumAll = function(int1, int2) {
    nb1 = int1; nb2 = int2;

    if (nb1 < 0 || nb2 < 0){
        return "ERROR";
    }

    else if ((typeof nb1 !== "number") || (typeof int2 !== "number")){
        return "ERROR"
    }

    if (nb1 < nb2){
        let cp = nb2 - nb1; let sum = nb1;
        while (cp > 0){
            sum = sum + nb1 + cp;
            cp--;
        }

        return sum;
    }

    else {
        let cp = nb1 - nb2; sum = nb2;
        while (cp > 0){
            sum = sum + nb2 + cp;
            cp--;
        }

        return sum;
    }


};

// Do not edit below this line
module.exports = sumAll;
