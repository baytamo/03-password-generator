var passwordLength = 0;
var characters = {
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]
};
// Password Rules
var passwordRules = [];
var charIndex;
var charType;
var charLength;
var newCharIndex;
var newChar;
var newPassword = '';
// Prompt user for length of password
function getPasswordLength() {
 passwordLength = prompt('Please specify password length between 8 and 128 characters:');
}
while ((passwordLength < 8) || (passwordLength > 128)) {
  getPasswordLength():
}
// TODO: as you prompt the user for the password rules, you store the
// response to your passwordRules
if (confirm('Allow lowercase characters?')) {
  passwordRules.push('lowerCase');
}
//['lowercase']
if (confirm('Allow uppercase characters?')) {
  passwordRules.push('upperCase');
}
if (confirm('Allow numbers?')) {
  passwordRules.push('numbers');
}
// passwordRules
['lowerCase', 'upperCase', 'numbers', 'special'];
// You'll run a for-loop for the number of characters to generate based on passwordLength
for (var i = 0; i < passwordLength; i++) {
  charIndex = getRandomInt(passwordRules.length); // returned 2
  // charIndex = 2
  charType = passwordRules[charIndex]; 
  // charType = 'numbers'
  charLength = characters[charType].length // numbers.length is 10
  newCharIndex = getRandomInt(charLength); // number between 0 - 9
  newChar = characters[charType][newCharIndex]; // characters.numbers[newCharIndex]
  // example: characters.numbers[3], which is "4"
  newPassword = newPassword + newChar; // '' + '4', wnich is '4'
  // newPassword is '4'
}