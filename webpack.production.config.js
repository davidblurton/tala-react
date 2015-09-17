var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var brand = require('./app/consts/brand');

var cssModulesLoader = 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'

module.exports = {
  entry: {
    javascript: './app/index.js',
    vendors: ['react', 'react-dom']
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'build', 'assets'),
    publicPath: '/assets',
    devtool: 'source-map'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?stage=0&optional=runtime',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', cssModulesLoader)
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
    new HtmlWebpackPlugin({title: 'tala.is', filename: '../index.html'}),
    new ExtractTextPlugin('styles.[chunkhash].css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.IgnorePlugin(/\.json$/)
  ]
};
