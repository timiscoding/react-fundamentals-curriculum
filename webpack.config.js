'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
  entry:
    [
      './app/index.js'
    ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders:
      [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.css$/, loader: extractCSS.extract(['css']) },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      ]
  },
  plugins:
    [
      extractCSS
    ]
};
