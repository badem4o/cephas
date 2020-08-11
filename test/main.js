const expect = require("chai").expect;
const mocks = require("./mocks");
const cephas = require("../index");
const validate = cephas(mocks.schema);

describe("Cephas", function () {
  it("Should return false if no errors", function () {
    expect(validate(mocks.noErrors)).to.equal(false);
  });
  it("Should return an object with errors", function () {
    expect(validate(mocks.noName).name).to.equal("Please provide your name");
    expect(validate(mocks.noName).email).to.equal(undefined);
    expect(validate(mocks.noName).age).to.equal(undefined);
    expect(validate(mocks.noEmail).name).to.equal(undefined);
    expect(validate(mocks.noEmail).email).to.equal(
      "Please provide your email address"
    );
    expect(validate(mocks.noEmail).age).to.equal(undefined);
    expect(validate(mocks.noAge).name).to.equal(undefined);
    expect(validate(mocks.noAge).email).to.equal(undefined);
    expect(validate(mocks.noAge).age).to.equal("Please provide your age");
  });
});
