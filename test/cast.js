var expect = require('chai').expect;
var cast   = require('../lib/cast');

describe('cephas@cast', function () {
  it('Should return number when passed a string of numbers', function () {
    expect(cast('123456')).to.equal(123456);
  });
  it('Should be able to cast if prop has whitespaces', function () {
    expect(cast(' 123 456')).to.equal(123456);
  });
  it('Should return string when passted a string of letters', function () {
    expect(cast('abcd')).to.equal('abcd');
  });
});
