function alphabetizeObjectKeys(obj) {
  var newObj = {};

  Object.keys(obj).sort().forEach(function (key) {
    newObj[key] = obj[key];
  });

  return newObj;
}

module.exports = alphabetizeObjectKeys;
