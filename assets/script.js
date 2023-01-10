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

var passwordArraysObject = {
  number: numericCharacters,
  upperCase: upperCasedCharacters,
  lowerCase: lowerCasedCharacters,
  special: specialCharacters,
};

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
  var lengthOfPassword = validatePasswordLength(minLength, maxLength);
  // Call length of password function. Min = 10, Max = 64

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

  var maxLengthOfSpecialCharacters = 1;
  var charactersRemaining = lengthOfPassword - maxLengthOfSpecialCharacters;

  // Function that loops through an object, asking user confirms and validates answer.  If user types invalid infomation, the prompt will continue to show.
  function validationCheckerAndPrompt(ObjectToValidate) {
    var validationAnswersObject = {};
    var passwordAnswersTemp;
    for (var i = 0; i < Object.keys(ObjectToValidate).length; i++) {
      if (Object.keys(ObjectToValidate)[i] === "special") {
        // -------------------------------------FIX THIS------------------------------------------------
        if (
          charactersRemaining ===
          lengthOfPassword - maxLengthOfSpecialCharacters
        ) {
          alert("Your password we be full of special characters");
        }
        validationAnswersObject[Object.keys(ObjectToValidate)[i]] =
          charactersRemaining + maxLengthOfSpecialCharacters;
      } else {
        // Prompt user - Would you like (numbers/upperCase/lowerCase...)
        passwordAnswersTemp = confirm(
          "Would you like " +
            Object.keys(ObjectToValidate)[i] +
            " in your password? \n Click Ok for Yes, Cancel for No"
        );
        if (passwordAnswersTemp === false) {
          passwordAnswersTemp = 0;
          charactersRemaining = charactersRemaining;
        } else {
          passwordAnswersTemp = prompt(
            "How many " +
              Object.keys(ObjectToValidate)[i] +
              " characters would you like?"
          );
          while (isNaN(passwordAnswersTemp)) {
            passwordAnswersTemp = prompt("Please enter a valid number");
          }
          charactersRemaining = charactersRemaining - passwordAnswersTemp;
          while (charactersRemaining < 1) {
            charactersRemaining =
              charactersRemaining + parseInt(passwordAnswersTemp);
            passwordAnswersTemp = prompt(
              "Sorry, this is too many " +
                Object.keys(ObjectToValidate)[i] +
                " values.\n You have " +
                charactersRemaining +
                " out of a password length of " +
                lengthOfPassword +
                ".\n How many " +
                Object.keys(ObjectToValidate)[i] +
                " values would you like?\n Note: One or more characters need to be remaining for special characters."
            );
            while (isNaN(passwordAnswersTemp)) {
              passwordAnswersTemp = prompt("Please enter a valid number");
            }
            charactersRemaining = charactersRemaining - passwordAnswersTemp;
          }
          alert(
            "You have selected " +
              passwordAnswersTemp +
              " " +
              Object.keys(ObjectToValidate)[i] +
              "\nYou have " +
              charactersRemaining +
              " remaining"
          );
        }

        // --------------- END PROMPT VALIDATION LOWERCASE --------------------------
        // Add the objectTo
        validationAnswersObject[Object.keys(ObjectToValidate)[i]] =
          passwordAnswersTemp;

        // And Repeat
      }
    }
    return validationAnswersObject;
  }
  var answersArray = validationCheckerAndPrompt(passwordArraysObject);
  return answersArray;
}

var answers = getPasswordOptions();
console.log(answers);

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
