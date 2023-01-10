// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Enter Validation requirements here
minLength = 10;
maxLength = 64;

// Function to prompt user for password options
function getPasswordOptions() {
  // -------------------------VALIDATION FOR LENGTH OF PASSWORD CHECK ---------------------------
  //   Ask User how many letters they want?
  // inital number
  //  store number in var
  // store letters remaining in var
  // -------------------------VALIDATION FOR LENGTH OF PASSWORD CHECK ----------------------------
  function validatePasswordLength(min, max) {
    // Prompt user for a number
    var passwordLength = prompt(
      "Length of password (10 - 64 characters)",
      "10"
    );
    // check for not a number, under 10 or over 64
    while (
      typeof passwordLength !== "number" ||
      passwordLength < min ||
      passwordLength > max
    ) {
      // If number is valid - break out of while loop and continue
      if (passwordLength >= min && passwordLength <= max) {
        convertedAnswer = passwordLength;
        break;
      }
      // if not valid, repeat prompt
      else {
        passwordLength = prompt(
          "Not enough characters or too many! \n Please choose a number between 10 and 64."
        );
      }
    }
    return passwordLength;
  }
  // Call length of password function. Min = 10, Max = 64
  var lengthOfPassword = validatePasswordLength(minLength, maxLength);
  return lengthOfPassword;

  // ------------------------- End VALIDATION LENGTH CHECK ----------------------------

  // --------------------------------------------------------------------------------
  // prompt - confirm- user for option
  // userResponse = confirm
  // if confirm = True{
  // do this
  // var Option number = prompt, how many do you want? press cancel for random amount...
  // if option number = more than letters remaining - 1 (-1 for the special)
  //  alert(Too many x - You have chosen Y amount of characters for your password. Cannot have X in Y )
  // Repeat  var Option number = prompt....
  // store = Option number
  // letters remaining = letters remaining - option number
  // break
  // }
  // else - confirm = false{
  // letters remaining = letters remaining
  // continue
  // if(when gets to last object option (.length-1)){
  // letters remaining === initial number
  // alert - (You have chosen no uppercase, lowercase, numbers (for loop object.length-1)){
  // Do you want all special characters in your password? Ok to get password.  Cancel to go back.
  // yes - to continue
  // no - to go back, and start again.
  // }
  // }
}

var validPasswordLength = getPasswordOptions();
var letterRemaining = validPasswordLength;

console.log("valid password " + validPasswordLength);
console.log("letters remaining " + letterRemaining);
//  get answer 5 numbers back from user
// 1) password length
// 2) Uppercase letters:
// 3) Lowercase letters:
// 4) Numeric characters:
// 5) Special

// }

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  // For each prompt answer - go into that array and choose random character from each array.
  // Add to var = new password for each iteration
  // Shuffle order of new password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // display new password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
