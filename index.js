function alphabetizeObjectKeys(obj) {
  var newObj = {};

  Object.keys(obj).sort().forEach(function (key) {
    if (typeof obj[key] === 'object') {
      newObj[key] = alphabetizeObjectKeys(obj[key]);
    }
    else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

module.exports = alphabetizeObjectKeys;
