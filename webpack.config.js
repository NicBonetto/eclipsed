var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'app.bundle.js'
  },
  devtool: 'source-map'
}