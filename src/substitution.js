// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const normAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //return false if the alphabet is not 26 letters or alphabet missing
    if (!alphabet || alphabet.length !== 26) return false;
    //return false if there is a duplicate letter
    for (let character of alphabet) {
      if (alphabet.split(character).length - 1 > 1) return false;
    }
    // add variables for normal alphabet and input to lowercase
    const inputLowerCase = input.toLowerCase();
    let output = "";
    //loop through the input
    for (let character of inputLowerCase) {
      //account for spacing and non letter characters
      if (!alphabet.includes(character)) {
        output += character;
      } else {
        //if encode else decode
        if (encode === true) {
          foundIndex = normAlphabet.indexOf(character);
          output += alphabet[foundIndex];
        } else {
          // decode
          foundIndex = alphabet.indexOf(character);
          output += normAlphabet[foundIndex];
        }
      }
    }
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
