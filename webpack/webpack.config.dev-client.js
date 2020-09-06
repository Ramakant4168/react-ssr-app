const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const webpack = require('webpack');
const path = require('path');
import CompressionPlugin from 'compression-webpack-plugin'

module.exports = {
  devtool: 'eval',
  name: 'client',
  context: path.join(__dirname, '..', 'src'),  
  entry: './client.js',
  output: {
    path: assetsPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ]),
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]

};
