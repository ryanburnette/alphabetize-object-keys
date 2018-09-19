;(function() {
  function alphabetizeObjectKeys(obj) {
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
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = alphabetizeObjectKeys;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return alphabetizeObjectKeys;
      });
    }
    else {
      window.alphabetizeObjectKeys = alphabetizeObjectKeys;
    }
  }
})();
