var alphabetizeObjectKeys = require('./');

test('sanity',function () {
  expect(alphabetizeObjectKeys).toBeInstanceOf(Function);
});

test('sorts a flat object',function () {
  var obj = {
    b: 'b',
    a: 'a'
  };

  var objSorted = {
    a: 'a',
    b: 'b'
  };

  var objSortedByFunc = alphabetizeObjectKeys(obj);

  expect(objSortedByFunc).toEqual(objSorted);
});

test('sorts a nested object',function () {
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

  expect(objSortedByFunc).toEqual(objSorted);
});
