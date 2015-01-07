var expect = require('chai').expect;
var mocks  = require('./mocks');
var cephas = require('../index');
var schema = cephas(mocks.schema);

describe('Cephas', function () {
  it('Should return false if no errors', function () {
    expect(schema.validate(mocks.noErrors)).to.equal(false);
  });
  it('Should return an object with errors', function () {
    expect(schema.validate(mocks.noName).name).to.equal('Please provide your name');
    expect(schema.validate(mocks.noName).email).to.equal(undefined);
    expect(schema.validate(mocks.noName).age).to.equal(undefined);
    expect(schema.validate(mocks.noEmail).name).to.equal(undefined);
    expect(schema.validate(mocks.noEmail).email).to.equal('Please provide your email address');
    expect(schema.validate(mocks.noEmail).age).to.equal(undefined);
    expect(schema.validate(mocks.noAge).name).to.equal(undefined);
    expect(schema.validate(mocks.noAge).email).to.equal(undefined);
    expect(schema.validate(mocks.noAge).age).to.equal('Please provide your age');
  });
});
