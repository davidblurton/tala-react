var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var brand = require('./app/consts/brand');

var cssModulesLoader = 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'

var outputDir = path.join(__dirname, 'build')

module.exports = {
  entry: {
    javascript: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './app/index.js']
  },

  output: {
    filename: 'bundle.js',
    path: outputDir,
    devtool: 'source-map'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime'],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style-loader!' + cssModulesLoader
      }, {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-simple-vars')({variables: brand}),
    require('postcss-color-function'),
    require('postcss-calc')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'app']
  },

  plugins: [
    new HtmlWebpackPlugin({title: 'tala.is'}),
    new webpack.IgnorePlugin(/\.json$/)
  ]
};
