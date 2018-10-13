//jshint asi: true
var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index.js',
    library: 'alphabetizeObjectKeys',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  mode: process.env.NODE_ENV || 'development'
}
