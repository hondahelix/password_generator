// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordData = {
  numbers: "01234456789",
  alpabet: "abcdefghijklmopqrstuvwxyz",
  special: "[$&+,:;=?@#|'<>.-^*()%!]",

};
// console.log(passwordData.numbers);
// console.log(passwordData.alpabet);
// console.log(passwordData.special);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var pLen = prompt("Choose a length between 8 and 128");
  var charType = prompt("choose lowercase = l, uppercase =u , numeric =n , and/or special characters = s ");
  // console.log(pLen);
  // console.log(charType);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
