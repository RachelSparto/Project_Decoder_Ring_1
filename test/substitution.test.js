// Write your tests here!
const substitution = require("../src/substitution.js").substitution;

const expect = require("chai").expect;
describe("substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("abc", "bcadefghijklmnopqrstuvwxy");
    expect(actual).to.be.false;
  });
  it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("abc", "bcadefghijklmnopqrstuvwxyz");
    const expected = "bca";
    expect(actual).to.eql(expected);
  });
  it("It returns false if there are any duplicate characters in the given alphabet.", () => {
    const actual = substitution("abc", bcadefghijklmnoprrstuvwxyz);
    expect(actual).to.be.false;
  });
  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const actual = substitution("a b c", "bcadefghijklmnopqrstuvwxyz");
    const expected = "b c a";
    expect(actual).to.eql(expected);
  });
  it("It ignores capital letters", () => {
    const actual = substitution("ABC", "bcadefghijklmnopqrstuvwxyz");
    const expected = "bca";
    expect(actual).to.eql(expected);
  });
});
