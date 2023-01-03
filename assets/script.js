// Assignment code here
// Need to make some arrays to establish possible characters that I can use in the password generator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "'", ",", "<", ".", ">", "?", "`", "~"];


function generatePassword() { 
  const userCharSet = [];
  let randomPassword = "";

  let input = prompt("Number of characters desired for password:");
  let numberOfChar = parseInt(input);

  if (isNaN(numberOfChar) || numberOfChar < 8 || numberOfChar > 128) {
    window.alert("Please enter valid number between 8 and 128.")
    generatePassword();
  } else {
    console.log(numberOfChar);
  }

  let inputSecond = confirm("Include numbers in your password?");
  let charNumber = inputSecond 

  if (charNumber == true) {
    Array.prototype.push.apply(userCharSet, numbers);
    console.log(userCharSet);
  }
  
  let inputThird = confirm("Include lowercase letters in your password?");
  let charLower = inputThird 

  if (charLower == true) {
    Array.prototype.push.apply(userCharSet, lowerLetters);
    console.log(userCharSet);
  }

  let inputFourth = confirm("Include uppercase letters in your password?");
  let charUpper = inputFourth 

  if (charUpper == true) {
    Array.prototype.push.apply(userCharSet, upperLetters);
    console.log(userCharSet);
  }

  let inputFifth = confirm("Include symbols in your password?");
  let charSymbols = inputFifth 

  if (charSymbols == true) {
    Array.prototype.push.apply(userCharSet, symbols);
    console.log(userCharSet);
  }

  if (charNumber == false && charLower == false && charUpper == false && charSymbols == false){
    window.alert("Please select at least one available character criteria.")
    generatePassword();
  }

  for(let i = 0; i < numberOfChar; i++) {
    const randomIndex = Math.floor(Math.random() * userCharSet.length);
    randomPassword += userCharSet[randomIndex];
  }

  console.log(randomPassword);
  return randomPassword;


}












// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
