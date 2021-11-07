var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var specialChar = "~!@#$%^&*()<>/|\{}'';:?."

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  var password = "";
  var pwdLength = window.prompt("How many characters would you like your password to contain?");
  console.log(pwdLength);

  while((pwdLength < 8) || (pwdLength > 128))
  {
    window.alert("Your password needs to be between 8 and 128 characters long.");
    pwdLength = window.prompt("How many characters would you like your password to contain?");
  };

  var isupperCase = window.confirm("Do you want upper case letters?");
  console.log(isupperCase);

  var islowerCase = window.confirm("Do you want lower case letters?");
  console.log(islowerCase);

  var isNumeric = window.confirm("Do you want numbers?");
  console.log(isNumeric);

  var isSpecial = window.confirm("Do you want special charcters?");
  console.log(isSpecial);

  while (!isupperCase && !islowerCase && !isNumeric && !isSpecial)
  {
    alert("You must choose at least one type of character to continue");
  isupperCase = window.confirm("Do you want upper case letters?");
  console.log(isupperCase);

  islowerCase = window.confirm("Do you want lower case letters?");
  console.log(islowerCase);

  isNumeric = window.confirm("Do you want numbers?");
  console.log(isNumeric);

  isSpecial = window.confirm("Do you want special charcters?");
  console.log(isSpecial);
  };

  var newPassword = ""

  if (isupperCase)
  {
    newPassword += upperCase;    
    window.alert("Your password will include upper case characters");
    
  };

  if (islowerCase)
  {
    newPassword += lowerCase;
    window.alert("Your password will include lower case characters");
  };

  if (isNumeric)
  {
    newPassword += numeric;    
    window.alert("Your password will include numbers");
  };

  if (isSpecial)
  {
    newPassword += specialChar;
    window.alert("Your password will include special characters");
  };

  console.log(newPassword);
// The character options chosen are taken into consideration and randomly chosen from each variable 
  for (var i = 0; i < pwdLength; i ++) {
    password += newPassword.charAt(Math.floor(Math.random() * newPassword.length))
  }

  return password
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
