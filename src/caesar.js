// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //make a variable to hold the alphabet, to make the string lowercase and for end result
    const str = input.toLowercase;
    let result = "";
    const alphabet = [
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
    //if statement to determine if the shift number is accepted
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    //loop through the string

      //add characters that are not included in alphabet

      //find the index of all characters in the alphabet array

      //apply the shift to the the characters found in the alphabet
      //declare if we are encoding or decoding the string
      //handle if the shift goes past the beginning or end of the alphabet array
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
caesarModule.caesar("test", 0);
