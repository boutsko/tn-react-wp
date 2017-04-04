/* eslint-disable */

var path = require('path')

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    root: root
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
