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
});
