// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var num = cardNumber.toString();
  var num1 = num.substr(0, 2); 
  var num2 = num.substr(0, 4);
  var num3 = num.substr(0, 1);
  var num4 = num.substr(0, 3);
  var num5 = num.substr(0, 6);
    if ((num1 == '34' || num1 == '37') && num.length == 15) {
      return 'American Express';
}
else if (num1 >= '51' && num1 <= '55'&& num.length == 16){
  return 'MasterCard';
}
else if ((num1 == '38' || num1 == '39') && num.length == 14){
  return 'Diner\'s Club';
}
else if ((num2 == '4905' || num2 == '4903' || num2 == '4911' || num2 == '4936' || num2 == '6333' || num2 == '6759') && (num.length == 16 || num.length == 18 || num.length == 19)){
  return 'Switch';
}
else if ((num5 == '564182' || num5 == '633110') && (num.length == 16 || num.length == 18 || num.length == 19)){
  return 'Switch';
}
else if (num3 == '4' && (num.length == 13 || num.length == 16 || num.length == 19) ){
  return 'Visa';
}
else if ((num2 == '5018' || num2 == '5020' || num2 == '5038' || num2 == '6304') && (num.length <= 19 && num.length >= 12)){
  return 'Maestro';
}
else if ((num2 == '6011') && (num.length == 19 || num.length == 16)){
  return 'Discover';
}
else if ((num4 >= '644' && num4 <= '649') && (num.length == 19 || num.length == 16)){
  return 'Discover';
}
else if ((num1 == "65") && (num.length == 19 || num.length == 16)){
  return 'Discover';
}
else if ((num5 >= '622126' && num5 <= '622925') && (num.length <= 19 && num.length >= 16)){
  return 'China UnionPay';
}
else if ((num4 >= '624' && num4 <= '626') && (num.length <= 19 && num.length >= 16)){
  return 'China UnionPay';
}
else if ((num2 >= '6282' && num2 <= '6288') && (num.length <= 19 && num.length >= 16)){
  return 'China UnionPay';
}
else {
 return 'This card is not in our database, please enter your number again.';
}
};

console.log(detectNetwork('564182337890123456'))

