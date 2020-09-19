// Assignment Code
var generateBtn = document.querySelector("#generate");

var inputQ = ["lowercase? y/n","uppercase ? y/n","numeric? y/n","special characters? y/n"];
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
  var charType = [];
  for(var i =0; i<inputQ.length; i++){
    charType.push(prompt("Include " + inputQ[i]));
    console.log(charType);
  }
  validInput(pLen,charType);
}

function validInput(l,t){
  console.log(l);
  console.log(t);
  if((parseInt(l)<8) || (parseInt(l)>128)){
    alert("PICK A NUMBER 8 THROUGH 128!!!!");
    generatePassword();
    //console.log("1 failed");
  }

  for(var i=0; i<t.length; i++){
    console.log(t[i]);
    console.log(t[i]);
    if((t[i]==="y") || (t[i]==="n")){
      console.log("we made it");
      return true;
    }
    else{
        alert("ANSWER y FOR YES AND n FOR NO!!");
        generatePassword();
        console.log("2 failed")
    }
  }
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
