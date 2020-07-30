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

let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

// user chooses length with at least 8 and not more than 128 characters
var passwordLength = 0;


// program starts when user clicks button
var generateMe = document.getElementById("generate");

generateMe.addEventListener("click", function () {
  document.querySelector("button");
  var passwordLength = prompt(
    "How many characters would you like to use in your password? 8-128 characters allowed"
  );

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128");
    var passwordLength = prompt(
      "How many characters would you like to use in your password? 8-128 characters allowed"
    );
  }

  // user choices will be recorded here in new arrays
  let userArray = [];
  let thePassword = [];

  // lower case; if user chooses this, items will be pushed to new array
  if (confirm("Would you like lower case letters in your password?")) {
    lowerCase.forEach(function (lowerCase) {
      userArray.push(lowerCase);
    });
  }

  // upper case; if user chooses this, items will be pushed to new array
  if (confirm("Would you like upper case letters in your password?")) {
    upperCase.forEach(function (upperCase) {
      userArray.push(upperCase);
    });
  }

  // numbers; if user chooses this, items will be pushed to new array
  if (confirm("Would you like numbers in your password?")) {
    numbers.forEach(function (numbers) {
      userArray.push(numbers);
    });

    // special characters; if user chooses this, items will be pushed to new array
    if (confirm("Would you like special characters in your password?")) {
      special.forEach(function (special) {
        userArray.push(special);
      });
    }

    // for loop to choose characters at random based on user preferences; at the end of this, a password will be generated
    for (var i = 0; i < passwordLength; i++) {
      var passwordString =
        userArray[Math.floor(Math.random() * userArray.length)];
      thePassword.push(passwordString);
    }
  }

  // writes password to window above button
  var passwordHere = document.getElementById("password");
  passwordHere.textContent = thePassword.join("");
});
