const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: './renderer/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  target: 'electron'
}
