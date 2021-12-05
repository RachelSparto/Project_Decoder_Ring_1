// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //make a variable to hold the alphabet, to make the string lowercase and for end result
    const inputLowercase = input.toLowerCase();
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    //if statement to determine if the shift number is accepted
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    //loop through the string
    for (let character of inputLowercase) {
      //add characters that are not included in alphabet
      if (!alphabet.includes(character)) {
        result += character;
        continue;
      }
      //find the index of all characters in the alphabet array
      const alphabetIndex = alphabet.indexOf(character);
      //apply the shift to the the characters found in the alphabet
      //input helper functions once determined if we are encoding or decoding
      const shiftIndex = !encode
        ? decodeShift(alphabetIndex, shift)
        : encodeShift(alphabetIndex, shift);
      //handle if the shift goes past the beginning or end of the alphabet array
      //put it all together
      result += alphabet[shiftIndex];
    }
    return result;
  }

  //function for encode
  function encodeShift(alphabetIndex, shift) {
    if (alphabetIndex + shift > 25) {
      return alphabetIndex + shift - 26;
    } else if (alphabetIndex + shift < 0) {
      return alphabetIndex + shift + 26;
    } else {
      return alphabetIndex + shift;
    }
  }

  //function for decode
  function decodeShift(alphabetIndex, shift) {
    if (alphabetIndex - shift > 25) {
      return alphabetIndex - shift - 26;
    } else if (alphabetIndex - shift < 0) {
      return alphabetIndex - shift + 26;
    } else {
      return alphabetIndex - shift;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
caesarModule.caesar("test", 0);
