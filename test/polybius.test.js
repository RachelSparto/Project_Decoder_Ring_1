// Write your tests here!
const polybius = require("../src/polybius.js").polybius;

const expect = require("chai").expect;
describe("polybius", () => {
  it("When encoding, it translates the letters i and j to 42", () => {
    const letterI = polybius("i");
    const letterJ = polybius("j");
    const expected = "42";
    expect(letterI).to.eql(expected);
    expect(letterJ).to.eql(expected);
  });
  it("When decoding, it translates 42 to (i/j)", () => {
    const actual = polybius("42", false);
    const expected = "i/j";
    expect(actual).to.eql(expected);
  });
  it("It ignores capital letters.", () => {
    const actual = polybius("ABC");
    const expected = "112131";
    expect(actual).to.eql(expected);
  });
});
