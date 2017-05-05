//function check will perform luhn algorithm
//given a number, returns if valid or not valid
function check(number){
  numberString = number.toString();
  numberLength = numberString.length;
  var loopCounter = 2;
  var sumDigit =[];
  var sumDigitString;
  var num = 0;
  for (var i = numberLength - 1; i>=0; i--){
    if (loopCounter % 2 == 0){
      sumDigit[i] = Number(numberString[i])*2;
      if (sumDigit[i] >= 10){
        sumDigitString = sumDigit[i].toString();
        sumDigit[i] = Number(sumDigitString[0])+Number(sumDigitString[1]);
      }
    } else {
      sumDigit[i] = Number(numberString[i]);
    }
    loopCounter++;
  }
  for (var numb of sumDigit){
    num += numb;
  }
  if (num % 10 == 0) return true;
  return false;
};

module.exports = check;

// console.log(check(4124));