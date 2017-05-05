var assert = require("chai").assert;
var isLuhn = require("../index.js");

describe("Luhn's", function() {
  it("should return false if a number is a luhn", function() {
    var result = isLuhn(7994769772);
    assert.isFalse(result);
  });

  it("should return true if a number is NOT a luhn", function() {
    var word = "not";
    assert.isTrue(isLuhn(7994769773));
  });

  // it("should return true if a phrase is a palindrome", function() {
  //   var phrase = "a man a plan a canal panama";
  //   assert.isTrue(isLuhn(phrase));
  // });

  // it("should return false if a phrase is NOT a palindrome", function() {
  //   var phrase = "this is not a palindrome"
  //   assert.isFalse(isLuhn(phrase));
  // });
});
