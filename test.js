var mocha = require('mocha');
var describe = mocha.describe;
var chai = require('chai');
var expect = chai.expect;

var alphabetizeObjectKeys = require('./');

describe('#alphabetizeObjectKeys()',function () {
  it('is a function',function () {
    expect(alphabetizeObjectKeys).to.be.a('function');
  });

  it('sorts a flat object',function () {
    var obj = {
      b: 'b',
      a: 'a'
    };

    var objSorted = {
      a: 'a',
      b: 'b'
    };

    var objSortedByFunc = alphabetizeObjectKeys(obj);

    expect(objSortedByFunc).to.eql(objSorted);
  });

  it('sorts a nested object',function () {
    var obj = {
      b: 'b',
      c: 'c',
      a: {
        j: 'j',
        r: 'r',
        l: 'l'
      }
    };

    var objSorted = {
      a: {
        j: 'j',
        l: 'l',
        r: 'r'
      },
      b: 'b',
      c: 'c'
    };

    var objSortedByFunc = alphabetizeObjectKeys(obj);

    expect(objSortedByFunc).to.eql(objSorted);
  });
});
