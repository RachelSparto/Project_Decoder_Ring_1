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
    const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    //if statement to determine if the shift number is accepted
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    //loop through the string
    for (let character of inputLowercase) {
      //add characters that are not included in alphabet
      if (!alphabet.includes(character)) {
        result += character;
      }
      //find the index of all characters in the alphabet array
      const alphabetIndex = alphabet.indexOf((letter) => {
        return letter === character;
      });
      //apply the shift to the the characters found in the alphabet
      if (alphabetIndex !== -1) {
        let indexShift = null;
        //input helper functions once determined if we are encoding or decoding
        if (!encode) {
          return _decode;
        } else {
          return _encode;
        }
        //handle if the shift goes past the beginning or end of the alphabet array
        if (indexShift > 25) {
          indexShift -= 26;
        } else if (indexShift < 0) {
          indexShift += 26;
        }
        //put it all together
        const newLetter = alphabet[indexShift];
        result += newLetter;
      }
    }
    return result;
  }

  return {
    caesar,
  };

  //function for encode
  function _encode(inputLowercase) {
    indexShift = alphabetIndex + shift;
  }

  //function for decode
  function _decode(inputLowercase) {
    indexShift = alphabetIndex - shift;
  }
})();

module.exports = { caesar: caesarModule.caesar };
caesarModule.caesar("test", 0);
