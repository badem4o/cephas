var expect    = require('chai').expect;
var mocks     = require('./mocks');
var getErrors = require('../lib/getErrors');

function noRequired() {
  getErrors('', mocks.getErrors.name2);
}

function noMessageEmpty() {
  getErrors('', mocks.getErrors.name3);
}

function noMessageNoMatch() {
  getErrors('abcd', mocks.getErrors.name3);
}

function noMessageBadem4o() {
  getErrors('badem4oo', mocks.getErrors.badem4o2);
}

describe('cephas@getErrors', function () {
  it('Should return the proper error if prop is empty', function () {
    expect(getErrors('', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should return the proper error if prop is all spaces', function () {
    expect(getErrors('   ', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should throw an error if required is not specified', function () {
    expect(noRequired).to.throw('Your schema needs to specify if a property is required');
  });
  it('Should throw an error if default message is not specified', function () {
    expect(noMessageEmpty).to.throw('Your schema needs to provide an error message');
    expect(noMessageNoMatch).to.throw('Your schema needs to provide an error message');
    expect(noMessageBadem4o).to.throw('Your schema needs to provide an error message');
  });
  it('Should return the proper error if prop is all spaces', function () {
    expect(getErrors('   ', mocks.getErrors.name)).to.equal('Please provide your name');
  });
  it('Should throw an error if no match', function () {
    expect(getErrors('fakeEmail', mocks.getErrors.email)).to.equal('Please provide your email address');
  });
  it('Should be able to take a function as match', function () {
    expect(getErrors('badem4oo', mocks.getErrors.badem4o)).to.equal('Make sure you are badem4o');
    expect(getErrors('badem4oo', mocks.getErrors.badem4o3)).to.equal('Make sure you are badem4o from match function');
  });
  it('Should return false if match', function () {
    expect(getErrors('badem4o@example.com', mocks.getErrors.email)).to.equal(false);
  });
});
