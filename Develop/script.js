// Assignment Code
var generateBtn = document.querySelector("#generate");

var inputQ = ["lowercase? y/n","uppercase ? y/n","numeric? y/n","special characters? y/n"];
var passwordData = ["abcdefghijklmopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUV","01234456789","[$&+,:;=?@#|'<>.-^*()%!]"];

// console.log(passwordData.numbers);
// console.log(passwordData.alpabet);
// console.log(passwordData.special);
// Write password to the #password input
function writePassword() {
  generatePassword();
  

  //passwordText.value = password;

}
function generatePassword(){
  var pLen = prompt("Choose a length between 8 and 128");
  var charType = [];
  for(var i =0; i<inputQ.length; i++){
    charType.push(prompt("Include " + inputQ[i]));
    console.log(charType);
  }
  //checks to see if valif input if true then continues
  if (validInput(pLen,charType)){
    var pass = make(pLen,charType);
    console.log(pass);
    var passwordText = document.querySelector("#password");
    passwordText.value=pass;
  }
  else{
    //restarts back to prompts
    writePassword();
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
  var checkedNum = checkNum(l);
  var checkedCase = checkCase(t);

  if(checkedNum==true && checkedCase==true && NotAllNo(t)==true){
    return true;
  }
  else{
    return false;
  }
}
//checks to see if number a valid input of between 8-128
function checkNum(l){
  if((parseInt(l)<8) || (parseInt(l)>128)){
    alert("PICK A NUMBER 8 THROUGH 128!!!!");
    console.log("1 failed");
    return false;
  }
  else{
    return true;
  }
}
//checks to see if input is y or n
function checkCase(t){
  for(var i=0; i<t.length; i++){
    if((t[i]==="y") || (t[i]==="n") ){
      return true;
    }
    else{
        alert("ANSWER y FOR YES AND n FOR NO!!");
        //console.log("2 failed")
        return false;
    }
  }
}
//checks if not all inputs are no
function NotAllNo(t){
  var stringOfInput = "";
  for(var i =0; i<t.length;i++){
    stringOfInput = stringOfInput+t[i];
    console.log(stringOfInput)
  }
  if(stringOfInput==="nnnn"){
    alert("CANNOT ALL BE NO");
    return false;
  }
  else{
    return true
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
