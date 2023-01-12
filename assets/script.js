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

// Enter Validation requirements here ---------------------------------
minLength = 10;
maxLength = 64;

var passwordArraysObject = {
  number: numericCharacters,
  upperCase: upperCasedCharacters,
  lowerCase: lowerCasedCharacters,
  special: specialCharacters,
};

// ----------------------------------------------------------------

// Function to prompt user for password options
function getPasswordOptions() {
  // -------------------------VALIDATION FOR LENGTH OF PASSWORD CHECK ------------------------------------------------------------
  function validatePasswordLength(min, max) {
    // Prompt user for a number
    var passwordLength = prompt(
      "Please enter a password length...\nLength of password (" +
        min +
        "-" +
        max +
        " characters.)"
    );
    // check for not a number, under 10 or over 64
    while (
      typeof passwordLength !== "number" ||
      passwordLength < min ||
      passwordLength > max
    ) {
      // If number is valid - break out of while loop and continue
      if (passwordLength >= min && passwordLength <= max) {
        passwordLength = passwordLength;
        break;
      }
      // if not valid, repeat prompt
      else {
        passwordLength = prompt(
          "Not enough characters or too many! \n Please choose a number between" +
            min +
            " and " +
            max +
            "."
        );
      }
    }
    return passwordLength;
  }
  var lengthOfPassword = validatePasswordLength(minLength, maxLength);
  // Call length of password function. Min = 10, Max = 64

  // ------------------------- End VALIDATION LENGTH CHECK -----------------------------------------------------------------------

  // At least one special character
  var maxLengthOfSpecialCharacters = 1;
  //
  var charactersRemaining = lengthOfPassword - maxLengthOfSpecialCharacters;

  // -----------------------------------------------Validate the prompt options ------------------------------------------------------------------------------------
  // Function that loops through an object, asking user confirms and validates answer.  If user types invalid infomation, the prompt will continue to show.
  function validationCheckerAndPrompt(ObjectToValidate) {
    var validationAnswersObject = {};
    var passwordAnswersTemp;
    for (var i = 0; i < Object.keys(ObjectToValidate).length; i++) {
      // if it a special - alert
      if (Object.keys(ObjectToValidate)[i] === "special") {
        if (
          charactersRemaining ===
          lengthOfPassword - maxLengthOfSpecialCharacters
        ) {
          alert("Your password we be full of special characters");
        }
        validationAnswersObject[Object.keys(ObjectToValidate)[i]] =
          charactersRemaining + maxLengthOfSpecialCharacters;
      } else {
        // Anything other than special = Prompt user - Would you like (numbers/upperCase/lowerCase...)
        passwordAnswersTemp = confirm(
          "Would you like " +
            Object.keys(ObjectToValidate)[i] +
            " in your password? \n Click Ok for Yes, Cancel for No"
        );
        //  if confirm is false - 0 will be added to this prompt
        if (passwordAnswersTemp === false) {
          passwordAnswersTemp = 0;
          charactersRemaining = charactersRemaining;
        } else {
          // if user does want option to be added - ask how many
          passwordAnswersTemp = prompt(
            "How many " +
              Object.keys(ObjectToValidate)[i] +
              " characters would you like?"
          );

          //  if user input is not a number - continue to prompt
          while (
            isNaN(passwordAnswersTemp) ||
            passwordAnswersTemp === null ||
            passwordAnswersTemp === ""
          ) {
            passwordAnswersTemp = prompt("Please enter a valid number");
          }
          charactersRemaining = charactersRemaining - passwordAnswersTemp;
          // If the user enters a number that is too high, remove number and ask for another. (Example cannot have 200 Uppercase letters if the password length is 10)
          while (charactersRemaining < 0) {
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
            while (
              isNaN(passwordAnswersTemp) ||
              passwordAnswersTemp === null ||
              passwordAnswersTemp === ""
            ) {
              passwordAnswersTemp = prompt("Please enter a valid number");
            }
            charactersRemaining = charactersRemaining - passwordAnswersTemp;
          }
          // alert user, they have selected... they have...remaining
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
        // Add the validated answer to validationAnswersObject
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

// -----------------------------------------------End validate the prompt options get|PasswordOptions()------------------------------------------------------------------------------------

// Function for getting a random element from an array
function getRandom(arr) {
  var i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function generatePassword() {
  // Password options a generated and validated
  var answers = getPasswordOptions();
  // Loop through the arrays, shuffle each one and add to the shuffledArrays
  var shuffledArrays = {};
  for (var i = 0; i < Object.values(passwordArraysObject).length; i++) {
    var shuffledArray = getRandom(Object.values(passwordArraysObject)[i]);
    // If number in prompt is larger than the length of the array, make a longer array
    while (Object.values(answers)[i] > shuffledArray.length) {
      // add the same array onto the array with concatenate. This keeps it as an array, rather than an object
      shuffledArray = shuffledArray.concat(shuffledArray);
    }
    shuffledArrays[i] = shuffledArray;
  }

  // Loop through the shuffled arrays object, for each one, splice it to the password options
  var splicedArrays = {};
  for (var i = 0; i < Object.values(answers).length; i++) {
    var splicedArray = shuffledArrays[i].splice(0, Object.values(answers)[i]);
    splicedArrays[i] = splicedArray;
  }

  // Loop through the values of the spliceArrays object push them to one array - The object is going to an array
  var fullPasswordArray = [];
  for (var i = 0; i < Object.values(splicedArrays).length; i++) {
    fullPasswordArray.push(Object.values(splicedArrays)[i]);
  }
  // Now fullPasswordArray is an array of arrays. [[numeric], [upperCase], [lowerCase], [special]]
  var finalPasswordArray = [];
  for (var i = 0; i < fullPasswordArray.length; i++) {
    finalPasswordArray = finalPasswordArray.concat(fullPasswordArray[i]);
  }

  finalPasswordArray = getRandom(finalPasswordArray);

  var password = getRandom(finalPasswordArray);
  password = password.join("");
  console.log("paasword = " + password);

  return password;
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
