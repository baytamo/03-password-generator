// object containing arrays of lowercase, uppercase, numeric, and/or special characters
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];

// program starts when user clicks button
var generateMe = document.getElementById("generate");
var passwordLength = 0;

generateMe.addEventListener("click", function () {
  var passwordLength = prompt(
    "How many characters would you like to use in your password?\n8-128 characters allowed"
  );

  // while loop limits user input to a number between 8 and 128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength == null || passwordLength == "") {
    if (passwordLength == null || passwordLength == "") {
      var exit = confirm("Are you sure you want to exit?\nOK = yes, Cancel = no");
      if (exit === true) {
        return;
      } else {
        var passwordLength = prompt(
          "How many characters would you like to use in your password?\n8-128 characters allowed");
      }
    } else {
      alert("Try again!\nPlease choose a number between 8 and 128.");
      var passwordLength = prompt(
        "How many characters would you like to use in your password?\n8-128 characters allowed" );
    }
  }

  // user choices will be recorded here in new array
  let userArray = [];

  // lower case; if user chooses this, items will be pushed to new array
  if (confirm("Would you like lower case letters in your password?\nexample: a b c d e\nOK = yes, Cancel = no")) {
    lowerCase.forEach(function (lowerCase) {
      userArray.push(lowerCase);
    });
  }

  // upper case; if user chooses this, items will be pushed to new array
  if (confirm("Would you like upper case letters in your password?\nexample: A B C D E\nOK = yes, Cancel = no")) {
    upperCase.forEach(function (upperCase) {
      userArray.push(upperCase);
    });
  }

  // numbers; if user chooses this, items will be pushed to new array
  if (confirm("Would you like numbers in your password?\nexample: 1 2 3 4 5\nOK = yes, Cancel = no")) {
    numbers.forEach(function (numbers) {
      userArray.push(numbers);
    });
  }

  // special characters; if user chooses this, items will be pushed to new array
  if (confirm("Would you like special characters in your password?\nexample: ! @ # $ %\nOK = yes, Cancel = no")) {
    special.forEach(function (special) {
      userArray.push(special);
    });
  }

  // randomly generated characters will be pushed to this array
  let thePassword = [];

  // for loop to choose characters at random based on user preferences; generated characters are pushed into new array
  for (var i = 0; i < passwordLength; i++) {
    var passwordString =
      userArray[Math.floor(Math.random() * userArray.length)];
    thePassword.push(passwordString);
  }

  // writes password to window above button
  var passwordHere = document.getElementById("password");
  passwordHere.textContent = thePassword.join("");

  // clear button function
  let clearPassword = document.getElementById("clearMe");

  clearPassword.addEventListener("click", function () {
    document.getElementById("password").textContent = "";
  });
});
