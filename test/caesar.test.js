// Write your tests here!
//import ceaser
const caesar = require("../src/caesar.js").caesar;

const expect = require("chai").expect;
describe("Caesar", () => {
  it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    const firstCase = caesar("string", 0);
    const secondCase = caesar("string", -26);
    const thirdCase = caesar("string", 26);
    const fourthCase = caesar("string");
    expect(firstCase).to.be.false;
    expect(secondCase).to.be.false;
    expect(thirdCase).to.be.false;
    expect(fourthCase).to.be.false;
  });
  it("It ignores capital letters", () => {
    const actual = caesar("Abc", 1);
    const expected = "bcd";
    expect(actual).to.eql(expected);
  });
  it("When encoding, it handles shifts that go past the end of the alphabet", () => {
    const actual = caesar("abc", -1);
    const expected = "zab";
    expect(actual).to.eql(expected);
  });
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    let actual = caesar("a b c!", 1);
    let expected = "b c d!";
    expect(actual).to.eql(expected);
    actual = caesar("b c d!", 1, false);
    expected = "a b c!";
    expect(actual).to.eql(expected);
  });
});
