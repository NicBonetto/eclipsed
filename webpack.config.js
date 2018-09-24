var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './client/main.js',
  output: {
    path: path.resolve(__dirname, 'static/build/'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
}