// Write your tests here!
//import ceaser
const caesar = require("../src/caesar.js");

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
});
