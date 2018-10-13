// jshint node: true, asi: true
'use strict';

module.exports = function alphabetizeObjectKeys(obj) {
  var newObj = {};

  Object.keys(obj).sort().forEach(function (key) {
    if ((obj[key]).constructor.name === 'Object') {
      newObj[key] = alphabetizeObjectKeys(obj[key]);
    }
    else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}
