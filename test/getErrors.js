var expect    = require('chai').expect;
var mocks     = require('./mocks');
var getErrors = require('../lib/getErrors');

function noRequired() {
  getErrors('', mocks.getErrors.name2);
}

function noType() {
  getErrors('1234', mocks.getErrors.name1);
}

describe('cephas@getErrors', function () {
  it('Should return the proper error if prop is empty', function () {
    expect(getErrors('', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should return the proper error if prop is all spaces', function () {
    expect(getErrors('   ', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should throw an error if no type is specified', function () {
    expect(noRequired).to.throw('Your schema needs to specify if a property is required');
  });
  it('Should return the proper error if prop is all spaces', function () {
    expect(getErrors('   ', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should return the proper error if prop is wrong type', function () {
    expect(getErrors('abc', mocks.getErrors.age)).to.equal('Please provide your age');
    expect(getErrors('123', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should throw an error if no type is specified', function () {
    expect(noType).to.throw('Your chema needs to specify a type for each property');
  });
  it('Should throw an error if no match', function () {
    expect(getErrors('fakeEmail', mocks.getErrors.email)).to.equal('Please provide your email address');
  });
  it('Should return false if string', function () {
    expect(getErrors('fakeEmail', mocks.getErrors.name)).to.equal(false);
  });
  it('Should return false if number', function () {
    expect(getErrors('12345', mocks.getErrors.age)).to.equal(false);
    expect(getErrors(' 12345', mocks.getErrors.age)).to.equal(false);
    expect(getErrors(' 1 2 3 4 5', mocks.getErrors.age)).to.equal(false);
  });
  it('Should return false if match', function () {
    expect(getErrors('badem4o@example.com', mocks.getErrors.email)).to.equal(false);
  });
});
