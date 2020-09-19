// Assignment Code
var generateBtn = document.querySelector("#generate");

var inputQ = ["lowercase? y/n","uppercase ? y/n","numeric? y/n","special characters? y/n"];
var passwordData = ["abcdefghijklmopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUV","01234456789","[$&+,:;=?@#|'<>.-^*()%!]"];

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
  if (validInput(pLen,charType===true)){
    var pass = make(pLen,charType);
    console.log(pass);
    return pass;
  }
}
//makes password
function make(x,y){
  var data = "";
  var charArray = [];
  var made = "";
  for(var j =0; j<4; j++){
    if(y[j]==="y"){
      data=data + passwordData[j];
      charArray = data.split("");
    }
  }
  for(var i =0; i<x; i++){
    var data 
    var dataLen = charArray.length;
    //console.log(dataLen);
    n = Math.floor(Math.random()*(dataLen));
    console.log("-------------");
    console.log(n);
    made = made+charArray[n];
  }
  return made;
}

//checks to see if its a valid input
function validInput(l,t){
  console.log(l);
  console.log(t);
  if((parseInt(l)<8) || (parseInt(l)>128)){
    alert("PICK A NUMBER 8 THROUGH 128!!!!");
    generatePassword();
    console.log("1 failed");
  }
  else{
    return true;
  }

  for(var i=0; i<t.length; i++){
    //console.log(t[i]);
    console.log(t);
    if((t[i]==="y") || (t[i]==="n") ){
      console.log("we made it");
      if(t!==["n","n","n","n"]){
        return true;
      }
      else{
        console.log("3 failed")
        alert("CANNOT ALL BE NO");
        generatePassword();
        return false;
      }

    }
    else{
        alert("ANSWER y FOR YES AND n FOR NO!!");
        generatePassword();
        //console.log("2 failed")
        return false;
    }
  }
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
