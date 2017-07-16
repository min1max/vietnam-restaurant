const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        } 
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        use: 'url-loader?limit=100000' },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: 'file-loader?name=/img/[name].[ext]'
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader?sourceMap'},
            //{ loader: 'url-loader?sourceMap'},
            { loader: 'sass-loader?sourceMap'},
            { loader: 'postcss-loader?sourceMap' },
          ]
        })
      }

    ],
  },


  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable:false,
      allChunks: true
    }),


  ],


  devServer: {
    //contentBase: path.resolve(__dirname, './src'),
    contentBase: path.join(__dirname, 'public'),
    //publicPath: '/',
    compress: false,
    port: 9000
  },

  watch: true

};