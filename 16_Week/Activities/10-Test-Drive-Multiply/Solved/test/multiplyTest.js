var multiply = require("../src/multiply.js");
var expect = require("chai").expect;

describe("Multiply", function() {
  it("should return the product of x and y when x and y are numbers", function() {
    expect(multiply(2, 4)).to.equal(8);
  });

  it("should throw when either argument is not a number", function() {
    expect(function() {
      multiply(2, "4");
    }).to.throw(Error);
  });
});
