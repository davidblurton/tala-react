var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var brand = require('./app/consts/brand');

var cssModulesLoader = 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'

var outputDir = path.join(__dirname, 'build')

module.exports = {
  entry: {
    javascript: './app/index.js',
    html: './app/index.html'
  },

  output: {
    filename: 'bundle.js', //`[name]${production ? '.[chunkhash]' : ''}.js`,
    path: outputDir,
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
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
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
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.IgnorePlugin(/\.json$/)
  ]
};
