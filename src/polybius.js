// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polybiusSquare = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    if (encode) {
      return _encode(input.toLowerCase());
    } else {
      return _decode(input);
    }
  }

  //function for encoding
  function _encode(input) {
    let output = "";
    for (let character of input) {
      // if letter is i or j automatically return 42
      if (character === "i" || character === "j") {
        output += "42";
        continue;
        // if character is not a letter a-z then keep it hte same
      } else if (!/[a-z]/.test(character)) {
        output += character;
        continue;
      } else {
        //find the two index loop twice
        for (let i = 0; i < polybiusSquare.length; i++) {
          // i is the second index
          for (let j = 0; j < polybiusSquare[i].length; j++) {
            // j is the first index
            if (polybiusSquare[i][j] === character)
              output += `${[j + 1]}${[i + 1]}`;
          }
        }
      }
    }
    return output;
  }
  //function for decoding
  function _decode(input) {
    const allDigits = input.match(/[0-9]/g);
    // return false if length of numbers is false
    if (!(allDigits.length % 2 === 0)) return false;
    let output = "";
    //loop through the input
    for (let i = 0; i < input.length; i += 2) {
      const firstInput = input[i];
      const secondInput = input[i + 1];
      // if the input charater id not a number 0-9 then keep it
      if (!/[0-9]/.test(firstInput)) {
        output += firstInput;
        i--;
        continue;
        // if input has 42 then return i/j
      } else if (`${firstInput}${secondInput}` == 42) {
        output += "i/j";
        continue;
      } else {
        //this is the output return of both indexes
        output += polybiusSquare[secondInput - 1][firstInput - 1];
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
