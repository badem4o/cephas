const expect = require("chai").expect;
const mocks = require("./mocks");
const getErrors = require("../lib/getErrors");

function noRequired() {
  getErrors("", mocks.getErrors.name2);
}

function noMessageEmpty() {
  getErrors("", mocks.getErrors.name3);
}

function noMessageNoMatch() {
  getErrors("abcd", mocks.getErrors.name3);
}

function noMessageMilYord() {
  getErrors("milyordo", mocks.getErrors.milyord2);
}

describe("cephas@getErrors", function () {
  it("Should return the proper error if prop is empty", function () {
    expect(getErrors("", mocks.getErrors.name)).to.equal(
      "Please provide your name"
    );
  });
  it("Should return the proper error if prop is all spaces", function () {
    expect(getErrors("   ", mocks.getErrors.name)).to.equal(
      "Please provide your name"
    );
  });
  it("Should throw an error if required is not specified", function () {
    expect(noRequired).to.throw(
      "Your schema needs to specify if a property is required"
    );
  });
  it("Should throw an error if default message is not specified", function () {
    expect(noMessageEmpty).to.throw(
      "Your schema needs to provide an error message"
    );
    expect(noMessageNoMatch).to.throw(
      "Your schema needs to provide an error message"
    );
    expect(noMessageMilYord).to.throw(
      "Your schema needs to provide an error message"
    );
  });
  it("Should return the proper error if prop is all spaces", function () {
    expect(getErrors("   ", mocks.getErrors.name)).to.equal(
      "Please provide your name"
    );
  });
  it("Should throw an error if no match", function () {
    expect(getErrors("fakeEmail", mocks.getErrors.email)).to.equal(
      "Please provide your email address"
    );
  });
  it("Should be able to take a function as match", function () {
    expect(getErrors("milyordo", mocks.getErrors.milyord)).to.equal(
      "Make sure you are milyord"
    );
    expect(getErrors("milyordo", mocks.getErrors.milyord3)).to.equal(
      "Make sure you are milyord from match function"
    );
  });
  it("Should return false if match", function () {
    expect(getErrors("milyord@example.com", mocks.getErrors.email)).to.equal(
      false
    );
  });
});
