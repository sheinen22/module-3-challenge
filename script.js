// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var charSet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "!@#$%^&*()><[]{}"]

function promptMe () {
  var q1 = prompt("Please enter your desired password length (Must be between 8-128).", "answer here");
  // console.log(q1)
  if (q1 < 8 || q1 > 128) {
    alert("Please enter a number between 8 and 128");
    promptMe();
  } else {
      var q2 = confirm("Do you want your password to include lowercase letters? Click 'okay' if you want lowercase letters.");
      var q3 = confirm("Do you want your password to include uppercase letters? Click 'okay' if you want uppercase letters.");
      var q4 = confirm("Do you want your password to include numbers? Click 'okay' if you want numbers.");
      var q5 = confirm("Do you want your password to include special characters? Click 'okay' if you want special characters.");
      var Chars = createCharList(q2, q3, q4, q5)
      generatePassword(q1, Chars)
    }
}

function createCharList (lower, upper, numbers, special) {
  var charList = ""
  if (lower){
    charList += charSet[0];
  }
  if (upper){
    charList += charSet[1];
  }
  if (numbers){
    charList += charSet[2];
  }
  if (special){
    charList += charSet[3];
  }
  if (charList.length === 0) {
    alert("No characters were chosen")
  }
  return charList;
}
function generatePassword (passLength, charList) {
  var password = ""
  for (let i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * charList.length)
    var char = charList[randomNumber]
    password += char
    //get the length of the charlist
    //generate a random character for every place in the length ie if length = 8, pull 8 random characters from charlist
    //select from charlist the index position of the random number we created
    //add selected character to password variable
  }
  // return password
  console.log(password)
}


// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
