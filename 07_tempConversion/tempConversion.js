const ftoc = function(far) {

  let temp = far;
  temp = ((temp - 32) * 5 / 9);

  return Math.round(temp*10)/10; //round to one decimal place. Could use toFixed() but this function returns a sting

};

const ctof = function(cel) {

  let temp = cel;
  temp = (temp * 9 / 5 + 32);


  return Math.round(temp*10)/10; //round to one decimal place. Could use toFixed() but this function returns a sting

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
