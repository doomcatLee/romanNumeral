// Back end business logic
var romanIndex = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M", "MM", "MMM"]
]

var seperateNumber = function(number) {
  var digits = [];
  var numberOfDigits = number.length;
  if (numberOfDigits === 1) {
    digits.push(number.slice(0, 1));
    return digits;
  } else if (numberOfDigits === 2) {
    digits.push(number.slice(0, 1) + "0");
    digits.push(number.slice(1));
    return digits;
  } else if (numberOfDigits === 3) {
    digits.push(number.slice(0, 1) + "00");
    digits.push(number.slice(1, 2) + "0");
    digits.push(number.slice(2));
    return digits;
  } else if (numberOfDigits === 4) {
    digits.push(number.slice(0, 1) + "000");
    digits.push(number.slice(1, 2) + "00");
    digits.push(number.slice(2, 3) + "0");
    digits.push(number.slice(3));
    return digits;
  } else {
    console.log(digits);
  }
}

//convert a number to pull out roman numeral string from array
var convert = function(number) {
  //Math function ((N/10)- 1) to spit out index
  if (number.toString().length === 1) {
    var index = ((number / 1) - 1)
    var roman = romanIndex[0][index];
  } else if (number.toString().length === 2) {
    var index = ((number / 10) - 1)
    var roman = romanIndex[1][index];
  } else if (number.toString().length === 3) {
    var index = ((number / 100) - 1)
    var roman = romanIndex[2][index];
  } else if (number.toString().length === 4) {
    var index = ((number / 1000) - 1)
    var roman = romanIndex[3][index];
  }
  return roman;
};

//converts array of nth numbers of digits array to string
var convertArrayToString = function(array) {
  var newArray = array.map(function(x) {
    return convert(x);
  });
  var output = newArray.join("");
  return output;
}
// jQuery user interface logic.
$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();
    var roman = $("input#roman").val();

    var result = convertArrayToString(seperateNumber(roman));
    $("#result").text(result);
  });
});;
